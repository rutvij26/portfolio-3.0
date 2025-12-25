"use client";

import ReactGA from "react-ga4";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function initAnalytics() {
  if (GA_ID && typeof window !== "undefined") {
    ReactGA.initialize(GA_ID, {
      testMode: process.env.NODE_ENV === "development",
    });
  }
}

export function trackPageView(path: string) {
  if (GA_ID && typeof window !== "undefined") {
    ReactGA.send({ hitType: "pageview", page: path });
  }
}

export function trackEvent(
  category: string,
  action: string,
  label?: string,
  value?: number
) {
  if (GA_ID && typeof window !== "undefined") {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
}

export function trackResumeDownload() {
  trackEvent("Resume", "Download", "ATS Resume PDF");
}

export function trackProjectView(projectName: string) {
  trackEvent("Project", "View", projectName);
}

export function trackContactFormSubmission(success: boolean) {
  trackEvent("Contact", success ? "Submit Success" : "Submit Error");
}

export function trackExternalLink(url: string, platform: string) {
  trackEvent("External Link", "Click", platform, undefined);
}

export function trackGitHubVisit(repoName: string) {
  trackEvent("GitHub", "Repository Visit", repoName);
}
