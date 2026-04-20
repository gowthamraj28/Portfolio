import React, { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const NavContainer = ({ active, theme, setTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");

            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  active === id
                    ? "bg-primary text-primary-foreground px-3 py-1 rounded-full"
                    : " hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm transition ${
                    active === id
                      ? "bg-primary text-white px-3 py-1 rounded-full"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavContainer;
