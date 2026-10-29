import { Link } from "react-router-dom";
import { Mail, Instagram, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/40 px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl">E-Cell RSCOE</h2>
          <p className="mt-3 text-muted-foreground">
            A student-led entrepreneurship ecosystem helping students learn,
            build, validate, pitch, and launch.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg">Quick Links</h3>
          <div className="flex flex-col gap-3 text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/events" className="hover:text-primary">Events</Link>
            <Link to="/esummit" className="hover:text-primary">E-Summit</Link>
            <Link to="/opportunities" className="hover:text-primary">Opportunities</Link>
            <Link to="/join" className="hover:text-primary">Join Us</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg">Connect</h3>
          <div className="flex flex-col gap-3 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              ecell@rscoe.org
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              RSCOE, Pune, Maharashtra
            </span>
            <span className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-primary" />
              @ecellrscoe
            </span>
            <span className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-primary" />
              E-Cell RSCOE
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} E-Cell RSCOE. All rights reserved.
      </div>
    </footer>
  );
}