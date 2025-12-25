import { render, screen } from "@testing-library/react";
import ContactPage from "../contact/page";
import { contactInfo } from "@/lib/data";

jest.mock("@/components/Navbar", () => ({
  Navbar: () => <nav>Navbar</nav>,
}));

jest.mock("@/components/ContactForm", () => ({
  ContactForm: () => <form>Contact Form</form>,
}));

jest.mock("@/components/ResumeDownload", () => ({
  ResumeDownload: () => <a>Download Resume</a>,
}));

describe("ContactPage", () => {
  it("should render contact page with title", () => {
    render(<ContactPage />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("should render contact information", () => {
    render(<ContactPage />);
    expect(screen.getByText(contactInfo.email)).toBeInTheDocument();
    expect(screen.getByText(contactInfo.location)).toBeInTheDocument();
  });

  it("should render contact form", () => {
    render(<ContactPage />);
    expect(screen.getByText("Contact Form")).toBeInTheDocument();
  });

  it("should render resume download link", () => {
    render(<ContactPage />);
    expect(screen.getByText("Download Resume")).toBeInTheDocument();
  });
});

