'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PlayIcon } from '@heroicons/react/24/solid'
import { business } from '@/data/business'

interface YouTubeVideoProps {
  videoId?: string
  title?: string
  autoplay?: boolean
  className?: string
  aspectRatio?: 'video' | 'wide' | 'square'
}

export function YouTubeVideo({
  videoId = business.youtubeVideoId,
  title = `${business.name} - Professional Painting & Remodeling`,
  autoplay = false,
  className = '',
  aspectRatio = 'video'
}: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay)

  const aspectClasses = {
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
    square: 'aspect-square'
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <div className={`relative ${aspectClasses[aspectRatio]} rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      {!isPlaying ? (
        // Video Thumbnail with Play Button
        <div className="relative w-full h-full group cursor-pointer" onClick={handlePlay}>
          {/* YouTube Thumbnail */}
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1024px"
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pulsing ring */}
              <div className="absolute inset-0 -m-4">
                <div className="w-full h-full rounded-full bg-primary/30 animate-ping" />
              </div>

              {/* Play button */}
              <button
                type="button"
                className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-primary hover:bg-primary-600 rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-300"
                aria-label="Play video"
              >
                <PlayIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white ml-1" />
              </button>
            </div>
          </div>

          {/* Video Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl">
              {title}
            </h3>
            <p className="text-white/80 text-sm md:text-base mt-1">
              Click to watch our story
            </p>
          </div>
        </div>
      ) : (
        // YouTube iframe
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      )}
    </div>
  )
}

// Variant: Hero Video Section
export function HeroVideoSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm mb-4">
            WATCH OUR STORY
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            See Our Work in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how {business.name} transforms homes and businesses across Massachusetts with professional painting and remodeling services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <YouTubeVideo />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {business.yearsInBusiness}+
            </div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {business.reviewCount}+
            </div>
            <div className="text-gray-600 font-medium">5-Star Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              1000+
            </div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              100%
            </div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Variant: Compact Video Card
export function CompactVideoCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <PlayIcon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-secondary text-lg">Watch Our Work</h3>
          <p className="text-sm text-gray-600">See quality in action</p>
        </div>
      </div>
      <YouTubeVideo aspectRatio="video" />
    </div>
  )
}
