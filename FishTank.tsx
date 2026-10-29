import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock,
  FileText,
  HelpCircle,
  MapPin,
  Mic,
  Rocket,
  ShieldCheck,
  Target,
  Timer,
  Trophy,
  Users,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface TimelineItem {
  phase: string;
  date: string;
  title: string;
  description: string;
  active?: boolean;
}

interface Shark {
  name: string;
  title: string;
  focus: string;
  cheque: string;
}

const sharks: Shark[] = [
  {
    name: "Investor 1",
    title: "Early-Stage Investor",
    focus: "AI, SaaS, Deep Tech",
    cheque: "₹5L – ₹50L",
  },
  {
    name: "Investor 2",
    title: "Startup Founder & Angel",
    focus: "Consumer, D2C, Marketplaces",
    cheque: "₹2L – ₹25L",
  },
  {
    name: "Investor 3",
    title: "Venture Capitalist",
    focus: "FinTech, HealthTech, Enterprise",
    cheque: "₹10L – ₹1Cr",
  },
  {
    name: "Investor 4",
    title: "Innovation Leader",
    focus: "EV, Manufacturing, CleanTech",
    cheque: "₹5L – ₹75L",
  },
];

const perks = [
  {
    icon: Trophy,
    title: "Pitch to Investors",
    description:
      "Present your startup in front of founders, investors, and industry experts.",
  },
  {
    icon: Rocket,
    title: "Startup Visibility",
    description:
      "Get featured across E-Cell RSCOE’s website, social media, and event coverage.",
  },
  {
    icon: Users,
    title: "Mentor Feedback",
    description:
      "Receive direct feedback on your idea, prototype, business model, and pitch.",
  },
  {
    icon: Target,
    title: "Incubation Pathway",
    description:
      "Top teams can get guidance for pre-incubation and incubation support.",
  },
  {
    icon: Briefcase,
    title: "Internship Opportunities",
    description:
      "Connect with startups and companies looking for talented student builders.",
  },
  {
    icon: ShieldCheck,
    title: "Founder Recognition",
    description:
      "Winners and selected teams receive certificates and public recognition.",
  },
];

const timeline: TimelineItem[] = [
  {
    phase: "Phase 01",
    date: "Open Now",
    title: "Registration & Idea Submission",
    description:
      "Teams register and submit their startup idea, problem statement, and pitch deck link.",
    active: true,
  },
  {
    phase: "Phase 02",
    date: "Screening Round",
    title: "Shortlisting",
    description:
      "Selected teams are shortlisted based on problem clarity, innovation, and execution potential.",
  },
  {
    phase: "Phase 03",
    date: "Mentor Round",
    title: "Pitch Preparation",
    description:
      "Shortlisted teams receive guidance on pitch structure, business model, and demo readiness.",
  },
  {
    phase: "Phase 04",
    date: "Grand Finale",
    title: "Live Fish Tank Pitch",
    description:
      "Teams pitch live to the investor panel, followed by questions and feedback.",
  },
  {
    phase: "Phase 05",
    date: "After Event",
    title: "Incubation & Opportunities",
    description:
      "Selected teams get further mentorship, incubation guidance, and opportunity connections.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Who can participate in Fish Tank?",
    answer:
      "Any RSCOE student or student team with an startup idea, prototype, MVP, or early-stage venture can participate.",
  },
  {
    question: "Do I need a working prototype?",
    answer:
      "No. Ideas, wireframes, prototypes, MVPs, and early-stage startups are all welcome. A working demo improves your chances.",
  },
  {
    question: "How many members can a team have?",
    answer:
      "Teams can have 1 to 7 members. Solo founders are also welcome.",
  },
  {
    question: "What is the pitch format?",
    answer:
      "Selected teams get around 5 minutes to pitch, followed by questions and feedback from the panel.",
  },
  {
    question: "Will my idea remain mine?",
    answer:
      "Yes. Your idea, intellectual property, and startup remain fully owned by your team.",
  },
];

function Countdown() {
  const target = new Date("2026-12-15T23:59:59").getTime();

  const getTimeLeft = () => {
    const difference = target - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const blocks = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Mins", value: time.minutes },
    { label: "Secs", value: time.seconds },
  ];

  return (
    <div className="glass inline-flex flex-col items-center gap-4 rounded-2xl px-6 py-4 sm:flex-row">
      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
        <Clock className="h-4 w-4 animate-pulse" />
        Registration Closes
      </div>

      <div className="flex items-center gap-2">
        {blocks.map((block) => (
          <div key={block.label} className="text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-slate-950/80 font-mono text-lg font-bold">
              {String(block.value).padStart(2, "0")}
            </div>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FishTank() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="page-entrance">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-20 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)]" />

        <div className="mx-auto max-w-6xl text-center">
          <div className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
            <Rocket className="h-4 w-4 text-primary" />
            E-Cell RSCOE Flagship Pitch Arena
          </div>

          <h1 className="text-5xl leading-tight md:text-7xl">
            Fish Tank <span className="gradient-text">2026</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Pitch your startup idea to investors, founders, and industry experts.
            Build, validate, and take your idea closer to reality.
          </p>

          <div className="mt-10 flex justify-center">
            <Countdown />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Register Your Startup
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              to="/events"
              className="glass inline-flex items-center gap-2 rounded-xl px-7 py-3 font-semibold transition hover:border-primary/50"
            >
              View Other Events
            </Link>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl">
              Why Join <span className="gradient-text">Fish Tank?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Fish Tank gives student founders a real platform to present,
              improve, and grow their startup ideas.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="glass scroll-reveal rounded-2xl p-7 transition hover:border-primary/40"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3">
                  <perk.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl">{perk.title}</h3>
                <p className="mt-3 text-muted-foreground">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sharks */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl">
              Meet the <span className="gradient-text">Panel</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Selected teams pitch to a curated panel of founders, investors,
              and innovation leaders.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sharks.map((shark) => (
              <div key={shark.name} className="glass rounded-2xl p-7">
                <Mic className="mb-4 h-7 w-7 text-primary" />
                <h3 className="text-xl">{shark.name}</h3>
                <p className="text-sm text-muted-foreground">{shark.title}</p>

                <div className="mt-5 space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Focus:</span>{" "}
                    {shark.focus}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Cheque Range:</span>{" "}
                    {shark.cheque}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Final panel members will be announced before the event.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl">
              Event <span className="gradient-text">Timeline</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map((item) => (
              <div
                key={item.phase}
                className={`glass rounded-2xl p-7 ${
                  item.active ? "border-primary/50" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {item.phase}
                  </span>
                  {item.active && (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Active
                    </span>
                  )}
                </div>

                <p className="mt-4 flex items-center gap-2 text-sm text-primary">
                  <CalendarDays className="h-4 w-4" />
                  {item.date}
                </p>

                <h3 className="mt-3 text-xl">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="px-6 py-20">
        <div className="glass mx-auto max-w-6xl rounded-3xl p-10">
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl">
              Pitch <span className="gradient-text">Rules</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-slate-950/50 p-7">
              <div className="mb-5 flex items-center gap-3">
                <Timer className="h-6 w-6 text-primary" />
                <h3 className="text-2xl">Pitch Format</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li>5 minutes presentation</li>
                <li>3 minutes questions and feedback</li>
                <li>1 to 7 team members allowed</li>
                <li>Maximum 10 pitch deck slides</li>
                <li>Live demo or prototype is recommended</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-slate-950/50 p-7">
              <div className="mb-5 flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                <h3 className="text-2xl">Judging Criteria</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li>Problem clarity and market need — 25 points</li>
                <li>Innovation and uniqueness — 25 points</li>
                <li>Business model and revenue potential — 20 points</li>
                <li>Prototype or execution progress — 15 points</li>
                <li>Team strength and confidence — 15 points</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="glass rounded-2xl">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="flex items-center gap-3 font-semibold">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <p className="border-t border-border/50 px-6 pb-6 pt-4 text-muted-foreground">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="px-6 pb-24">
        <div className="glass mx-auto max-w-4xl rounded-3xl p-12 text-center">
          <FileText className="mx-auto mb-6 h-12 w-12 text-primary" />
          <h2 className="text-4xl md:text-5xl">
            Register for <span className="gradient-text">Fish Tank 2026</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Submit your startup idea and become part of RSCOE’s flagship pitch
            arena.
          </p>

          <a
            href="mailto:ecell@rscoe.org?subject=Fish Tank 2026 Registration"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Register Now
            <ArrowRight className="h-4 w-4" />
          </a>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            RSCOE, Pune, Maharashtra
          </p>
        </div>
      </section>
    </div>
  );
}