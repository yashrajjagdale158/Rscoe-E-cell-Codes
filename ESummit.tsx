import { Link } from "react-router-dom";
import { ArrowRight, Mic, Code2, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Mic,
    title: "Speaker Sessions",
    description: "Learn from founders, industry experts, and innovators.",
  },
  {
    icon: Code2,
    title: "Build Challenge",
    description: "Create working hardware, software, or AI-based prototypes.",
  },
  {
    icon: Rocket,
    title: "Startup Pitch",
    description: "Present your venture to mentors, founders, and experts.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with alumni, mentors, startups, and industry partners.",
  },
];

export default function ESummit() {
  return (
    <div className="page-entrance px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-sm uppercase tracking-widest text-primary">
          Flagship Event
        </p>
        <h1 className="text-5xl md:text-7xl">E-Summit 2027</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          A builder-first entrepreneurship summit where students learn, build,
          pitch, and connect with real opportunities.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.title} className="glass rounded-2xl p-7">
              <item.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h2 className="text-xl">{item.title}</h2>
              <p className="mt-3 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <Link
          to="/join"
          className="mt-12 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Register Interest
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}