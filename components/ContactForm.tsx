"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { trackContactFormSubmission } from "@/lib/analytics";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.enum(["Job Opportunity", "Collaboration", "Question"]),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      let recaptchaToken = "";
      if (executeRecaptcha) {
        try {
          recaptchaToken = await executeRecaptcha("contact_form");
        } catch (recaptchaError) {
          // If reCAPTCHA fails, continue without it (server will handle)
          console.warn(
            "reCAPTCHA error (continuing without it):",
            recaptchaError
          );
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        trackContactFormSubmission(true);
        reset();
      } else {
        setSubmitStatus("error");
        trackContactFormSubmission(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      trackContactFormSubmission(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.name && (
          <p className="mt-1 text-xs sm:text-sm text-red-600 dark:text-red-400">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.email && (
          <p className="mt-1 text-xs sm:text-sm text-red-600 dark:text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Subject
        </label>
        <select
          {...register("subject")}
          id="subject"
          className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="Job Opportunity">Job Opportunity</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Question">Question</option>
        </select>
        {errors.subject && (
          <p className="mt-1 text-xs sm:text-sm text-red-600 dark:text-red-400">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={6}
          className="w-full px-4 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
        />
        {errors.message && (
          <p className="mt-1 text-xs sm:text-sm text-red-600 dark:text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot field - hidden from users */}
      <input
        {...register("honeypot")}
        type="text"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {submitStatus === "success" && (
        <div className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-xs sm:text-sm text-green-800 dark:text-green-200">
            Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-xs sm:text-sm text-red-800 dark:text-red-200">
            Something went wrong. Please try again later.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
