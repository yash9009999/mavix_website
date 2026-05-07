import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const animateOnScroll = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach((el) => {
    observer.observe(el)
  })
}

export const animateCounter = (element: HTMLElement, target: number, duration: number = 2000) => {
  let start = 0
  const increment = target / (duration / 16)
  
  const timer = setInterval(() => {
    start += increment
    if (start >= target) {
      element.textContent = target.toString()
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(start).toString()
    }
  }, 16)
}
