"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Info, Briefcase, FolderOpen, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: Info },
  { name: "Services", url: "/services", icon: Briefcase },
  { name: "Projects", url: "/projects", icon: FolderOpen },
  { name: "Contact", url: "/contact", icon: Mail },
]

export function Navigation() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(navItems[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const currentItem = navItems.find((item) => item.url === pathname)
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [pathname])

  const handleLinkClick = (name: string) => {
    setActiveTab(name)
    setIsMobileMenuOpen(false)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }

  return (
    <>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-4 sm:pt-6 w-full px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between gap-3 sm:gap-6 bg-background/80 border border-border backdrop-blur-lg py-4 px-4 rounded-full shadow-lg">
            {/* Logo */}
            <Link href="/" onClick={() => handleLinkClick("Home")} className="flex-shrink-0">
              <Logo className="w-28 sm:w-32 md:w-36 h-auto" />
            </Link>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.name

                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    onClick={() => handleLinkClick(item.name)}
                    className={cn(
                      "relative cursor-pointer text-sm font-light tracking-wide px-3 py-3 rounded-full transition-all",
                      "text-foreground/80 hover:text-primary hover:bg-primary/5",
                      isActive && "bg-primary/10 text-primary font-normal",
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 bg-background/95 border border-border backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col py-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.name

                  return (
                    <Link
                      key={item.name}
                      href={item.url}
                      onClick={() => handleLinkClick(item.name)}
                      className={cn(
                        "flex items-center gap-3 px-6 py-4 text-sm font-light tracking-wide transition-colors",
                        "text-foreground/80 hover:text-primary hover:bg-primary/5",
                        isActive && "bg-primary/10 text-primary font-normal",
                      )}
                    >
                      <Icon size={18} />
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
