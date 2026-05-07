'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import ThreeExperience from '@/components/ThreeExperience'
import ContactForm from '@/components/ContactForm'
import Location from '@/components/Location'
import Footer from '@/components/Footer'
import { animateOnScroll } from '@/lib/utils'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      // Initialize scroll animations
      animateOnScroll()
    }
  }, [isLoading])

  useEffect(() => {
    // Custom cursor
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      const cursor = document.querySelector('.custom-cursor') as HTMLElement
      if (cursor) {
        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
      }
    }

    const handleMouseDown = () => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement
      if (cursor) {
        cursor.classList.add('active')
      }
    }

    const handleMouseUp = () => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement
      if (cursor) {
        cursor.classList.remove('active')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-content">
          <div className="loader-logo">MavixHub</div>
          <div className="mt-4 text-gray-400">Loading amazing experiences...</div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Custom Cursor */}
      <div className="custom-cursor" />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <ThreeExperience />
        <ContactForm />
        <Location />
        <Footer />
      </main>
    </>
  )
}
