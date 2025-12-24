"use client"

import { useEffect, useState } from "react"
import { getCalApi } from "@calcom/embed-react"
import { X } from "lucide-react"

interface CalModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CalModal({ isOpen, onClose }: CalModalProps) {
  const [calLoaded, setCalLoaded] = useState(false)
  const [isPreloading, setIsPreloading] = useState(false)

  // Preload Cal.com script as soon as component mounts
  useEffect(() => {
    if (!calLoaded && !isPreloading) {
      setIsPreloading(true)
      ;(async () => {
        try {
          const cal = await getCalApi({ namespace: "30min" })
          cal("ui", {
            hideEventTypeDetails: false,
            layout: "month_view",
            styles: {
              branding: { brandColor: "#38bdf8" },
            },
          })
          setCalLoaded(true)
        } catch (error) {
          console.error("[v0] Cal.com API load error:", error)
        } finally {
          setIsPreloading(false)
        }
      })()
    }
  }, [calLoaded, isPreloading])

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
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-card hover:bg-card/80 transition-colors shadow-lg"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!calLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/90 z-20">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-muted-foreground">Loading calendar...</p>
            </div>
          </div>
        )}

        <div className="w-full h-full p-4">
          <iframe
            src="https://cal.com/ravi-zerovo/30min?embed=true&theme=auto&layout=month_view"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            loading="eager"
            title="Schedule a consultation"
          />
        </div>
      </div>
    </div>
  )
}
