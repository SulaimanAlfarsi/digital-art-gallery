"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { projects, type Project } from "@/lib/folder-projects"

const imagePositions = [
  { x: -80, rotate: -10 },
  { x: -40, rotate: -5 },
  { x: 0, rotate: 0 },
  { x: 40, rotate: 5 },
  { x: 80, rotate: 10 },
]

function GalleryFolderCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      className="project-folder-card group relative w-[288px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.25,
        delay: Math.min(index * 0.03, 0.3),
        ease: [0.32, 0.72, 0, 1],
      }}
      style={{
        perspective: "1200px",
        zIndex: isHovered ? 50 : 1,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative w-[288px]" style={{ perspective: "1200px" }}>
        <motion.div
          className="project-folder-card__back relative z-0 rounded-2xl"
          animate={{ rotateX: isHovered ? 15 : 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 0.8,
          }}
          style={{
            height: "224px",
            border: "1px solid rgba(23, 33, 43, 0.12)",
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ rotateX: isHovered ? -15 : 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              mass: 0.8,
            }}
            style={{
              transformStyle: "flat",
              transformOrigin: "center bottom",
            }}
          >
            {imagePositions.map((position, imageIndex) => {
              const imageUrl = project.images[imageIndex % project.images.length] || "/placeholder.svg"
              const distanceFromCenter = Math.abs(imageIndex - 2)
              const brightness = distanceFromCenter === 0 ? 1 : distanceFromCenter === 1 ? 0.55 : 0.3
              const blurAmount = distanceFromCenter === 0 ? 0 : distanceFromCenter === 1 ? 0.5 : 1.5
              const yOffset = -16 * (1 - distanceFromCenter / 2) || 0
              const scale = distanceFromCenter === 0 ? 1.05 : distanceFromCenter === 1 ? 0.95 : 0.88
              const zIndex = 10 - distanceFromCenter
              const staggerDelay = distanceFromCenter * 0.08

              return (
                <motion.div
                  key={`${project.id}-${imageIndex}`}
                  className="absolute left-1/2 top-0"
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${isHovered ? position.x * 1.4 : position.x}px)`,
                    y: (isHovered ? -8 : 8) + yOffset,
                    rotate: isHovered ? position.rotate * 1.3 : position.rotate,
                    scale: isHovered ? scale * 1.02 : scale,
                    opacity: 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 16,
                    mass: 1,
                    delay: staggerDelay,
                    opacity: {
                      duration: 0.4,
                      ease: "easeOut",
                      delay: staggerDelay,
                    },
                  }}
                  style={{ zIndex }}
                >
                  <div className="h-[160px] w-[100px] overflow-hidden rounded-lg">
                    <motion.img
                      src={imageUrl}
                      alt={`${project.title} preview ${imageIndex + 1}`}
                      className="h-full w-full object-cover"
                      animate={{
                        filter: `brightness(${isHovered ? Math.min(1, brightness + 0.2) : brightness}) contrast(1.08) saturate(${1 - distanceFromCenter * 0.2}) blur(${isHovered ? 0 : blurAmount}px)`,
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="project-folder-card__front absolute bottom-0 left-0 right-0 z-10 overflow-hidden rounded-2xl"
          animate={{ rotateX: isHovered ? -25 : 0 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
            mass: 0.8,
          }}
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(23, 33, 43, 0.12)",
            transformStyle: "preserve-3d",
            transformOrigin: "center bottom",
          }}
        >
          <div className="project-folder-card__title-row relative">
            <h3 className="project-folder-card__title">{project.title}</h3>
          </div>
          <div className="relative h-[48px]">
            <div className="absolute inset-x-0 top-0 h-px bg-[color:var(--border)]" />
            <div className="project-folder-card__footer absolute inset-0 flex items-center justify-between">
              <div className="project-folder-card__count flex items-center gap-1.5">
                <span>{project.clipCount}</span>
                <span>works</span>
              </div>
              {project.description && <span className="project-folder-card__meta">{project.description}</span>}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  )
}

function FoldersExploreContent() {
  return (
    <section className="folders-explore">
      <div
        className="transition-all duration-700 ease-out"
        style={{
          opacity: 1,
          transform: "translateY(0) scale(1)",
        }}
      >
        <main className="folders-explore__inner">
          <div className="folders-explore__header">
            <div>
              <p className="eyebrow">Explore</p>
              <h1>Creative project folders</h1>
            </div>
          </div>

          <div className="folders-explore__grid">
            {projects.map((project, index) => (
              <GalleryFolderCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </main>
      </div>
    </section>
  )
}

export function FoldersExplore() {
  return <FoldersExploreContent />
}
