"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUp, Play, Instagram, Twitter, Facebook, Youtube, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/veachLogo.png" alt="PJ Ventures Logo" width={300} height={100} className="h-20 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-gray-800 hover:text-primary transition-colors font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#videos"
              className="text-gray-800 hover:text-primary transition-colors font-medium relative group"
            >
              Video Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#affiliates"
              className="text-gray-800 hover:text-primary transition-colors font-medium relative group"
            >
              Affiliate Links
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              Contact Us
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <motion.section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
          <Image
            src="/san-cristobal-night.jpg"
            alt="San Cristobal de Las Casas at night"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Welcome to
              </motion.span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                PJ Ventures
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Follow Jennifer and Patrick Veach on their exciting journey from Texas to Mexico, as they build a new life
              while sharing their adventures and favorite products along the way.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-white text-lg py-6 px-8 shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                Explore Our Journey
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary text-lg py-6 px-8 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
              >
                Watch Latest Video
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
          >
            <motion.div className="relative overflow-hidden rounded-xl shadow-2xl" variants={fadeInUpVariants}>
              <Image
                src="/couple-travel.jpg"
                alt="Jennifer and Patrick Veach"
                width={600}
                height={800}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <p className="text-white font-medium">Jennifer & Patrick Veach</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUpVariants}>
              <motion.div
                className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-4"
                variants={fadeInUpVariants}
              >
                Our Journey
              </motion.div>
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900" variants={fadeInUpVariants}>
                Our Story
              </motion.h2>
              <motion.p className="text-lg text-gray-700 mb-6" variants={fadeInUpVariants}>
                PJ Ventures was born from Jennifer and Patrick Veach's decision to leave Texas and build a new life in
                Mexico. What started as a personal journey has evolved into a platform where we share our experiences,
                insights, and discoveries with fellow travelers and those interested in expatriate living.
              </motion.p>
              <motion.p className="text-lg text-gray-700 mb-8" variants={fadeInUpVariants}>
                Through our video blogs and curated affiliate partnerships, we aim to inspire others to embrace change
                and adventure while providing valuable resources to enhance their own journeys, whether they're planning
                a vacation or a complete lifestyle transformation.
              </motion.p>
              <motion.div variants={fadeInUpVariants}>
                <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1 group">
                  Learn More About Us
                  <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Showcase */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
          >
            <motion.div
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-4"
              variants={fadeInUpVariants}
            >
              Explore The World
            </motion.div>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900" variants={fadeInUpVariants}>
              Featured Destinations
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={fadeInUpVariants}>
              Discover the breathtaking locations we've explored and the unforgettable experiences we've had along the
              way.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
          >
            {[
              { name: "Puerto Vallarta, Mexico", image: "/puerto-vallarta.jpg" },
              { name: "Mexico City, Mexico", image: "/mexico-city.jpg" },
              { name: "San Miguel de Allende, Mexico", image: "/san-miguel.jpg" },
              { name: "Tulum, Mexico", image: "/tulum.jpg" },
              { name: "Austin, Texas", image: "/austin.jpg" },
              { name: "Playa del Carmen, Mexico", image: "/playa-del-carmen.jpg" },
            ].map((destination, index) => (
              <motion.div
                key={index}
                className="group relative h-80 overflow-hidden rounded-xl shadow-lg"
                variants={fadeInUpVariants}
              >
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
                  <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index === 4
                      ? "Where our journey began"
                      : "Discover the beauty and culture of this amazing destination."}
                  </p>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    size="sm"
                  >
                    Explore
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Blog Section */}
      <section id="videos" className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
          >
            <motion.div
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-4"
              variants={fadeInUpVariants}
            >
              Watch & Experience
            </motion.div>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900" variants={fadeInUpVariants}>
              Video Blog
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={fadeInUpVariants}>
              Join us on our adventures through our immersive video content, where we document our travels and share
              unforgettable moments.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
          >
            {[
              {
                title: "Our Decision to Move to Mexico",
                image: "/decision-video.jpg",
                duration: "12:34",
                date: "June 11, 2023",
              },
              {
                title: "Exploring Puerto Vallarta",
                image: "/puerto-vallarta-video.jpg",
                duration: "15:21",
                date: "June 12, 2023",
              },
              {
                title: "Finding Housing in Mexico",
                image: "/housing-video.jpg",
                duration: "09:45",
                date: "June 13, 2023",
              },
              {
                title: "Mexican Cuisine Adventures",
                image: "/cuisine-video.jpg",
                duration: "18:27",
                date: "June 14, 2023",
              },
              {
                title: "Remote Work from Mexico",
                image: "/remote-work-video.jpg",
                duration: "14:52",
                date: "June 15, 2023",
              },
              { title: "Weekend Trip to Tulum", image: "/tulum-video.jpg", duration: "16:39", date: "June 16, 2023" },
            ].map((video, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                variants={fadeInUpVariants}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.image || "/placeholder.svg"}
                    alt={video.title}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="h-8 w-8 text-white" />
                    </motion.div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{video.title}</h3>
                  <p className="text-gray-600 mb-4">Join us as we document our journey and share our experiences.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{video.date}</span>
                    <span className="text-sm text-gray-500">{video.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              View All Videos
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Parallax Quote Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image src="/parallax-bg.jpg" alt="Travel Inspiration" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white italic">
              "The world is a book, and those who do not travel read only one page."
            </h2>
            <p className="text-xl text-white/80">- Saint Augustine</p>
          </motion.div>
        </div>
      </section>

      {/* Affiliate Links Section */}
      <section id="affiliates" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
          >
            <motion.div
              className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-4"
              variants={fadeInUpVariants}
            >
              Trusted Partners
            </motion.div>
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900" variants={fadeInUpVariants}>
              Affiliate Links
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto" variants={fadeInUpVariants}>
              Discover our carefully selected travel products and services that have enhanced our journeys and can
              elevate yours too.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
          >
            {[
              {
                title: "Travel Essentials",
                description: "Our must-have items for relocating to Mexico and traveling throughout the country.",
                icon: "🧳",
                image: "/travel-gear.jpg",
              },
              {
                title: "Mexico Housing",
                description: "Resources and platforms we used to find our perfect home in Mexico.",
                icon: "🏠",
                image: "/mexico-housing.jpg",
              },
              {
                title: "Language Learning",
                description: "Tools and courses that helped us improve our Spanish skills.",
                icon: "🗣️",
                image: "/language.jpg",
              },
              {
                title: "Remote Work Tools",
                description: "Equipment and software that keeps our business running smoothly from anywhere.",
                icon: "💻",
                image: "/remote-work.jpg",
              },
              {
                title: "Mexican Insurance",
                description: "Health and property insurance options for expats living in Mexico.",
                icon: "🛡️",
                image: "/insurance.jpg",
              },
              {
                title: "Transportation",
                description: "Rental cars, flights, and local transportation options throughout Mexico.",
                icon: "✈️",
                image: "/transportation.jpg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUpVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-4xl">{item.icon}</div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white transition-colors group"
                    >
                      Explore {item.title}
                      <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeInUpVariants}>
              Join Our Adventure
            </motion.h2>
            <motion.p className="text-xl mb-8 text-white/90" variants={fadeInUpVariants}>
              Subscribe to our newsletter and be the first to receive updates on our latest travels, videos, and
              exclusive offers.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" variants={fadeInUpVariants}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-primary hover:bg-white/90 px-6 py-3 shadow-lg hover:shadow-white/20 transition-all duration-300 transform hover:-translate-y-1">
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainerVariants}
          >
            <motion.div variants={fadeInUpVariants}>
              <Image
                src="/veachLogo.png"
                alt="PJ Ventures Logo"
                width={150}
                height={50}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 mb-4">Embark on extraordinary journeys with Jennifer and Patrick Veach.</p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeInUpVariants}>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors group flex items-center">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors group flex items-center">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors group flex items-center">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    Video Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors group flex items-center">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    Affiliate Links
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors group flex items-center">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUpVariants}>
              <h3 className="text-lg font-bold mb-4">Popular Destinations</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors group flex items-center">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    Puerto Vallarta, Mexico
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors group flex items-center">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    Mexico City, Mexico
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors group flex items-center">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    San Miguel de Allende, Mexico
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors group flex items-center">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    Tulum, Mexico
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors group flex items-center">
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    Playa del Carmen, Mexico
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUpVariants}>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2 text-primary">✉</span>
                  Email: info@pjventures.com
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2 text-primary">☎</span>
                  Phone: +1 (555) 123-4567
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="mr-2 text-primary">📍</span>
                  Address: 123 Adventure Lane, Travel City, TC 12345
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PJ Ventures. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll to top button */}
        <AnimatePresence>
          {isVisible && (
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg z-50"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="h-6 w-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </footer>
    </div>
  )
}

