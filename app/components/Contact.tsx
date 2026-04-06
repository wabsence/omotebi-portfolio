'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Linkedin, Send, Clock } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'omotebi321@gmail.com',
      href: 'mailto:omotebi321@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 7938 685016',
      href: 'tel:+447938685016',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Manchester, United Kingdom',
      href: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/omotebi-egbowon',
      href: 'https://linkedin.com/in/omotebi-egbowon',
      color: 'from-blue-600 to-blue-700',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={container}>

          <motion.div variants={item} className="mb-14">
            <p className="text-primary-400 font-mono text-sm mb-2">05 — contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left — contact items */}
            <motion.div variants={item} className="space-y-4">
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I&apos;m currently available for DevOps, Platform Engineering, and DevSecOps opportunities.
                Let&apos;s discuss how I can help build secure, scalable infrastructure for your organisation.
              </p>

              {contactItems.map((c) => {
                const Icon = c.icon
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/10 transition-all group"
                  >
                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${c.color} shadow-md flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-500 mb-0.5">{c.label}</div>
                      <div className="text-white font-medium group-hover:text-primary-400 transition-colors text-sm truncate">{c.value}</div>
                    </div>
                    <Send className="w-4 h-4 text-gray-600 group-hover:text-primary-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </motion.a>
                )
              })}

              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-500">Availability</div>
                  <div className="text-white text-sm">Mon–Fri, 9am–6pm GMT · Open to remote & hybrid</div>
                </div>
              </div>
            </motion.div>

            {/* Right — CTA */}
            <motion.div variants={item}>
              <div className="glass rounded-3xl p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Looking for opportunities where I can leverage my expertise to drive DevSecOps transformation and build
                    resilient, secure cloud platforms.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'DevSecOps pipeline implementation',
                      'Cloud infrastructure architecture',
                      'Security compliance frameworks',
                      'Platform engineering & automation',
                      'Team mentoring & enablement',
                    ].map((s, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <a
                    href="mailto:omotebi321@gmail.com"
                    className="block w-full text-center py-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-primary-500/20"
                  >
                    Send Me an Email
                  </a>
                  <a
                    href="https://linkedin.com/in/omotebi-egbowon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3.5 glass glass-hover text-white rounded-xl font-medium transition-all"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div variants={item} className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-400">© {new Date().getFullYear()} <span className="text-white font-medium">Omotebi Egbowon</span>. All rights reserved.</p>
            <p className="text-gray-600 font-mono">built with Next.js · TypeScript · Tailwind</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
