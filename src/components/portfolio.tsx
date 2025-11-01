"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Footer from "./footer";
import DeveloperFeatures from "./features";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "Loveable Clone",
      description:
        "AI-powered code generator using Anthropic LLM API and E2B Sandbox for live code rendering with real-time preview.",
      link: "https://replit-ai-ecru.vercel.app/",
      tags: ["Next.js", "Anthropic API", "E2B Sandbox", "AI"],
      category: "ai",
    },
    {
      title: "Complete Auth Application",
      description:
        "Secure authentication system using NextAuth/Auth.js with multiple providers and session management.",
      link: "https://auth-app-theta-ten.vercel.app/",
      tags: ["NextAuth", "Next.js", "Auth.js", "Security"],
      category: "fullstack",
    },
    {
      title: "AI Agent Video Call",
      description:
        "Real-time voice and video interaction with an AI agent using WebRTC and advanced speech recognition.",
      link: "https://video-chat-ai-three.vercel.app/",
      tags: ["WebRTC", "AI", "Real-time", "Video"],
      category: "ai",
    },
    {
      title: "Canva Clone",
      description:
        "Browser-based design editor with Canva-like interface, layer management, and export functionality.",
      link: "https://canva-clone-ashy.vercel.app/",
      tags: ["Canvas API", "React", "Design Tools", "UI"],
      category: "fullstack",
    },
    {
      title: "Real-Time Chat Interface",
      description:
        "Group chat system built with WebSockets for live communication with typing indicators and presence.",
      link: "https://websocket-chat-delta.vercel.app/",
      tags: ["WebSocket", "Real-time", "Chat", "Node.js"],
      category: "realtime",
    },
    {
      title: "Finance Tracker",
      description:
        "Personal finance management tool for tracking income, expenses, and overall financial data with analytics.",
      link: "https://finance-banking-saas-ten.vercel.app",
      tags: ["Next.js", "SaaS", "Finance", "Analytics"],
      category: "fullstack",
    },
    {
      title: "Public Messaging App",
      description:
        "Public chat platform where all messages are visible to everyone, integrated with AI for smart suggestions.",
      link: "https://public-massage-app.vercel.app/",
      tags: ["AI", "Chat", "Real-time", "Public","Ract table", "next js", "next auth"],
      category: "ai",
    },
    {
      title: "Real-time Chat App",
      description:
        "Full-stack real-time messaging app built with React, Next.js, and WebSocket — features live chat, user presence, and instant message delivery, deployed on Vercel.",
      link: "https://real-time-chat-app-fawn.vercel.app/",
      tags: ["Next.js", "React", "WebSocket", "Fullstack", "Real-time"],
      category: "fullstack",
    },
  ];

  const experiences = [
    {
      company: "Emporium Armani",
      role: "Full-Stack Developer & Marketer",
      period: "Jan 2021 - May 2025",
      logo: "💎",
      points: [
        "Built and managed full-scale e-commerce using WooCommerce",
        "Implemented SEO optimization and mobile-responsive design",
        "Integrated payment systems and analytics dashboards",
      ],
    },
    {
      company: "Web Application Development",
      role: "Full-Stack Engineer",
      period: "2020 - Present",
      logo: "⚡",
      points: [
        "Developed full-stack applications with Next.js and Node.js",
        "Built APIs with REST, Hono, and tRPC for type-safe communication",
        "Designed UI/UX using Figma and implemented with Shadcn",
      ],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-zinc-900 antialiased overflow-x-hidden">
      <style>{`
        @keyframes meteor {
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          100% { transform: translateY(300px) translateX(300px); opacity: 0; }
        }
        .animate-meteor {
          animation: meteor 2s linear infinite;
        }
      `}</style>

      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative">
        {/* Navigation */}
        <nav className="max-w-5xl mx-auto px-8 py-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-white text-lg">Sagar Gautham</span>
          </div>

          <div className="hidden md:flex items-center space-x-1 border border-zinc-700 bg-zinc-800 rounded-2xl px-4 py-2">
            <a
              href="#about"
              className="text-zinc-400 hover:text-white px-4 py-2 text-sm transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-zinc-400 hover:text-white px-4 py-2 text-sm transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-zinc-400 hover:text-white px-4 py-2 text-sm transition-colors"
            >
              Experience
            </a>
          </div>

          <a
            href="mailto:sagardotdev@gmail.com"
            className="bg-gradient-to-b from-zinc-700 to-zinc-800 text-white px-6 py-2 rounded-lg text-sm hover:opacity-80 transition-opacity"
          >
            Contact Me
          </a>
        </nav>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-8 pt-20 pb-40">
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1 mb-6">
            Available for Freelance
          </Badge>

          <h1 className="font-bold text-3xl md:text-6xl text-zinc-50 max-w-3xl leading-tight ">
            I'm a full-stack developer that rarely{" "}
            <span className="text-blue-400">sleeps.</span>
          </h1>

          <p className="text-zinc-400 text-base max-w-2xl mt-8 leading-loose">
            Meet Sagar Gautham, a full-stack engineer with expertise in Next.js,
            React, MERN stack, and scalable APIs. Building production-grade
            applications that thousands of users love.
          </p>

          <div className="mt-8 text-zinc-400 text-base max-w-2xl leading-loose">
            Currently building innovative solutions with{" "}
            <span className="text-zinc-200 font-bold">Next.js</span>,{" "}
            <span className="text-zinc-200 font-bold">tRPC</span>, and{" "}
            <span className="text-zinc-200 font-bold">AI integration</span>.
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mt-8">
            {[
              "Next.js",
              "React",
              "Node.js",
              "TypeScript",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "tRPC",
              "WebRTC",
              "hono",
              "AWS",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-zinc-800 text-zinc-300 border-zinc-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="max-w-5xl mx-auto px-8 mb-40">
          <h2 className="text-3xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-loose">
            Building scalable applications and managing e-commerce businesses.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-20">
            <div className="flex flex-col gap-2 md:w-64">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  className={`px-4 py-3 rounded-md flex items-center space-x-3 text-left transition-colors ${
                    i === 0
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-lg">
                    {exp.logo}
                  </div>
                  <span className="text-sm font-medium">{exp.company}</span>
                </button>
              ))}
            </div>

            <div className="flex-1 md:pl-10">
              <h3 className="text-2xl font-bold text-zinc-100">
                {experiences[0].role}{" "}
                <span className="text-blue-400">
                  @ {experiences[0].company}
                </span>
              </h3>
              <div className="text-zinc-400 text-sm mt-2">
                {experiences[0].period}
              </div>

              <div className="mt-6 space-y-3">
                {experiences[0].points.map((point, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-5xl mx-auto px-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12">
            I've been building amazing things
          </h2>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-10">
            {[
              { id: "all", label: "All Projects" },
              { id: "ai", label: "AI Projects" },
              { id: "fullstack", label: "Full-Stack" },
              { id: "realtime", label: "Real-time" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  activeTab === tab.id
                    ? "bg-zinc-800 text-white border border-zinc-700"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-2"
              >
                <Card className="h-full bg-zinc-800 border-zinc-700 hover:border-zinc-600 transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-zinc-100 font-bold text-lg group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h4>
                      <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-blue-300 transition-colors flex-shrink-0" />
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <Badge
                          key={j}
                          variant="secondary"
                          className="bg-zinc-900 text-zinc-400 border-zinc-700 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 mt-6 text-zinc-500 group-hover:text-cyan-500 transition-colors">
                      <Terminal className="w-4 h-4" />
                      <span className="text-xs">Live Demo</span>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>
        <>
          <DeveloperFeatures />
        </>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
