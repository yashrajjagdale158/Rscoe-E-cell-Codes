import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Rocket } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "E-Summit", path: "/esummit" },
  { name: "Opportunities", path: "/opportunities" },
  { name: "Join", path: "/join" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="glass sticky top-0 z-50 border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-primary/10 p-2">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-xl leading-none">E-Cell RSCOE</h1>
            <p className="text-xs text-muted-foreground">
              Building Future Founders
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/join"
            className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Join Us
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-border/50 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground transition hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}