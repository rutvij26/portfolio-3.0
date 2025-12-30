import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "../ContactForm";
import { trackContactFormSubmission } from "@/lib/analytics";

jest.mock("@/lib/analytics", () => ({
  trackContactFormSubmission: jest.fn(),
}));

const mockExecuteRecaptcha = jest.fn();
jest.mock("react-google-recaptcha-v3", () => ({
  useGoogleReCaptcha: () => ({
    executeRecaptcha: mockExecuteRecaptcha,
  }),
}));

global.fetch = jest.fn();

describe("ContactForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockExecuteRecaptcha.mockResolvedValue("recaptcha-token");
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
  });

  it("should render form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("should validate required fields", async () => {
    render(<ContactForm />);
    const submitButton = screen.getByText("Send Message");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name must be at least/i)).toBeInTheDocument();
    });
  });

  it("should validate email format", async () => {
    render(<ContactForm />);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByText("Send Message");

    await userEvent.type(emailInput, "invalid-email");
    await userEvent.type(screen.getByLabelText(/name/i), "Test");
    await userEvent.selectOptions(
      screen.getByLabelText(/subject/i),
      "Question"
    );
    await userEvent.type(
      screen.getByLabelText(/message/i),
      "Test message with enough characters"
    );
    await userEvent.click(submitButton);

    await waitFor(
      () => {
        const errorMessages = screen.queryAllByText(/invalid email/i);
        expect(errorMessages.length).toBeGreaterThan(0);
      },
      { timeout: 3000 }
    );
  });

  it("should submit form successfully", async () => {
    render(<ContactForm />);

    await userEvent.type(screen.getByLabelText(/name/i), "Test User");
    await userEvent.type(screen.getByLabelText(/email/i), "test@example.com");
    await userEvent.selectOptions(
      screen.getByLabelText(/subject/i),
      "Question"
    );
    await userEvent.type(
      screen.getByLabelText(/message/i),
      "This is a test message"
    );

    const submitButton = screen.getByText("Send Message");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
      expect(trackContactFormSubmission).toHaveBeenCalledWith(true);
    });
  });

  it("should handle submission error", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Failed" }),
    });

    render(<ContactForm />);

    await userEvent.type(screen.getByLabelText(/name/i), "Test User");
    await userEvent.type(screen.getByLabelText(/email/i), "test@example.com");
    await userEvent.selectOptions(
      screen.getByLabelText(/subject/i),
      "Question"
    );
    await userEvent.type(
      screen.getByLabelText(/message/i),
      "This is a test message"
    );

    const submitButton = screen.getByText("Send Message");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
      expect(trackContactFormSubmission).toHaveBeenCalledWith(false);
    });
  });

  it("should handle reCAPTCHA error gracefully", async () => {
    mockExecuteRecaptcha.mockRejectedValue(new Error("reCAPTCHA error"));

    render(<ContactForm />);

    await userEvent.type(screen.getByLabelText(/name/i), "Test User");
    await userEvent.type(screen.getByLabelText(/email/i), "test@example.com");
    await userEvent.selectOptions(
      screen.getByLabelText(/subject/i),
      "Question"
    );
    await userEvent.type(
      screen.getByLabelText(/message/i),
      "This is a test message"
    );

    const submitButton = screen.getByText("Send Message");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    });
  });
});
