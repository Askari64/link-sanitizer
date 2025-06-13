"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton({onSanitize}: {onSanitize: (url:string)=> void}) {
   const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="url" placeholder="Enter link here" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
      <Button type="submit" variant="outline" onClick={()=>onSanitize(inputValue)}>
        Sanitize
      </Button>
    </div>
  )
}
