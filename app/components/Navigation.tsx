'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Home, User, Briefcase, Code2, Award, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code2 },
  { name: 'Certifications', href: '#certifications', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
]

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navItems.map(i => i.href.slice(1))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!mounted) return null

  return (
    <>
      {/* Desktop: floating centered top nav */}
      <div className="hidden md:flex fixed top-5 left-0 right-0 z-50 justify-center">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`flex items-center gap-1 px-4 py-2.5 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'bg-slate-900/90 backdrop-blur-xl border-white/10 shadow-xl shadow-black/30'
              : 'bg-slate-900/60 backdrop-blur-lg border-white/5'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, '#home')}
            className="px-3 py-1.5 mr-2 text-sm font-bold text-white hover:text-primary-400 transition-colors"
          >
            OE<span className="text-primary-400">.</span>
          </a>

          <div className="w-px h-5 bg-white/10" />

          {/* Nav Links */}
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive ? 'text-primary-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-primary-500/15 rounded-lg border border-primary-500/30"
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            )
          })}

          <div className="w-px h-5 bg-white/10 ml-1" />

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-1.5 ml-1 rounded-lg text-gray-400 hover:text-primary-400 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile: bottom bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
        <div className="flex items-center justify-around px-1 py-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.href.slice(1)
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg transition-all ${
                  isActive ? 'text-primary-400' : 'text-gray-500'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.name}</span>
              </a>
            )
          })}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex flex-col items-center gap-0.5 px-2 py-1.5 text-gray-500"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-primary-400" /> : <Moon className="w-5 h-5 text-primary-400" />}
            <span className="text-xs">Theme</span>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navigation
