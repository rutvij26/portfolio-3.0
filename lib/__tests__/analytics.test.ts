import {
  initAnalytics,
  trackPageView,
  trackEvent,
  trackResumeDownload,
  trackProjectView,
  trackContactFormSubmission,
  trackExternalLink,
  trackGitHubVisit,
} from "../analytics";

describe("Analytics", () => {
  beforeEach(() => {
    // Reset dataLayer before each test
    global.window.dataLayer = [];
    document.title = "Test Page";
  });

  describe("initAnalytics", () => {
    it("should initialize analytics (no-op for GTM)", () => {
      expect(() => initAnalytics()).not.toThrow();
    });
  });

  describe("trackPageView", () => {
    it("should track page view", () => {
      trackPageView("/test");
      expect(global.window.dataLayer).toHaveLength(1);
      expect(global.window.dataLayer[0]).toEqual({
        event: "page_view",
        page_path: "/test",
        page_title: "Test Page",
      });
    });

    it("should handle missing dataLayer gracefully", () => {
      delete (global.window as any).dataLayer;
      expect(() => trackPageView("/test")).not.toThrow();
    });
  });

  describe("trackEvent", () => {
    it("should track event with all parameters", () => {
      trackEvent("Category", "Action", "Label", 100);
      expect(global.window.dataLayer).toHaveLength(1);
      expect(global.window.dataLayer[0]).toEqual({
        event: "custom_event",
        event_category: "Category",
        event_action: "Action",
        event_label: "Label",
        value: 100,
      });
    });

    it("should track event without optional parameters", () => {
      trackEvent("Category", "Action");
      expect(global.window.dataLayer[0]).toEqual({
        event: "custom_event",
        event_category: "Category",
        event_action: "Action",
        event_label: undefined,
        value: undefined,
      });
    });
  });

  describe("trackResumeDownload", () => {
    it("should track resume download", () => {
      trackResumeDownload();
      expect(global.window.dataLayer).toHaveLength(1);
      expect(global.window.dataLayer[0]).toEqual({
        event: "resume_download",
        event_category: "Resume",
        event_action: "Download",
        event_label: "ATS Resume PDF",
      });
    });
  });

  describe("trackProjectView", () => {
    it("should track project view", () => {
      trackProjectView("Test Project");
      expect(global.window.dataLayer[0]).toEqual({
        event: "project_view",
        event_category: "Project",
        event_action: "View",
        event_label: "Test Project",
      });
    });
  });

  describe("trackContactFormSubmission", () => {
    it("should track successful submission", () => {
      trackContactFormSubmission(true);
      expect(global.window.dataLayer[0]).toEqual({
        event: "contact_form_submission",
        event_category: "Contact",
        event_action: "Submit Success",
      });
    });

    it("should track failed submission", () => {
      trackContactFormSubmission(false);
      expect(global.window.dataLayer[0]).toEqual({
        event: "contact_form_submission",
        event_category: "Contact",
        event_action: "Submit Error",
      });
    });
  });

  describe("trackExternalLink", () => {
    it("should track external link click", () => {
      trackExternalLink("https://example.com", "LinkedIn");
      expect(global.window.dataLayer[0]).toEqual({
        event: "external_link_click",
        event_category: "External Link",
        event_action: "Click",
        event_label: "LinkedIn",
        link_url: "https://example.com",
      });
    });
  });

  describe("trackGitHubVisit", () => {
    it("should track GitHub visit", () => {
      trackGitHubVisit("test-repo");
      expect(global.window.dataLayer[0]).toEqual({
        event: "github_visit",
        event_category: "GitHub",
        event_action: "Repository Visit",
        event_label: "test-repo",
      });
    });
  });
});
