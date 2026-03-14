"use client"

import { useEffect, useState } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { X } from "lucide-react"

interface CalModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CalModal({ isOpen, onClose }: CalModalProps) {

  const [calLoaded, setCalLoaded] = useState(false)

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        styles: { branding: { brandColor: "#0ea5e9" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });

      // Successfully loaded event from the embed
      cal("on", {
        action: "*",
        callback: (e) => {
          setCalLoaded(true);
        }
      });
    })();

    // Safety fallback: if CORS blocks the iframe messages, forcibly hide the loader
    // after 3 seconds so the user is never stuck.
    const timer = setTimeout(() => {
      setCalLoaded(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[90vh] bg-background rounded-lg shadow-2xl overflow-hidden mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] p-2 rounded-full bg-card hover:bg-card/80 transition-colors shadow-lg"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!calLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/90 z-20 rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin shadow-lg" />
              <p className="text-sm font-medium text-muted-foreground animate-pulse">
                Setting up your consultation...
              </p>
            </div>
          </div>
        )}

        <div className="w-full h-full p-4">
          <Cal
            namespace="30min"
            calLink="ravi-zerovo/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: 'month_view', theme: 'auto' }}
          />
        </div>
      </div>
    </div>
  )
}
