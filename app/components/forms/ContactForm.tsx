"use client";
// declare const grecaptcha: any;
// import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/forms.scss";
import { formatPhoneNumber } from "./phoneFormatting";
import { getRecaptchaToken } from "./Recaptcha";

const ContactForm: React.FC = () => {
  const router = useRouter(); // Initialize Next.js router
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [operandA, setOperandA] = useState(0);
  const [operandB, setOperandB] = useState(0);

  useEffect(() => {
  const scriptId = "recaptcha-script";
  if (document.getElementById(scriptId)) return;

  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
  script.id = scriptId;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}, []);

  useEffect(() => {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    setOperandA(a);
    setOperandB(b);
  }, []);

  const handleBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue =
          "Are you sure you want to leave? Changes you made may not be saved.";
        return e.returnValue;
      }
    },
    [isDirty]
  ); // Add isDirty to dependency array if it's used inside
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty, handleBeforeUnload]);

  const handleInputChange = () => {
    setIsDirty(true);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const data = {
      user_name: formData.get("user_name") as string,
      user_email: formData.get("user_email") as string,
      user_phone: formData.get("user_phone") as string,
      user_subject: formData.get("user_subject") as string,
      message: formData.get("message") as string,
      job_title: formData.get("job_title") as string,
      operand_a: formData.get("operand_a") as string,
      operand_b: formData.get("operand_b") as string,
      additional_info_1: formData.get("additional_info_1") as string,
      embed_url: window.location.href, // Capture the current page URL
    };

    setLoading(true);

    try {
      const token = await getRecaptchaToken("submit");

      const response = await fetch("/api/sendEmailForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          token, // 👈 now the token is included in the request payload
        }),
      });

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        toast.success("Message sent successfully!");

       
        
        // 🔽 SUBMIT TO HUBSPOT
  await fetch("https://api.hsforms.com/submissions/v3/integration/submit/242925281/2d9d4129-3372-4ea7-987f-fc63f2841bab", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: [
        { name: "firstname", value: data.user_name },
        { name: "email", value: data.user_email },
        { name: "phone", value: data.user_phone },
        { name: "message", value: data.message },
        { name: "jobtitle", value: data.job_title }, // custom property in HubSpot
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title,
      },
    }),
  });

        formRef.current.reset();
        // Redirect to thank-you page after success
        setIsDirty(false); // ✅ disable the beforeunload warning
        router.push("/thank-you/");
      } else {
        toast.error(result.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center bg-cover bg-center">
      <div className="relative lg:p-10 w-full">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          onChange={handleInputChange}
          className="space-y-4"
        >
      <div className="flex flex-wrap">
          {/* Name Field */}
          <div className="relative md:w-1/3 w-full pr-2">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="user_name"
                className="w-full p-3 pl-12 bg-white/90 text-black border border-white placeholder-gray rounded-md"
                placeholder="Name"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="relative md:w-1/3 w-full pr-2">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="user_email"
                className="w-full p-3 pl-12 bg-white/90 text-black border border-white placeholder-gray rounded-md"
                placeholder="Email Address"
                required
              />
            </div>
          </div>

          {/* Phone Field */}
          <div className="relative md:w-1/3 w-full">
            <label
              htmlFor="user_phone"
              className="block text-sm font-medium"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                name="user_phone"
                className="w-full p-3 pl-12 bg-white/90 text-black border border-white placeholder-gray rounded-md"
                placeholder="Phone"
                required
                maxLength={14} // Prevents extra characters after formatting
                onChange={formatPhoneNumber}
              />
            </div>
          </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm font-medium"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <textarea
                name="message"
                className="w-full p-3 pl-12 bg-white/90 border border-white placeholder-gray rounded-md min-h-[120px]"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="additional_info_1"
              className="block text-sm font-medium"
            >
              What is {operandA} + {operandB}?
            </label>
            <input
              type="number"
              name="additional_info_1"
              className="w-full bg-white/90"
              required
            />
            <input type="hidden" name="operand_a" value={operandA} />
            <input type="hidden" name="operand_b" value={operandB} />
          </div>

          {/* Honeypot field - should remain empty */}
          <div style={{ display: "none" }} aria-hidden="true">
            <label htmlFor="job_title">Job Title</label>
            <input
              type="text"
              name="job_title"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center lg:mb-[-55px] mb-[-15px]">
            <button
              type="submit"
              className="btn-main square"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send us a Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
