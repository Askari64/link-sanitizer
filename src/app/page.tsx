"use client";

import { useState } from "react";
import { InputWithButton } from "@/components/derivedComponents/InputWithButton";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { sanitizer } from "@/lib/utils";

export default function Home() {
  const [sanitizedUrl, SetSanitizedUrl] = useState("");

  const handleSanitizedUrl = (url: string) => {
    const result = sanitizer(url);
    SetSanitizedUrl(result);
  };

  const CopySanitizedUrl = async () => {
    if (!sanitizedUrl) return;
    await navigator.clipboard.writeText(sanitizedUrl);
    toast("Link has been copied to clipboard")
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
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
    </div>
  );
}
