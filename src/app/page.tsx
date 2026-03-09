'use client'

import { useState, useEffect, useCallback } from 'react'

// Slide data structure
interface SlideContent {
  id: number
  section: 'problem' | 'awakening' | 'solution' | 'closing'
  title: string
  subtitle?: string
  content: string[]
  highlight?: string
  icon?: string
  isDark?: boolean
  videoId?: string
  videoTitle?: string
}

const slides: SlideContent[] = [
  // COVER SLIDE
  {
    id: 0,
    section: 'problem',
    title: 'Privacy 101',
    subtitle: 'Take Back Your Life',
    content: [
      'A journey from surveillance to freedom',
      'Understanding the problem. Discovering the solution.',
    ],
    highlight: 'Your data. Your rules. Your freedom.',
    isDark: true,
  },
  // PART 1: THE PROBLEM
  {
    id: 1,
    section: 'problem',
    title: 'Part I',
    subtitle: 'The Problem',
    content: [
      'We live in a world of invisible surveillance.',
      'Every click, every purchase, every conversation is tracked.',
      'And most of us never agreed to any of it.',
    ],
    highlight: 'The Invisible Network',
    isDark: true,
  },
  {
    id: 2,
    section: 'problem',
    title: 'The Surveillance Economy',
    subtitle: 'You Are The Product',
    content: [
      'Your phone tracks your location 24/7 — even when you think it\'s off.',
      'Your emails are scanned for keywords to serve you ads.',
      'Your purchases create a profile sold to the highest bidder.',
      'Your social media feeds are engineered to keep you scrolling.',
      'Your "free" services come at the cost of your privacy.',
    ],
    highlight: 'If it\'s free, you\'re not the customer — you\'re the product.',
    icon: '👁️',
  },
  {
    id: 3,
    section: 'problem',
    title: 'Shadow Profiles',
    subtitle: 'Facebook Tracks Everyone',
    content: [
      'Facebook collects data on people who don\'t even have accounts.',
      'Your friends\' contact lists contain YOUR information.',
      'They build profiles without your consent or knowledge.',
      'Tracking pixels follow you across the entire web.',
      'Even non-users are mapped and categorized for profit.',
    ],
    highlight: 'You don\'t need an account to be tracked by Facebook.',
    icon: '👤',
    videoId: 'sR8M8hZxuPo',
    videoTitle: 'How Facebook Collects Data On You',
  },
  {
    id: 4,
    section: 'problem',
    title: 'What They Know About You',
    subtitle: 'The Data Harvest',
    content: [
      'Your exact location history — every place you\'ve ever been.',
      'Your contacts, calls, and message patterns.',
      'Your health data, sleep patterns, and heart rate.',
      'Your political views, religious beliefs, and sexual orientation.',
      'Your spending habits, net worth, and credit score.',
      'Your fears, desires, and deepest secrets.',
    ],
    highlight: 'They know you better than you know yourself.',
    icon: '📊',
  },
  {
    id: 5,
    section: 'problem',
    title: 'Your Phone: The Ultimate Spy',
    subtitle: 'A Tracking Device In Your Pocket',
    content: [
      'Cameras and microphones that can be activated remotely.',
      'GPS that tracks your every movement.',
      'Apps that share data with dozens of third parties.',
      'Operating systems designed to harvest your information.',
      'Sensors that detect your heart rate, steps, and even your mood.',
    ],
    highlight: '"Spyware is all over our smartphones" — Naomi Brockwell',
    icon: '📱',
  },
  {
    id: 6,
    section: 'problem',
    title: 'Messaging: The Privacy Illusion',
    subtitle: 'WhatsApp Is Not Private',
    content: [
      'WhatsApp shares your metadata with Facebook by default.',
      'Your contact list, call logs, and usage patterns are harvested.',
      'End-to-end encryption doesn\'t protect YOUR metadata.',
      'Who you talk to, when, and how often — all tracked.',
      'The "private" label is marketing, not reality.',
    ],
    highlight: 'Your "private" messages are a goldmine for advertisers.',
    icon: '💬',
    videoId: 'cDaB2YVrsV8',
    videoTitle: 'WhatsApp vs Signal: The Privacy Truth',
  },
  {
    id: 7,
    section: 'problem',
    title: 'Email: Not Your Own',
    subtitle: 'Gmail Reads Your Messages',
    content: [
      'Google scans every email for advertising purposes.',
      'Your private conversations are indexed and analyzed.',
      'Data is stored indefinitely on servers you don\'t control.',
      'One password reset can lock you out of your entire digital life.',
      'Your emails can be subpoenaed without your knowledge.',
    ],
    highlight: 'Would you let a stranger read your mail? You already do.',
    icon: '✉️',
  },
  {
    id: 8,
    section: 'problem',
    title: 'Money: You Don\'t Own It',
    subtitle: 'The Banking Illusion',
    content: [
      'Banks create money from nothing — then charge you interest.',
      'Your transactions are tracked, analyzed, and reported.',
      'Accounts can be frozen without warning or explanation.',
      'Inflation erodes your savings while they profit.',
      'Financial surveillance is the norm, not the exception.',
    ],
    highlight: 'Promise on paper or screen — you don\'t own it, you rent it.',
    icon: '💳',
  },
  {
    id: 9,
    section: 'problem',
    title: 'The Trust Paradox',
    subtitle: 'No Accountability',
    content: [
      'Companies promise privacy — then sell your data.',
      'Terms of service are designed to be unreadable.',
      'Data breaches happen daily, with minimal consequences.',
      'Your information is shared with governments without warrants.',
      'The fox is guarding the henhouse.',
    ],
    highlight: 'Marketing serves everyone\'s interest but yours.',
    icon: '🤝',
  },
  // PART 2: THE AWAKENING
  {
    id: 10,
    section: 'awakening',
    title: 'Part II',
    subtitle: 'The Awakening',
    content: [
      'Recognition is the first step to change.',
      'You cannot protect what you do not understand.',
      'Now that you see the problem, you can choose differently.',
    ],
    highlight: 'Awareness',
    isDark: true,
  },
  {
    id: 11,
    section: 'awakening',
    title: 'Privacy Is A Right',
    subtitle: 'Not A Luxury',
    content: [
      'Privacy is not about having something to hide.',
      'Privacy is about having something to protect.',
      'Your thoughts, your choices, your life — yours alone.',
      'Curtains exist for a reason. So should digital curtains.',
    ],
    highlight: 'Privacy should be the standard, not the exception.',
    icon: '🛡️',
  },
  {
    id: 12,
    section: 'awakening',
    title: 'The Power of Choice',
    subtitle: 'Taking Control',
    content: [
      'You can choose services that respect your privacy.',
      'You can use tools that protect rather than exploit.',
      'You can support companies aligned with your values.',
      'Every choice is a vote for the world you want.',
    ],
    highlight: 'Your data. Your choice. Your power.',
    icon: '⚡',
  },
  // PART 3: THE SOLUTION
  {
    id: 13,
    section: 'solution',
    title: 'Part III',
    subtitle: 'The Solution',
    content: [
      'Now for the good news.',
      'You have options. You have tools. You have power.',
      'Let\'s build your privacy toolkit.',
    ],
    highlight: 'Your Privacy Toolkit',
    isDark: true,
  },
  {
    id: 14,
    section: 'solution',
    title: 'Phone Security: GrapheneOS',
    subtitle: 'Take Back Your Device',
    content: [
      'Pixel phones with GrapheneOS — no Google spyware.',
      'Sandboxed apps with zero telemetry by default.',
      'Verified boot ensures your OS hasn\'t been tampered with.',
      'Multiple profiles to silo your activities.',
      'Mullvad VPN + F-Droid for secure app downloads.',
      'Auto-reboot wipes sensitive RAM data after 12 hours.',
    ],
    highlight: '"Privacy isn\'t about going off grid — it\'s about making informed choices."',
    icon: '🔒',
    videoId: 'F_uO8xH8UbM',
    videoTitle: 'GrapheneOS: Privacy Made Simple',
  },
  {
    id: 15,
    section: 'solution',
    title: 'Messaging: Signal',
    subtitle: 'True Private Communication',
    content: [
      'Open source — anyone can verify the code.',
      'No metadata collection — who you message stays private.',
      'End-to-end encryption by default on everything.',
      'Disappearing messages for sensitive conversations.',
      'No ads, no trackers, no data selling.',
      'Used by journalists, activists, and privacy advocates worldwide.',
    ],
    highlight: 'Signal respects your privacy. WhatsApp exploits it.',
    icon: '💬',
  },
  {
    id: 16,
    section: 'solution',
    title: 'Email: ProtonMail',
    subtitle: 'Encrypted Communication',
    content: [
      'End-to-end encryption — even Proton can\'t read your emails.',
      'Zero-knowledge architecture protects your data.',
      'Based in Switzerland — protected by strong privacy laws.',
      'Sign up via Tor for maximum anonymity.',
      'Includes Proton VPN for protected browsing.',
    ],
    highlight: 'Swiss law > US law. Your emails are truly yours.',
    icon: '📧',
  },
  {
    id: 17,
    section: 'solution',
    title: 'Cell Service: The Burner Strategy',
    subtitle: 'Ditch The SIM Trap',
    content: [
      'Silent Link: pricey but completely clean.',
      'Cash prepaid SIMs bought at gas stations.',
      'No ID required. No contract. No tracking.',
      'Swap every 6 months for maximum privacy.',
      'Separate your identity from your device.',
    ],
    highlight: 'Your phone number shouldn\'t be your identity.',
    icon: '📞',
  },
  {
    id: 18,
    section: 'solution',
    title: 'Financial Freedom: Bitcoin',
    subtitle: 'Money You Actually Own',
    content: [
      'No middleman — peer-to-peer transactions.',
      '21 million cap — scarce, deflationary, predictable.',
      'Pseudonymous — just keys, no name required.',
      'Lightning Network for instant, private transactions.',
      'Custody your own wealth — no bank can freeze it.',
      'Electrum wallet with no address reuse.',
    ],
    highlight: 'Watch your transaction vanish in 3... 2... 1...',
    icon: '₿',
    videoId: 'kvhjQfqZ4KQ',
    videoTitle: 'Bitcoin: Financial Freedom',
  },
  {
    id: 19,
    section: 'solution',
    title: 'Your First Week Checklist',
    subtitle: 'Getting Started',
    content: [
      '1. Create a ProtonMail account — sign up via Tor.',
      '2. Get a cash prepaid SIM from a gas station.',
      '3. Install GrapheneOS on a Pixel device.',
      '4. Switch to Signal for private messaging.',
      '5. Set up a Bitcoin wallet — Electrum, never reuse addresses.',
      '6. Install a VPN — Mullvad is excellent.',
      '7. Keep it on. Always.',
    ],
    highlight: 'Small steps. Big impact.',
    icon: '✅',
  },
  // CLOSING
  {
    id: 20,
    section: 'closing',
    title: 'Freedom',
    subtitle: 'The Ultimate Goal',
    content: [
      'Freedom to control your own data.',
      'Freedom to communicate without surveillance.',
      'Freedom to transact without permission.',
      'Freedom to live without being tracked.',
      'Freedom to make your own choices.',
    ],
    highlight: 'Privacy isn\'t paranoia — it\'s power.',
    icon: '🕊️',
    isDark: true,
  },
  {
    id: 21,
    section: 'closing',
    title: 'Take Back Your Life',
    subtitle: 'The Journey Continues',
    content: [
      'This is not about going off the grid.',
      'This is about making informed choices.',
      'Every step toward privacy is a step toward freedom.',
      'Start small. Stay consistent. Keep learning.',
    ],
    highlight: 'Your privacy. Your power. Your life.',
    isDark: true,
  },
]

// Section colors
const sectionColors: Record<string, { bg: string; accent: string; text: string }> = {
  problem: { bg: 'from-red-950 via-gray-950 to-gray-950', accent: 'text-red-400', text: 'text-red-300' },
  awakening: { bg: 'from-amber-950 via-gray-950 to-gray-950', accent: 'text-amber-400', text: 'text-amber-300' },
  solution: { bg: 'from-emerald-950 via-gray-950 to-gray-950', accent: 'text-emerald-400', text: 'text-emerald-300' },
  closing: { bg: 'from-blue-950 via-gray-950 to-gray-950', accent: 'text-blue-400', text: 'text-blue-300' },
}

// YouTube embed component
function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative w-full max-w-md mx-auto mt-6 mb-4 rounded-xl overflow-hidden bg-black/50 border border-white/10">
      {/* Video title */}
      <div className="px-4 py-2 bg-white/5 border-b border-white/10">
        <p className="text-sm text-white/70 flex items-center gap-2">
          <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          {title}
        </p>
      </div>
      
      {/* Video container */}
      <div className="relative pt-[56.25%]">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
            <div className="w-16 h-16 rounded-full bg-red-600/80 flex items-center justify-center animate-pulse">
              <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        )}
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  )
}

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const slide = slides[currentSlide]
  const colors = sectionColors[slide.section]
  const progress = ((currentSlide + 1) / slides.length) * 100

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index < 0 || index >= slides.length) return
    setDirection(index > currentSlide ? 'next' : 'prev')
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsAnimating(false)
    }, 150)
  }, [currentSlide, isAnimating])

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1)
    }
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    }
  }, [currentSlide, goToSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goToSlide(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goToSlide(slides.length - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, goToSlide])

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    setTouchStart(null)
  }

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br ${colors.bg} text-white overflow-hidden relative`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-white/40 to-white/80 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="fixed top-6 right-8 text-sm font-mono text-white/40 z-50">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      {/* Main content */}
      <div className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-20 relative z-10">
        <div 
          className={`max-w-4xl mx-auto transition-all duration-300 w-full ${
            isAnimating 
              ? direction === 'next' 
                ? 'opacity-0 translate-x-8' 
                : 'opacity-0 -translate-x-8'
              : 'opacity-100 translate-x-0'
          }`}
        >
          {/* Section label */}
          {slide.section !== 'problem' || slide.id !== 0 ? (
            <div className={`text-sm font-medium tracking-widest uppercase mb-4 md:mb-6 ${colors.accent}`}>
              {slide.section === 'problem' && 'The Problem'}
              {slide.section === 'awakening' && 'The Awakening'}
              {slide.section === 'solution' && 'The Solution'}
              {slide.section === 'closing' && 'Freedom'}
            </div>
          ) : null}

          {/* Icon */}
          {slide.icon && (
            <div className="text-5xl md:text-6xl mb-4 md:mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
              {slide.icon}
            </div>
          )}

          {/* Title */}
          <h1 
            className={`font-bold mb-2 md:mb-4 ${
              slide.isDark ? 'text-4xl md:text-7xl' : 'text-3xl md:text-6xl'
            } leading-tight`}
          >
            {slide.title}
          </h1>

          {/* Subtitle */}
          {slide.subtitle && (
            <h2 className={`text-lg md:text-2xl font-light mb-4 md:mb-8 ${colors.text}`}>
              {slide.subtitle}
            </h2>
          )}

          {/* Content */}
          <div className="space-y-2 md:space-y-4 mb-6 md:mb-10">
            {slide.content.map((line, index) => (
              <p 
                key={index}
                className="text-base md:text-xl text-white/80 leading-relaxed flex items-start gap-3"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className={`mt-1.5 md:mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  slide.section === 'problem' ? 'bg-red-400' :
                  slide.section === 'awakening' ? 'bg-amber-400' :
                  slide.section === 'solution' ? 'bg-emerald-400' : 'bg-blue-400'
                }`} />
                <span>{line}</span>
              </p>
            ))}
          </div>

          {/* Video embed */}
          {slide.videoId && slide.videoTitle && (
            <YouTubeEmbed videoId={slide.videoId} title={slide.videoTitle} />
          )}

          {/* Highlight */}
          {slide.highlight && (
            <div className="relative mt-4 md:mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg blur-xl" />
              <blockquote className={`relative text-lg md:text-2xl font-medium italic px-4 md:px-6 py-3 md:py-4 border-l-4 ${
                slide.section === 'problem' ? 'border-red-400 text-red-200' :
                slide.section === 'awakening' ? 'border-amber-400 text-amber-200' :
                slide.section === 'solution' ? 'border-emerald-400 text-emerald-200' : 'border-blue-400 text-blue-200'
              }`}>
                "{slide.highlight}"
              </blockquote>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 md:p-8 flex justify-between items-center z-50">
        {/* Prev button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-full transition-all text-sm md:text-base ${
            currentSlide === 0 
              ? 'opacity-30 cursor-not-allowed' 
              : 'opacity-70 hover:opacity-100 hover:bg-white/10 active:scale-95'
          }`}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Dot indicators */}
        <div className="flex gap-1.5 md:gap-2 flex-wrap justify-center max-w-xs md:max-w-md">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? slide.section === 'problem' ? 'bg-red-400 scale-125' :
                    slide.section === 'awakening' ? 'bg-amber-400 scale-125' :
                    slide.section === 'solution' ? 'bg-emerald-400 scale-125' : 'bg-blue-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 md:py-3 rounded-full transition-all text-sm md:text-base ${
            currentSlide === slides.length - 1 
              ? 'opacity-30 cursor-not-allowed' 
              : 'opacity-70 hover:opacity-100 hover:bg-white/10 active:scale-95'
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-16 md:bottom-24 left-1/2 -translate-x-1/2 text-xs text-white/30 font-mono hidden md:block">
        Use arrow keys or swipe to navigate
      </div>
    </div>
  )
}
