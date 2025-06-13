"use client";

import { useState } from "react";
import { InputWithButton } from "@/components/derivedComponents/InputWithButton";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { sanitizer } from "@/lib/utils";
import { AnimatedHeading } from "@/components/AnimatedHeading";

export default function Home() {
  const [sanitizedUrl, SetSanitizedUrl] = useState("");

  const handleSanitizedUrl = (url: string) => {
    const result = sanitizer(url);
    SetSanitizedUrl(result);
  };

  const CopySanitizedUrl = async () => {
    if (!sanitizedUrl) return;
    await navigator.clipboard.writeText(sanitizedUrl);
    toast("Link has been copied to clipboard");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <AnimatedHeading />
        <InputWithButton onSanitize={handleSanitizedUrl} />
        {sanitizedUrl && (
          <>
            <p className="text-sm text-muted-foreground break-all">
              Sanitized URL: {sanitizedUrl}
            </p>
            <Button variant="outline" onClick={CopySanitizedUrl}>
              Copy Link
            </Button>
          </>
        )}
      </main>
      <footer className="row-start-3 w-full text-center py-4 mt-8 border-t border-gray-200 text-sm text-muted-foreground flex items-center justify-center gap-2">
        <p>
          Made with{" "}
          <span className="text-red-500" role="img" aria-label="love">
            ❤️
          </span>{" "}
          by <a href="https://askaririzvi.site/" target="_blank" rel="noopener noreferrer" className=" text-gray-500 hover:underline font-semibold mx-1">Askari</a>
        </p>
      </footer>
    </div>
  );
}
