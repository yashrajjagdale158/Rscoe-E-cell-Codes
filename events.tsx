import { CalendarDays, MapPin, Users } from "lucide-react";

const events = [
  {
    title: "E-Summit",
    date: "Coming Soon",
    location: "RSCOE, Pune",
    description:
      "Flagship entrepreneurship summit with speakers, workshops, startup pitches, and networking.",
  },
  {
    title: "Fish Tank",
    date: "Annual Event",
    location: "RSCOE, Pune",
    description:
      "Startup pitching and idea-validation event where students present their ventures to experts.",
  },
  {
    title: "Workshops & Bootcamps",
    date: "Throughout the Year",
    location: "RSCOE, Pune",
    description:
      "Practical sessions on entrepreneurship, AI, product building, design, and business models.",
  },
];

export default function Events() {
  return (
    <div className="page-entrance px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-5xl md:text-6xl">Our Events</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          E-Cell RSCOE conducts events that help students learn, build, pitch,
          and connect with the startup ecosystem.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.title} className="glass rounded-2xl p-7">
              <h2 className="text-2xl">{event.title}</h2>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  {event.date}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {event.location}
                </p>
                <p className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Open to students
                </p>
              </div>
              <p className="mt-4 text-muted-foreground">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}