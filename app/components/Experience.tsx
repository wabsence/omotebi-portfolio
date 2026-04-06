'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const experiences = [
    {
      company: 'Pharmacy2U',
      role: 'Environment & Release Engineer',
      period: 'January 2026 – Present',
      location: 'Leeds, England, UK',
      color: 'from-primary-500 to-primary-600',
      highlights: [
        'Implemented centralised configuration management using Helm charts, eliminating environment drift across 6 UAT, pre-live, and production environments.',
        'Managed end-to-end release coordination via GitOps and ArgoCD, coordinating environment promotion from development to live.',
        'Established automated drift detection, reducing environment-related deployment failures by 40%.',
        'Implemented Kubernetes Horizontal Pod Autoscalers, improving resource utilisation by 30% during peak demand.',
        'Facilitated engineering workflow workshop to identify bottlenecks and improve team delivery practices.',
      ],
    },
    {
      company: 'MCC',
      role: 'Platform Engineer',
      period: 'October 2023 – December 2025',
      location: 'United Kingdom',
      color: 'from-blue-500 to-blue-600',
      highlights: [
        'Automated Kubernetes management with AWS EKS Auto Mode and GitOps (ArgoCD), reducing operational overhead by 70% and deployment time by 60%.',
        'Integrated SAST (SonarQube) and DAST (OWASP ZAP) into CI/CD pipelines, reducing production security issues by 80%.',
        'Achieved 100% ISO 27001 compliance through automated AWS security scanning aligned with NIST and PCI DSS.',
        'Improved observability by 70% and reduced incident resolution time by 40% using Prometheus, Grafana, and ELK Stack.',
        'Led secure coding initiatives across 10+ engineering teams, reducing OWASP Top 10 vulnerabilities by 75%.',
        'Implemented shift-left security, reducing security debt by 65% and improving developer productivity by 30%.',
      ],
    },
    {
      company: 'FOOTASYLUM',
      role: 'DevOps Engineer',
      period: 'July 2022 – September 2023',
      location: 'Remote',
      color: 'from-purple-500 to-purple-600',
      highlights: [
        'Optimised multi-account AWS organisation, reducing peak event costs by 30% while handling 300% traffic increases on Black Friday.',
        'Implemented GitLab CI/CD pipelines, reducing deployment time by 65% and enabling zero-downtime blue-green deployments.',
        'Deployed ELK Stack for real-time security monitoring, reducing mean time to detect security events from hours to under 5 minutes.',
        'Reduced container infrastructure costs by 45% through Kubernetes resource optimisation and spot instance adoption.',
        'Automated server provisioning with Ansible, reducing manual configuration by 70%.',
      ],
    },
    {
      company: 'Dot',
      role: 'Junior Infrastructure Engineer',
      period: 'January 2020 – June 2022',
      location: 'Remote',
      color: 'from-orange-500 to-orange-600',
      highlights: [
        'Supported migration of 150+ databases to AWS RDS, achieving zero-downtime cutover and reducing infrastructure overhead by 45%.',
        'Collaborated on GitHub Actions and ArgoCD pipeline configuration for EKS environments, improving developer velocity by 40%.',
        'Maintained 99.9% availability for digital banking services through proactive monitoring protocols.',
        'Configured Elastic Load Balancers and Auto Scaling Groups, improving transaction capacity by 35% during peak traffic.',
        'Contributed to PCI DSS compliance, reducing unauthorised access attempts by 70%.',
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="experience" className="section-padding bg-slate-900/40">
      <div className="container-custom">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={container}>

          {/* Header */}
          <motion.div variants={item} className="mb-14">
            <p className="text-primary-400 font-mono text-sm mb-2">02 — experience</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Work Experience</h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line on desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent -translate-x-1/2" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  variants={item}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 items-start`}
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-2 border-slate-950 z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-300" />
                  </div>

                  {/* Card — alternates sides */}
                  <div className={`${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}`}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} flex-shrink-0 shadow-lg`}>
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                          <p className="text-primary-400 font-medium text-sm">{exp.role}</p>
                          <div className="flex flex-wrap gap-3 mt-1.5 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.period}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty column for alternating */}
                  <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
