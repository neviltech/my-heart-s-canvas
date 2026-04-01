import { Link, useLocation } from "react-router-dom";
import { Heart } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Her" },
  { to: "/poem", label: "Poem" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-x-0 border-t-0">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Heart className="w-5 h-5 text-rose-accent group-hover:scale-110 transition-transform duration-300" />
          <span className="font-display text-xl font-semibold tracking-wide text-foreground">
            For Izeel
          </span>
        </Link>
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`font-body text-sm tracking-widest uppercase transition-all duration-300 relative pb-1 ${
                location.pathname === item.to
                  ? "text-rose-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {location.pathname === item.to && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-rose-accent" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
