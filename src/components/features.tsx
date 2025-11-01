"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Zap, Globe, Terminal, Boxes } from "lucide-react";
import { techStacks } from "./footer";

const DeveloperFeatures = () => {
  const [activeItems, setActiveItems] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveItems([0, 1, 2, 3, 4, 5]);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const recentWork = [
    {
      icon: "🤖",
      title: "AI Code Generator",
      status: "success",
      time: "2min ago",
      description: "Built Loveable Clone with Anthropic LLM API",
      color: "blue",
    },
    {
      icon: "🔐",
      title: "Auth System",
      status: "success",
      time: "1hr ago",
      description: "Deployed NextAuth authentication with multi-provider",
      color: "green",
    },
    {
      icon: "📹",
      title: "WebRTC Integration",
      status: "processing",
      description: "Implementing AI Agent Video Call features",
      color: "orange",
    },
    {
      icon: "🎨",
      title: "Design Editor",
      status: "success",
      time: "3hr ago",
      description: "Completed Canva Clone with layer management",
      color: "purple",
    },
    {
      icon: "💬",
      title: "Real-time Chat",
      status: "processing",
      description: "WebSocket chat with typing indicators deployed",
      color: "cyan",
    },
    {
      icon: "💰",
      title: "Finance Tracker",
      status: "success",
      time: "5hr ago",
      description: "SaaS finance app with analytics dashboard",
      color: "indigo",
    },
  ];

  const techStack = [
    { name: "Next.js", icon: "⚡", category: "Frontend" },
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "tRPC", icon: "🔷", category: "API" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
  ];

  const skills = [
    {
      icon: Code,
      label: "Full-Stack Development",
      color: "blue",
      active: false,
    },
    { icon: Database, label: "Database Design", color: "green", active: false },
    { icon: Zap, label: "API Development", color: "purple", active: true },
    { icon: Globe, label: "Cloud Deployment", color: "cyan", active: false },
  ];

  return (
    <section className="py-20 lg:py-25 relative overflow-hidden ">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl px-4 md:px-8 mx-auto">
        {/* Section Header */}
        <div className="mb-16 px-6">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">What I Used?</h2>
          <p className="text-neutral-400 text-lg max-w-2xl text-center mx-auto">
            Full-stack applications with modern technologies and scalable
            architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  border-neutral-800 border bg-zinc-900 p-2 rounded-xl">
          {/* Recent Projects Activity */}
          <div className="border-b md:border-b  border-neutral-800 md:border-r pb-5">
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-neutral-200">
                Recent Projects
              </h2>
              <p className="text-neutral-400 mt-2 max-w-md">
                Live tracking of development activity across my latest
                applications and features.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden p-4">
              <Card className="bg-neutral-800 border-neutral-700 h-full overflow-hidden">
                <div className="border-b border-neutral-700 p-4 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-neutral-400" />
                  <p className="text-sm font-bold text-neutral-200">
                    Development Activity
                  </p>
                </div>
                <div className="p-4 space-y-3 overflow-auto max-h-[280px]">
                  {recentWork.map((work, i) => (
                    <div
                      key={i}
                      className="animate-slide-in"
                      style={{
                        opacity: activeItems.includes(i) ? 1 : 0,
                        animationDelay: `${i * 150}ms`,
                      }}
                    >
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <div className="size-5 rounded-sm flex items-center justify-center text-sm bg-gradient-to-br from-blue-500 to-purple-500">
                            {work.icon}
                          </div>
                          <p className="text-sm text-neutral-300 truncate">
                            {work.title}
                          </p>
                          {work.status === "success" && work.time && (
                            <Badge
                              variant="secondary"
                              className="bg-green-500/10 text-green-400 border-green-500/20 text-xs"
                            >
                              ✓
                            </Badge>
                          )}
                          {work.status === "processing" && (
                            <Badge className="bg-orange-500/10 text-orange-400 border-orange-500/20 text-xs">
                              IN PROGRESS
                            </Badge>
                          )}
                        </div>
                        {work.time && (
                          <span className="text-xs text-neutral-500 whitespace-nowrap">
                            {work.time}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-500 mt-1 ml-7 truncate">
                        {work.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="border-b md:border-b border-neutral-800 ">
            <div className="p-4 md:p-8">
              <h2 className="text-lg font-bold text-neutral-200">Tech Stack</h2>
              <p className="text-neutral-400 mt-2 max-w-md">
                Modern technologies I use to build scalable full-stack
                applications.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden flex items-center justify-center p-7">
              <div className="grid grid-cols-3 gap-4 mx-auto w-full max-w-md">
                {techStack.map((tech, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl border border-neutral-700 bg-gradient-to-br  from-neutral-800 to-neutral-900 relative overflow-hidden group hover:border-neutral-600 transition-all duration-300"
                    style={{
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full p-2">
                      <span
                        className="text-3xl mb-2 animate-float"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        {tech.icon}
                      </span>
                      <p className="text-xs text-neutral-300 font-medium text-center">
                        {tech.name}
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-neutral-700 text-neutral-400 border-neutral-600 text-[10px] mt-1"
                      >
                        {tech.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none" />
            </div>
          </div>

          {/* Architecture Approach */}
          <div className="md:border-r border-neutral-800  w-full border-b md:border-b-0 pb-6 ">
            <div className="px-3 py-2 md:px-8 md:py-2 mt-6">
              <h2 className="text-lg font-bold text-neutral-200">
                Architecture
              </h2>
              <p className="text-neutral-400 mt-2 max-w-md">
                Building scalable systems with type-safe APIs and modern
                deployment practices.
              </p>
            </div>
            <div className="relative  overflow-hidden flex flex-wrap items-center justify-center px-4">
              <div className="relative z-10 w-full">
                <div className=" w-full flex gap-x-2">
                  <Card className="bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/20 p-4 mt-6 w-full">
                    <Code className="w-8 h-7 text-blue-400 mb-2" />
                    <h3 className="text-sm font-bold text-neutral-200">
                      Frontend
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      React, Next.js, Tailwind
                    </p>
                  </Card>
                  <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/20 p-4 mt-6 w-full">
                    <Database className="w-8 h-7 text-green-400 mb-2" />
                    <h3 className="text-sm font-bold text-neutral-200">
                      Backend
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Node.js, tRPC, Express
                    </p>
                  </Card>
                </div>
                <div className="mt-3">
                  <Card className="bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 border-purple-500/20 p-4">
                    <Boxes className="w-8 h-6 text-purple-400 mb-2" />
                    <h3 className="text-sm font-bold text-neutral-200">
                      Deployment
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Docker, Vercel, Cloud Infrastructure
                    </p>
                  </Card>
                </div>
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none" />
            </div>
          </div>

          {/* Skills & Expertise */}
          <div>
            <div className="p-4 md:p-8 pt-6  ">
              <h2 className="text-lg font-bold text-neutral-200">Expertise</h2>
              <p className="text-neutral-400 mt-2 max-w-md">
                Core competencies in modern web development and software
                engineering.
              </p>
            </div>
            <div className="relative">
              <div className="p-4">
                <div className="flex gap-2 flex-wrap mb-6">
                  {skills.map((skill, i) => (
                    <button
                      key={i}
                      className={`px-3 py-2 rounded-lg text-xs flex items-center gap-2 transition-all ${
                        skill.active
                          ? "bg-neutral-700 border border-neutral-600 text-white shadow-lg"
                          : "bg-neutral-800/50 border border-neutral-700 text-neutral-500 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <skill.icon
                        className={`w-3 h-3 ${
                          skill.active ? "text-white" : "text-neutral-400"
                        }`}
                      />
                      {skill.label}
                    </button>
                  ))}
                </div>
                <Card className="bg-neutral-800 border-neutral-700 p-4 py-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-bold text-neutral-200 mb-2">
                        API Development
                      </p>
                      <p className="text-sm text-neutral-400 mb-3">
                        Building type-safe, scalable APIs with tRPC, REST, and
                        WebSocket for real-time applications.
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {["tRPC", "REST", "GraphQL", "WebSocket"].map(
                          (tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-neutral-700 text-neutral-300 border-neutral-600"
                            >
                              {tech}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
                <>
                  <div className="overflow-hidden relative mt-6">
                    {/* Left fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />

                    {/* Right fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />

                    <div
                      className="flex animate-marquee"
                      style={
                        { "--marquee-duration": "30s" } as React.CSSProperties
                      }
                    >
                      {/* First set */}
                      <div className="flex gap-4 flex-shrink-0">
                        {techStacks.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-zinc-800 text-zinc-300 border-zinc-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {/* Gap between sets */}
                      <div className="w-4 flex-shrink-0" />
                      {/* Second set - duplicate for seamless loop */}
                      <div className="flex gap-4 flex-shrink-0">
                        {techStacks.map((tech) => (
                          <Badge
                            key={`${tech}-2`}
                            variant="secondary"
                            className="bg-zinc-800 text-zinc-300 border-zinc-700"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {/* Gap between sets */}
                      <div className="w-4 flex-shrink-0" />
                    </div>

                    <style jsx>{`
                      @keyframes marquee {
                        0% {
                          transform: translateX(0);
                        }
                        100% {
                          transform: translateX(-50%);
                        }
                      }
                      .animate-marquee {
                        display: flex;
                        width: max-content;
                        animation: marquee var(--marquee-duration) linear
                          infinite;
                      }
                    `}</style>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperFeatures;
