"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomFormField from "./CustomFormField";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/server/user.actions";

export default function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      if (type === "sign-up") {
        const newUser = await signUp(data);
        setUser(newUser);
      }

      if (type === "sign-in") {
        const res = await signIn({
          email: data.email,
          password: data.password,
        });

        if (res) router.push("/");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 self-center"
        >
          <Image src="/icons/logo.svg" alt="logo" width={34} height={34} />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 text-gray-600">
            {user
              ? "Link your account to get started."
              : "Please enter your details."}
          </p>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {type === "sign-up" && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <CustomFormField
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="First Name..."
                    />
                    <CustomFormField
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Last Name..."
                    />
                  </div>
                  <CustomFormField
                    control={form.control}
                    name="address"
                    label="Address"
                    placeholder="Enter your address..."
                  />
                  <CustomFormField
                    control={form.control}
                    name="city"
                    label="City"
                    placeholder="ex: Albany"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <CustomFormField
                      control={form.control}
                      name="state"
                      label="State"
                      placeholder="ex: NY"
                    />
                    <CustomFormField
                      control={form.control}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="ex: 11101"
                    />
                    <CustomFormField
                      control={form.control}
                      name="dateOfBirth"
                      label="Date of Birth"
                      placeholder="yyyy-mm-dd"
                    />
                    <CustomFormField
                      control={form.control}
                      name="ssn"
                      label="SSN"
                      placeholder="ex: 1234"
                    />
                  </div>
                </>
              )}
              <CustomFormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email..."
              />
              <CustomFormField
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password..."
              />
              <Button type="submit" className="form-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    &nbsp;Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
}
