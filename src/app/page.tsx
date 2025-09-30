"use client";

import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Download,
  Check,
  GithubIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogImage,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";
import { TypewriterText, TypewriterTextAnimate } from "@/components/ui/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SpotlightCustomColor } from "@/components/spot-light";

export default function Portfolio() {
  const router = useRouter();

  const projects = [
    {
      id: 1,
      title: "Replit Ai",
      description:
        "A web app that allows users to create no code website. Powered by Anthropic LLM.",
      detailDescription:
        "This app lets users provide text prompts or templates, and it generates a fully functional website. It uses Anthropic LLM to produce intelligent content and interactive components automatically.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      repoLink: "https://github.com/Gatuam/replit-ai",
      liveLink: "https://replit-ai-ecru.vercel.app/",
    },
    {
      id: 2,
      title: "AUTH",
      description:
        "A Complete Authentication site with multi media login and 2FA Authentication.",
      detailDescription:
        "Supports user registration, login, password recovery, role-based access control, and secure session management. Handles social logins and two-factor authentication seamlessly.",
      image: "/auth.png",
      repoLink: "https://github.com/Gatuam/auth-app",
      liveLink: "https://auth-app-theta-ten.vercel.app",
    },
    {
      id: 3,
      title: "Video-Ai",
      description:
        "An AI platform where users can video call with an AI agent.",
      detailDescription:
        "Supports real-time interaction with AI agents via WebRTC. Includes conversational AI, scheduling calls, and storing chat histories for continuous interaction.",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop",
      repoLink: "https://github.com/Gatuam/video-chat-ai",
      liveLink: "https://video-chat-ai-three.vercel.app",
    },
    {
      id: 4,
      title: "Canva Clone",
      description: "An AI platform where users can create graphic and motions.",
      detailDescription:
        "Provides drag-and-drop templates, AI-assisted content generation, and real-time collaboration. Users can create graphics, presentations, and social media posts with a library of pre-built design elements.",
      image: "/canva.png",
      repoLink: "https://github.com/Gatuam/canvaClone",
      liveLink: "https://canva-clone-ashy.vercel.app",
    },
    {
      id: 5,
      title: "Public Messaging App",
      description:
        "A platform where users can chat in realtime communication with public.",
      detailDescription:
        "Built with WebSockets for low-latency communication. Users can join channels, post messages, interact instantly, and see presence indicators. Includes message threading and simple moderation tools.",
      image: "/public.png",
      repoLink: "https://github.com/Gatuam/public-massage-app",
      liveLink: "https://public-massage-app.vercel.app/",
    },
    {
      id: 6,
      title: "Bolt-clone",
      description:
        "An AI platform that is a clone of bolt where users give a prompt and get the website.",
      detailDescription:
        "Generates fully functional responsive websites from user prompts. Integrated with payment gateways and authentication for deployment and testing. Designed for speed and automation.",
      image: "/bolt.png",
      repoLink: "https://github.com/Gatuam/bolt.clone",
      liveLink: "https://bolt-clone-inky.vercel.app",
    },
  ];

  return (
    <div className=" w-full h-full bg-background text-background relative">
      <div className=" absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:104px_204px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="min-h-screen max-w-7xl mx-auto px-3 ">
        <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .glow-on-hover:hover {
          box-shadow: 0 0 20px var(--accent);
        }
      `}</style>

        {/* Navigation */}
        <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className=" rounded-5xl">
                    <Image
                      className=" w-full rounded-full"
                      src={"/sagar.jpeg"}
                      alt="sagar"
                      width={30}
                      height={30}
                    />
                  </div>

                  <span className="font-semibold text-foreground text-sm">
                    SAGAR GAUTHAM
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  router.push("https://github.com/Gatuam");
                }}
                className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
                <p className=" text-sm ">View GitHub</p>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="animate-fade-in-up w-full flex-col flex justify-center items-center text-center">
              <h1 className="text-3xl md:text-7xl font-bold mb-6 text-foreground leading-tight max-w-5xl">
                A software engineer who writes
                <TypewriterText />
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground max-w-4xl leading-relaxed mb-6">
                I'm EK Gautham, a software engineer who writes less code than
                most think—but makes every line count. Fueled by coffee and
                curiosity, I turn complex problems into sleek, efficient apps.
              </p>
              <div className="flex gap-2 text-muted-foreground flex-wrap justify-center items-center mt-4">
                <span>Building</span>
                <a
                  href="https://replit-ai-ecru.vercel.app"
                  className="text-foreground hover:text-chart-2 transition-colors duration-300 font-medium"
                >
                  Repil-ai
                </a>
                <span>and</span>
                <a
                  href="auth-app-theta-ten.vercel.app"
                  className="text-foreground hover:text-chart-2 transition-colors duration-300 font-medium"
                >
                  Auth
                </a>
                <span>when I'm not working on my day job.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-4 md:py-10 px-4" id="projects">
          <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
            <div className=" flex flex-col  mb-8 justify-center items-center">
              <div className="relative inline-block border border-primary md:px-6 md:py-4 px-3 py-1 mb-3 ">
                {/* Corner handles */}
                <span className="absolute -top-1 -left-1 h-2 w-2 bg-primary"></span>
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary"></span>
                <span className="absolute -bottom-1 -left-1 h-2 w-2 bg-primary"></span>
                <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-primary"></span>

                <h2 className="text-xl md:text-3xl font-bold  text-foreground">
                  I've been building a lot of things
                </h2>
              </div>
              <span className=" text-accent-foreground mt-1">
                <TypewriterTextAnimate />
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className=" p-[0.5px] bg-gradient-to-b from-chart-2 to-chart-1 rounded-md"
                >
                  <div
                    className="group relative overflow-hidden rounded-lg border border-border bg-card text-card-foreground hover:border-accent/50 cursor-pointer animate-scale-in glow-on-hover transition-all duration-500 hover:-translate-y-2 p-1.5"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Morphing Dialog Trigger */}
                    <MorphingDialog
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <MorphingDialogTrigger className="p-2">
                        <MorphingDialogImage
                          src={project.image}
                          alt={project.title}
                          className="aspect-video w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-xl"
                        />
                        <div className=" w-full bg-gradient-to-b from-chart-2/5 to-chart-2/10  backdrop-blur-2xl px-2 py-3 rounded-b-md  shadow-2xl flex flex-col justify-center items-center overflow-y-auto scrollbar ">
                          <h3 className="text-2xl font-semibold ">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2">
                            {project.description}
                          </p>
                          <div className="flex items-center gap-4 mt-4">
                            <ExternalLink className="w-4 h-4" /> Live
                            <Github className="w-4 h-4" /> Code
                          </div>
                        </div>
                      </MorphingDialogTrigger>

                      <MorphingDialogContainer className=" !rounded-2xl md:p-5 p-2 ">
                        <div className=" ">
                          <MorphingDialogContent className="relative py-8 md:p-6 bg-accent backdrop-blur-2xl rounded-2xl flex flex-col gap-y-4 justify-center items-center gap-x-3 ">
                            <MorphingDialogClose className="fixed right-1 top-3 rounded-full bg-white p-1">
                              <XIcon className="h-4 w-4 text-zinc-500" />
                            </MorphingDialogClose>
                            <MorphingDialogImage
                              src={project.image}
                              alt={project.title}
                              className="rounded-md object-cover md:w-140 w-92 h-auto shadow-2xl"
                            />
                            <div className=" w-[95%] bg-gradient-to-b from-chart-1/5 to-chart-2/10  backdrop-blur-2xl px-4 py-6 rounded-xl  shadow-2xl flex flex-col gap-y-2 ">
                              <h3 className="text-2xl font-semibold">
                                {project.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-2 max-w-sm min-w-xs md:min-w-sm">
                                {project.detailDescription}
                              </p>
                              <div className="flex items-center gap-4 ">
                                <a
                                  href={project.liveLink}
                                  target="_blank"
                                  className="hover:text-chart-2 flex items-center gap-1"
                                >
                                  <ExternalLink className="w-4 h-4" /> Live
                                </a>
                                <a
                                  href={project.repoLink}
                                  target="_blank"
                                  className="hover:text-chart-2 flex items-center gap-1"
                                >
                                  <Github className="w-4 h-4" /> Code
                                </a>
                              </div>
                            </div>
                          </MorphingDialogContent>
                        </div>
                      </MorphingDialogContainer>
                    </MorphingDialog>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-border mt-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-y-5">
            <div className="flex items-center gap-2">
              <div className=" rounded-5xl">
                <Image
                  className=" w-full rounded-full"
                  src={"/sagar.jpeg"}
                  alt="sagar"
                  width={30}
                  height={30}
                />
              </div>
              <span className="font-semibold text-foreground">
                SAGAR GAUTHAM
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Sagar Gautham. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
