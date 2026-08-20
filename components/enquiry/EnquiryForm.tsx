"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import type { EnquiryInput } from "@/schemas/enquiry.schema";
import { enquirySchema } from "@/schemas/enquiry.schema";

type FieldConfig = {
  name: keyof EnquiryInput;
  label: string;
  description: string;
  placeholder: string;
  type?: "text" | "date" | "email" | "tel";
  fullWidth?: boolean;
};

const requiredFields = new Set<keyof EnquiryInput>([
  "course", "name", "dob", "gender", "motherName", "fatherName", "address",
  "mobile1", "email", "class10Percent", "class12Percent",
]);

const fields: FieldConfig[] = [
  { name: "course", label: "Which course are you interested in?", description: "Tell us the programme you would like to enquire about.", placeholder: "e.g. MBBS, BDS, B.Tech" },
  { name: "name", label: "What is your full name?", description: "Enter your name as it appears on your official documents.", placeholder: "e.g. Ananya Sharma" },
  { name: "dob", label: "What is your date of birth?", description: "Choose your date from the calendar.", placeholder: "Select your date of birth", type: "date" },
  { name: "gender", label: "How should we record your gender?", description: "Select the option that applies to you.", placeholder: "Select gender" },
  { name: "motherName", label: "What is your mother's name?", description: "Please enter full name.", placeholder: "e.g. Sunita Sharma" },
  { name: "fatherName", label: "What is your father's name?", description: "Please enter full name.", placeholder: "e.g. Rajesh Sharma" },
  { name: "address", label: "What is your current address?", description: "Include your city, state, and PIN code.", placeholder: "House / street, city, state, PIN code", fullWidth: true },
  { name: "mobile1", label: "What is your primary mobile number?", description: "Use a number where our counsellor can reach you.", placeholder: "e.g. 9876543210", type: "tel" },
  { name: "mobile2", label: "What is an alternate mobile number?", description: "This is optional. Add another reachable number if available.", placeholder: "e.g. 9876543210", type: "tel" },
  { name: "email", label: "What is your email address?", description: "We will use this to contact you about your enquiry.", placeholder: "e.g. name@example.com", type: "email" },
  { name: "class10Percent", label: "What was your Class 10 percentage?", description: "Enter the percentage exactly as shown on your marksheet.", placeholder: "e.g. 92.5%" },
  { name: "class12Stream", label: "Which stream did you take in Class 12?", description: "Mention your academic stream.", placeholder: "e.g. PCB, PCM, Commerce" },
  { name: "class12Percent", label: "What was your aggregate Class 12 percentage?", description: "Enter your overall Class 12 percentage.", placeholder: "e.g. 88.4%" },
  { name: "physicsMarks", label: "What are your Physics marks?", description: "Add marks or percentage, including the maximum if useful.", placeholder: "e.g. 88" },
  { name: "chemistryMarks", label: "What are your Chemistry marks?", description: "Add marks or percentage, including the maximum if useful.", placeholder: "e.g. 91" },
  { name: "mathsMarks", label: "What are your Mathematics marks?", description: "Add marks or percentage, including the maximum if useful.", placeholder: "e.g. 85" },
  { name: "biologyMarks", label: "What are your Biology marks?", description: "Add marks or percentage, including the maximum if useful.", placeholder: "e.g. 94" },
  { name: "csMarks", label: "What are your Computer Science marks?", description: "Leave this blank if it does not apply.", placeholder: "e.g. 90" },
  { name: "schoolNameWithState", label: "What is your school name and state?", description: "Include the state so we can identify your institution correctly.", placeholder: "e.g. Delhi Public School, Delhi", fullWidth: true },
  { name: "neetUgScore", label: "What is your NEET UG score?", description: "Enter your score, rank, or write 'Not applicable'.", placeholder: "e.g. 650 or AIR 12000" },
  { name: "neetPgScore", label: "What is your NEET PG score?", description: "Enter your score, rank, or write 'Not applicable'.", placeholder: "e.g. 540 or AIR 8000" },
  { name: "category", label: "What is your admission category?", description: "Use the category shown on your application documents.", placeholder: "e.g. General, OBC, SC, ST" },
  { name: "cuetScoreRank", label: "What is your CUET score or rank?", description: "Add your score or rank if you have one.", placeholder: "e.g. 780 or Rank 1200" },
  { name: "cetScoreRank", label: "What is your UG / PG CET score or rank?", description: "Add your score or rank if applicable.", placeholder: "e.g. 96 percentile" },
  { name: "clatScoreRank", label: "What is your CLAT score or rank?", description: "Add your score or rank if applicable.", placeholder: "e.g. 82 or Rank 450" },
  { name: "catScoreRank", label: "What is your CAT score or percentile?", description: "Add your score, percentile, or rank if applicable.", placeholder: "e.g. 98.2 percentile" },
  { name: "jeeMainsCrl", label: "What is your JEE Mains CRL?", description: "Enter your Common Rank List number if applicable.", placeholder: "e.g. 12500" },
  { name: "percentile", label: "What is your overall percentile?", description: "Add the relevant entrance-exam percentile.", placeholder: "e.g. 97.4 percentile" },
  { name: "pcmPercent", label: "What is your PCM percentage?", description: "Enter your Physics, Chemistry, and Mathematics percentage.", placeholder: "e.g. 86.7%" },
  { name: "pcbPercent", label: "What is your PCB percentage?", description: "Enter your Physics, Chemistry, and Biology percentage.", placeholder: "e.g. 89.2%" },
  { name: "collegeUniversityName", label: "What is your college or university name?", description: "Enter your current or most recent institution.", placeholder: "e.g. Delhi University", fullWidth: true },
  { name: "courses", label: "Which other courses interest you?", description: "List any additional programmes you would like to discuss.", placeholder: "e.g. BDS, BAMS, Biotechnology", fullWidth: true },
  { name: "marks", label: "Is there any other marks information to share?", description: "Add relevant marks not covered above, or leave blank.", placeholder: "e.g. Graduation: 72%", fullWidth: true },
  { name: "reference", label: "How did you hear about us?", description: "Tell us how you found Eduspray.", placeholder: "e.g. Google, Instagram, Friend" },
];

export function EnquiryForm() {
  const [clientIp, setClientIp] = useState("Detecting...");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.input<typeof enquirySchema>, unknown, EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      gender: undefined,
    },
  });

  useEffect(() => {
    let active = true;

    fetch("/api/client-ip", { cache: "no-store" })
      .then((response) => response.json())
      .then((result: { ip?: string }) => {
        if (active) setClientIp(result.ip || "Unavailable");
      })
      .catch(() => {
        if (active) setClientIp("Unavailable");
      });

    return () => {
      active = false;
    };
  }, []);

  const mobileRegister = (name: "mobile1" | "mobile2") => {
    const registration = register(name);
    return {
      ...registration,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value = event.target.value.replace(/\D/g, "").slice(0, 10);
        registration.onChange(event);
      },
    };
  };

  const onSubmit = async (data: EnquiryInput) => {
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          signatureDataUrl: "",
        }),
      });

      // -------------------------------------------------------
      // Read response safely.
      // Prevents "Unexpected end of JSON input"
      // -------------------------------------------------------
      const text = await res.text();

      let json: {
        ok?: boolean;
        error?: string;
        message?: string;
        clientIp?: string;
      } = {};

      try {
        json = text ? JSON.parse(text) : {};
      } catch {
        console.error("Non-JSON API response:", text);

        throw new Error(
          `Server returned an invalid response (${res.status}). Check the terminal running Next.js.`
        );
      }

      if (!res.ok) {
        throw new Error(
          json.error ||
            json.message ||
            `Submission failed with status ${res.status}.`
        );
      }

      // -------------------------------------------------------
      // Success
      // -------------------------------------------------------
      if (json.clientIp) {
        sessionStorage.setItem("eduspray-submitted-ip", json.clientIp);
      }
      window.location.href = "/enquiry/success";
    } catch (error) {
      console.error("SUBMISSION ERROR:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Unable to submit enquiry."
      );
    }
  };

  return (
    <form
      className="card grid"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-grid">
        {fields.map(({ name, label, description, placeholder, type, fullWidth }) => (
          <div className={`field${fullWidth ? " field-full" : ""}`} key={name}>
            <label htmlFor={String(name)}>
              {label}{requiredFields.has(name) && <span className="required-mark" aria-hidden="true"> *</span>}
            </label>
            <span className="field-description">{description}</span>

            {name === "gender" ? (
              <select id="gender" aria-invalid={errors[name] ? "true" : "false"} defaultValue="" {...register(name)}>
                <option value="" disabled>{placeholder}</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : name === "address" ? (
              <textarea id="address" rows={3} placeholder={placeholder} aria-invalid={errors[name] ? "true" : "false"} {...register(name)} />
            ) : (
              <input id={String(name)} type={type ?? "text"} inputMode={name === "mobile1" || name === "mobile2" ? "numeric" : undefined} maxLength={name === "mobile1" || name === "mobile2" ? 10 : undefined} placeholder={placeholder} aria-invalid={errors[name] ? "true" : "false"} {...(name === "mobile1" || name === "mobile2" ? mobileRegister(name) : register(name))} />
            )}

            {errors[name] && (
              <span className="error">
                {String(
                  errors[name]?.message ?? ""
                )}
              </span>
            )}
          </div>
        ))}
      </div>

      <button
        className="btn-primary"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Submitting..."
          : "Submit Enquiry"}
      </button>
      <p className="form-connection-status" aria-live="polite">
        Connection detected: <strong>{clientIp}</strong>
      </p>
    </form>
  );
}