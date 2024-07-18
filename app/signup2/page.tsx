"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

type FormInputs = {
  fullName: string;
  email: string;
  role: "attendee" | "organizer";
  referralCode?: string;
};

const Signup2 = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormInputs>>({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const endpoint =
        data.role === "attendee"
          ? "/api/v1/user/attendee"
          : "/api/v1/user/organizer";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      // Handle successful signup
      router.push("/signup/success");
    } catch (err) {
      setError("An error occurred during signup. Please try again.");
    }
  };

  const handleNextStep = (data: Partial<FormInputs>) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const renderStep1 = () => (
    <form
      onSubmit={handleSubmit(handleNextStep)}
      className="flex flex-col gap-y-6 justify-center items-center"
    >
      <h2 className="text-neutral-300 text-center font-light text-xl md:text-2xl">
        Step 1: Personal Information
      </h2>
      <input
        {...register("fullName", { required: "Full name is required" })}
        type="text"
        placeholder="Enter your full name"
        className="w-full px-4 h-[36px] text-neutral-300 bg-neutral-800 border rounded-lg border-neutral-700"
      />
      {errors.fullName && (
        <span className="text-red-500 text-sm">{errors.fullName.message}</span>
      )}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        type="email"
        placeholder="Enter your email address"
        className="w-full px-4 h-[36px] text-neutral-300 bg-neutral-800 border rounded-lg border-neutral-700"
      />
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email.message}</span>
      )}
      <Button label="Next" />
    </form>
  );

  const renderStep2 = () => (
    <div className="flex flex-col gap-y-6 justify-center items-center">
      <h2 className="text-neutral-300 text-center font-light text-xl md:text-2xl">
        Step 2: Choose Your Role
      </h2>
      <Button
        onClick={() => handleNextStep({ role: "attendee" })}
        label="Sign up as Attendee"
      />
      <Button
        onClick={() =>
          onSubmit({ ...formData, role: "organizer" } as FormInputs)
        }
        label="Sign up as Organizer"
      />
    </div>
  );

  const renderStep3 = () => (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-6 justify-center items-center"
    >
      <h2 className="text-neutral-300 text-center font-light text-xl md:text-2xl">
        Step 3: Referral Code (Optional)
      </h2>
      <input
        {...register("referralCode")}
        type="text"
        placeholder="Enter referral code (optional)"
        className="w-full px-4 h-[36px] text-neutral-300 bg-neutral-800 border rounded-lg border-neutral-700"
      />
      <Button label="Complete Signup" />
    </form>
  );

  return (
    <main className="min-h-screen">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-20">
          <div className="md:col-start-3 md:col-span-2">
            <div className="flex flex-col gap-y-6 justify-center items-center">
              <Logo />
              <h1 className="text-neutral-300 text-center font-light text-xl md:text-3xl">
                Welcome to Ecim!
              </h1>
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
              {error && (
                <div className="text-red-500 text-sm mt-4 text-center">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Signup2;
