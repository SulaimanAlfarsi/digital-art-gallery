"use client"

import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Variants } from "framer-motion"
import { Menu, X, Home, LayoutGrid, Compass } from "lucide-react"
import Link from "next/link"

const defaultMenuItems = [
  { id: 1, title: "Home",     url: "/",         icon: Home },
  { id: 2, title: "Artworks", url: "/artworks", icon: LayoutGrid },
  { id: 3, title: "Explore",  url: "/explore",  icon: Compass },
]

export const ScrollNavbar = ({
  brand     = "Logo",
  menuItems = defaultMenuItems,
  className = "",
}) => {
  const [isScrolled,  setIsScrolled]  = useState(false)
  const [isMenuOpen,  setIsMenuOpen]  = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => setIsScrolled(latest > 100))

  const toggleMenu = () => setIsMenuOpen((v) => !v)
  const closeMenu  = () => setIsMenuOpen(false)

  const menuVariants: Variants = {
    closed: {
      opacity: 0, scale: 0.92, y: -16,
      transition: {
        type: "spring", stiffness: 300, damping: 30,
        when: "afterChildren", staggerChildren: 0.04, staggerDirection: -1,
      },
    },
    open: {
      opacity: 1, scale: 1, y: 0,
      transition: {
        type: "spring", stiffness: 300, damping: 28,
        when: "beforeChildren", staggerChildren: 0.07,
      },
    },
  }

  const itemVariants: Variants = {
    closed: { y: 12, opacity: 0 },
    open: {
      y: 0, opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 28 },
    },
  }

  return (
    <>
      {/* ── Full navbar (visible at top) ── */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: isScrolled ? -78 : 0, opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className={`dag-navbar ${className}`}
      >
        <div className="dag-navbar-inner">
          <div className="dag-navbar-row">

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link href="/" className="dag-navbar-brand">
                <span className="dag-navbar-logo" aria-hidden="true" />
              </Link>
            </motion.div>

            <div className="dag-navbar-links">
              {menuItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.url}
                    className="dag-navbar-link"
                  >
                    <item.icon className="dag-navbar-icon" strokeWidth={2.3} />
                    <span>{item.title}</span>
                  </Link>

                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        layoutId="nav-hover-bg"
                        className="dag-navbar-hover"
                        style={{ zIndex: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <div className="dag-navbar-mobile">
              <motion.button
                onClick={toggleMenu}
                className="dag-navbar-menu-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="dag-navbar-menu-icon" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Floating Action Button (visible when scrolled) ── */}
      <motion.button
        onClick={toggleMenu}
        aria-label="Open navigation menu"
        className="dag-floating-menu-button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isScrolled ? 1 : 0, opacity: isScrolled ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        whileHover={{ scale: isScrolled ? 1.1 : 0 }}
        whileTap={{  scale: isScrolled ? 0.92 : 0 }}
      >
        <Menu className="dag-floating-menu-icon" />
      </motion.button>

      {/* ── Overlay + floating menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />

            <motion.div
              key="menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="dag-menu-shell"
            >
              <div className="dag-menu-panel">
                {/* Decorative dot — top-left */}
                <motion.div
                  className="dag-menu-dot dag-menu-dot-top"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Decorative dot — bottom-right */}
                <motion.div
                  className="dag-menu-dot dag-menu-dot-bottom"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Close button */}
                <div className="dag-menu-close-row">
                  <motion.button
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="dag-menu-close-button"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="dag-menu-close-icon" strokeWidth={2.1} />
                  </motion.button>
                </div>

                {/* Nav items */}
                <div className="dag-menu-items">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link
                        href={item.url}
                        onClick={closeMenu}
                        className="dag-menu-link"
                      >
                        <span className="dag-menu-link-icon-wrap">
                          <item.icon className="dag-menu-link-icon" strokeWidth={2.2} />
                        </span>
                        <span className="dag-menu-link-label">{item.title}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
