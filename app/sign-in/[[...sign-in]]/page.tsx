"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignIn
        afterSignInUrl="/"
        afterSignOutUrl="/"
        appearance={{
          elements: {
            footerPoweredBy: {
              display: "none", // Hides "Powered by Clerk"
            },
            developmentBadge: {
              display: "none", // Hides the development mode badge
            },
          },
        }}
      />
    </div>
  );
}
