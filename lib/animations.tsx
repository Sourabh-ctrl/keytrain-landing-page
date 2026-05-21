'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

// Animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
  },
}

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

// Component wrappers
interface MotionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FadeInUp({ children, className, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, className, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, className, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.5, delay, ease: [0.25, 0.4, 0.25, 1] }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  fast?: boolean
}

export function StaggerContainer({ children, className, fast = false }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fast ? staggerContainerFast : staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  )
}

// Counter animation component
interface AnimatedCounterProps {
  value: string
  className?: string
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  // Extract numeric part
  const numericMatch = value.match(/[\d.]+/)
  const numeric = numericMatch ? parseFloat(numericMatch[0]) : 0
  const suffix = value.replace(/[\d.]+/, '')
  
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {numeric}
      </motion.span>
      {suffix}
    </motion.span>
  )
}

// Floating animation for decorative elements
export function FloatingElement({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

// Hover scale animation
export function HoverScale({ children, className, scale = 1.02 }: { children: ReactNode; className?: string; scale?: number }) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
