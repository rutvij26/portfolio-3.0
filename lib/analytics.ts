"use client";

// Google Tag Manager dataLayer helper functions
declare global {
  interface Window {
    dataLayer: any[];
  }
}

function pushToDataLayer(data: any) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(data);
  }
}

export function initAnalytics() {
  // GTM initializes automatically, no manual initialization needed
  // This function is kept for compatibility but does nothing
}

export function trackPageView(path: string) {
  pushToDataLayer({
    event: "page_view",
    page_path: path,
    page_title: document.title,
  });
}

export function trackEvent(
  category: string,
  action: string,
  label?: string,
  value?: number
) {
  pushToDataLayer({
    event: "custom_event",
    event_category: category,
    event_action: action,
    event_label: label,
    value: value,
  });
}

export function trackResumeDownload() {
  pushToDataLayer({
    event: "resume_download",
    event_category: "Resume",
    event_action: "Download",
    event_label: "ATS Resume PDF",
  });
}

export function trackProjectView(projectName: string) {
  pushToDataLayer({
    event: "project_view",
    event_category: "Project",
    event_action: "View",
    event_label: projectName,
  });
}

export function trackContactFormSubmission(success: boolean) {
  pushToDataLayer({
    event: "contact_form_submission",
    event_category: "Contact",
    event_action: success ? "Submit Success" : "Submit Error",
  });
}

export function trackExternalLink(url: string, platform: string) {
  pushToDataLayer({
    event: "external_link_click",
    event_category: "External Link",
    event_action: "Click",
    event_label: platform,
    link_url: url,
  });
}

export function trackGitHubVisit(repoName: string) {
  pushToDataLayer({
    event: "github_visit",
    event_category: "GitHub",
    event_action: "Repository Visit",
    event_label: repoName,
  });
}
