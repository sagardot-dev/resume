import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  const techStack = [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "tRPC",
    "WebRTC",
    "Hono",
    "AWS",
    "Redis",
    "GraphQL",
    "Prisma",
    "Vercel",
  ];

  return (
    <div className="my-4 px-4 py-6 pb-28 max-w-5xl mx-auto flex flex-col justify-center items-center mask-b-to-95%">
      <h2 className="relative mt-4 w-fit max-w-lg text-sm font-normal md:text-base mb-4 border p-2 px-6">
        <div
          className="absolute inset-0 h-full w-full scale-[1.04] rounded"
          style={{ backgroundColor: "var(--bg-card)" }}
        >
          {[
            "-top-px -left-px",
            "-top-px -right-px",
            "-bottom-px -left-px",
            "-right-px -bottom-px",
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute border  ${pos} h-1 w-1 animate-pulse rounded-full`}
              style={{ backgroundColor: "var(--accent-foreground)" }}
            />
          ))}
        </div>
        <span style={{ color: "var(--fg)" }}>Get&nbsp;</span>
        <span style={{ color: "var(--fg)" }}>in&nbsp;</span>
        <span style={{ color: "var(--fg)" }}>touch</span>
      </h2>

      <div className="relative mt-4 md:min-w-md max-w-lg ">
        <Input
          type="email"
          placeholder="Your email "
          className="w-full rounded-lg p-3 "
        />
        <Button
          variant={"secondary"}
          asChild
          className="absolute top-1/2 right-2 -translate-y-1/2 rounded-md  text-sm border h-7 "
        >
          <a href="mailto:tyler@durden.com">Send Enquiry</a>
        </Button>
      </div>

      <p
        className="text-xs text-center md:text-base max-w-lg pt-4 my-7"
        style={{ color: "var(--fg-muted)" }}
      >
        I'm currently looking for new opportunities. Whether you have a question
        or want to say hi, hit that button.
      </p>

      <div className="overflow-hidden relative my-8">
        <div
          className="flex animate-marquee gap-4 whitespace-nowrap"
          style={{ "--marquee-duration": "40s" } as React.CSSProperties}
        >
          <div className="flex gap-4 w-max">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-zinc-800 text-zinc-300 border-zinc-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4 w-max">
            {techStack.map((tech) => (
              <Badge
                key={`${tech}-2`}
                variant="secondary"
                className="bg-zinc-800 text-zinc-300 border-zinc-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
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
            animation: marquee var(--marquee-duration) linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
