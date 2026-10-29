import { Briefcase, Users, Rocket, GraduationCap } from "lucide-react";

const opportunities = [
  {
    icon: Briefcase,
    title: "Internships",
    description:
      "Explore internship and project opportunities with startups and industry partners.",
  },
  {
    icon: Users,
    title: "Mentor Network",
    description:
      "Connect with founders, alumni, and industry experts for guidance.",
  },
  {
    icon: Rocket,
    title: "Incubation Support",
    description:
      "Get structured support to convert your idea into a startup.",
  },
  {
    icon: GraduationCap,
    title: "Skill Programs",
    description:
      "Join workshops on AI, product building, design, pitching, and entrepreneurship.",
  },
];

export default function Opportunities() {
  return (
    <div className="page-entrance px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-5xl md:text-6xl">Opportunities</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          E-Cell RSCOE helps students access the right people, programs, and
          platforms to grow.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {opportunities.map((item) => (
            <div key={item.title} className="glass rounded-2xl p-8">
              <item.icon className="mb-5 h-8 w-8 text-primary" />
              <h2 className="text-2xl">{item.title}</h2>
              <p className="mt-3 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}