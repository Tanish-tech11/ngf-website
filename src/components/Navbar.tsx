import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface LeafItem {
  label: string;
  href: string;
}

interface SubItem {
  label: string;
  href?: string;
  children?: LeafItem[];
}

interface MenuItem {
  label: string;
  href?: string;
  children?: SubItem[];
}

interface NavItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

const navItems: NavItem[] = [
  {
    label: "About Us",
    children: [
      { label: "Our History", href: "/about/history" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Infrastructure", href: "/about/infrastructure" },
      {
        label: "Management",
        children: [
          { label: "Messages From Chairperson", href: "/about/management/chairperson" },
          { label: "Messages From CEO", href: "/about/management/ceo" },
          { label: "Messages From Director Principal", href: "/about/management/director-principal" },
          { label: "Messages From Dean Academics", href: "/about/management/dean-academics" },
          { label: "Boards Of Governor's", href: "/about/management/board-of-governors" },
        ],
      },
      { label: "Faculties", href: "/about/faculties" },
      { label: "Affiliations", href: "/about/affiliations" },
      { label: "Achievements & Awards", href: "/about/achievements" },
      { label: "Radio NGF", href: "/about/radio-ngf" },
    ],
  },
  {
    label: "Department",
    children: [
      {
        label: "Engineering",
        children: [
          {
            label: "B.Tech",
            children: [
              { label: "Computer Science Engineering", href: "/departments/btech/cse" },
              { label: "CSE — AIML", href: "/departments/btech/cse-aiml" },
              { label: "CSE — Cyber Security", href: "/departments/btech/cse-cyber-security" },
              { label: "Electronics & Communication", href: "/departments/btech/ece" },
              { label: "Mechanical Engineering", href: "/departments/btech/mechanical" },
              { label: "Electrical Engineering", href: "/departments/btech/electrical" },
              { label: "Fashion & Apparel Engineering", href: "/departments/btech/fashion-apparel" },
            ],
          },
          {
            label: "M.Tech",
            children: [
              { label: "Computer Science Engineering", href: "/departments/mtech/cse" },
            ],
          },
        ],
      },
      {
        label: "Management",
        children: [
          {
            label: "BBA",
            children: [
              { label: "BBA General", href: "/departments/management/bba-general" },
              { label: "BBA Digital Marketing", href: "/departments/management/bba-digital-marketing" },
            ],
          },
          { label: "MBA", href: "/departments/management/mba" },
        ],
      },
      {
        label: "Computer Application",
        children: [
          {
            label: "BCA",
            children: [
              { label: "BCA General", href: "/departments/computer-application/bca-general" },
              { label: "BCA Data Science", href: "/departments/computer-application/bca-data-science" },
            ],
          },
          { label: "MCA", href: "/departments/computer-application/mca" },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "Apply Now", href: "/admissions/apply" },
      { label: "Admission Procedure", href: "/admissions?tab=procedures" },
      { label: "Eligibility Criteria", href: "/admissions?tab=eligibility" },
      { label: "Scholarship Policy", href: "/admissions?tab=scholarship" },
      { label: "Transportation Fee", href: "/admissions?tab=transport" },
      { label: "Refund Policy", href: "/admissions?tab=refund" },
      { label: "FAQ", href: "/admissions?tab=faq" },
      { label: "Hostel", href: "/admissions?tab=hostel" },
    ],
  },
  {
    label: "Life At NGF",
    href: "/campus-life",
    children: [
      { label: "Campus Events", href: "/campus-life/events" },
      { label: "Sports", href: "/campus-life/sports" },
      { label: "Cultural Activities", href: "/campus-life/cultural" },
      { label: "Clubs & Societies", href: "/campus-life/clubs" },
      { label: "Hostel Life", href: "/campus-life/hostel" },
    ],
  },
  {
    label: "Training & Placement",
    children: [
      { label: "COE", href: "/placements/coe" },
      { label: "Placement Cell", href: "/placements/cell" },
      { label: "Placement Policy", href: "/placements/policy" },
      { label: "Placement Record", href: "/placements/record" },
      { label: "Corporate Tie-Ups", href: "/placements/corporate-tieups" },
      { label: "Job Fest", href: "/placements/job-fest" },
      { label: "Industrial Visit", href: "/placements/industrial-visit" },
      { label: "On The Job Training", href: "/placements/ojt" },
      { label: "Guest Lecture", href: "/placements/guest-lecture" },
      { label: "Alumni Club", href: "/placements/alumni" },
      { label: "For Corporate", href: "/placements/for-corporate" },
      { label: "Photos Gallery", href: "/placements/gallery" },
    ],
  },
];

const utilityLinks = [
  { label: "Admission Portal", href: "/admissions/apply" },
  { label: "Infrastructure", href: "/about/infrastructure" },
  { label: "Blogs", href: "/blogs" },
  { label: "News", href: "/blogs" },
  { label: "Alumni", href: "/placements/alumni" },
  { label: "Careers", href: "/contact" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<number | null>(null);
  const location = useLocation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setMobileExpanded(null);
    setMobileSubExpanded(null);
  }, [location.pathname]);

  const [activeLevel3, setActiveLevel3] = useState<number | null>(null);
  const [mobileLevel3, setMobileLevel3] = useState<number | null>(null);

  const handleMouseEnter = (idx: number) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(idx);
    setActiveSubmenu(null);
    setActiveLevel3(null);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
      setActiveLevel3(null);
    }, 150);
  };

  const handleSubmenuEnter = (idx: number) => {
    clearTimeout(dropdownTimeout.current);
    setActiveSubmenu(idx);
    setActiveLevel3(null);
  };

  const handleLevel3Enter = (idx: number) => {
    clearTimeout(dropdownTimeout.current);
    setActiveLevel3(idx);
  };

  return (
    <>
      {/* Utility Bar */}
      <div className="hidden lg:block bg-navy text-white/80 text-xs relative z-50">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-0">
            {utilityLinks.map((link, i) => (
              <Link
                key={link.label}
                to={link.href}
                className="px-3 py-1 hover:text-yellow transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 bg-background border-b border-border shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter font-display text-navy"
          >
            NGF<span className="text-yellow">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-navy hover:text-yellow transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className="opacity-60" />}
                </button>

                {/* Dropdown */}
                {item.children && activeDropdown === idx && (
                  <div
                    className="absolute top-full left-0 pt-1"
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-popover border border-border rounded-sm shadow-xl py-1.5 min-w-[220px] animate-in fade-in-0 zoom-in-95 duration-150">
                      {item.children.map((child, childIdx) => (
                        <div
                          key={child.label}
                          className="relative"
                          onMouseEnter={() =>
                            child.children ? handleSubmenuEnter(childIdx) : setActiveSubmenu(null)
                          }
                        >
                          {child.children ? (
                            <button
                              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${activeSubmenu === childIdx
                                ? "bg-yellow text-navy font-semibold"
                                : "text-popover-foreground hover:bg-accent"
                                }`}
                            >
                              {child.label}
                              <ChevronRight size={14} />
                            </button>
                          ) : (
                            <Link
                              to={child.href || "#"}
                              className="block px-4 py-2.5 text-sm text-popover-foreground hover:bg-accent transition-colors"
                            >
                              {child.label}
                            </Link>
                          )}

                          {/* Submenu (Level 2) */}
                          {child.children && activeSubmenu === childIdx && (
                            <div
                              className="absolute left-full top-0 ml-0.5"
                              onMouseEnter={() => handleSubmenuEnter(childIdx)}
                              onMouseLeave={handleMouseLeave}
                            >
                              <div className="bg-popover border border-border rounded-sm shadow-xl py-1.5 min-w-[220px] animate-in fade-in-0 slide-in-from-left-1 duration-150">
                                {child.children.map((sub, subIdx) => (
                                  <div
                                    key={sub.label}
                                    className="relative"
                                    onMouseEnter={() =>
                                      sub.children ? handleLevel3Enter(subIdx) : setActiveLevel3(null)
                                    }
                                  >
                                    {sub.children ? (
                                      <button
                                        className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${activeLevel3 === subIdx
                                          ? "bg-yellow text-navy font-semibold"
                                          : "text-popover-foreground hover:bg-accent"
                                          }`}
                                      >
                                        {sub.label}
                                        <ChevronRight size={14} />
                                      </button>
                                    ) : (
                                      <Link
                                        to={sub.href || "#"}
                                        className="block px-4 py-2.5 text-sm text-popover-foreground hover:bg-accent transition-colors"
                                      >
                                        {sub.label}
                                      </Link>
                                    )}

                                    {/* Level 3 submenu */}
                                    {sub.children && activeLevel3 === subIdx && (
                                      <div
                                        className="absolute left-full top-0 ml-0.5"
                                        onMouseEnter={() => handleLevel3Enter(subIdx)}
                                        onMouseLeave={handleMouseLeave}
                                      >
                                        <div className="bg-popover border border-border rounded-sm shadow-xl py-1.5 min-w-[250px] animate-in fade-in-0 slide-in-from-left-1 duration-150">
                                          {sub.children.map((leaf) => (
                                            <Link
                                              key={leaf.label}
                                              to={leaf.href}
                                              className="block px-4 py-2.5 text-sm text-popover-foreground hover:bg-accent transition-colors"
                                            >
                                              {leaf.label}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Apply Now Button — navy filled, rectangular */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold uppercase tracking-wide bg-navy text-white hover:bg-navy-light transition-all rounded-none"
          >
            Apply Now <span className="text-lg">→</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-navy"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-background border-t border-border px-6 py-4 max-h-[80vh] overflow-y-auto">
            {navItems.map((item, idx) => (
              <div key={item.label} className="border-b border-border last:border-0">
                <button
                  className="w-full flex items-center justify-between py-3 text-sm font-semibold uppercase text-navy"
                  onClick={() => setMobileExpanded(mobileExpanded === idx ? null : idx)}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileExpanded === idx ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {item.children && mobileExpanded === idx && (
                  <div className="pl-4 pb-3 space-y-0.5">
                    {item.children.map((child, childIdx) => (
                      <div key={child.label}>
                        {child.children ? (
                          <>
                            <button
                              className="w-full flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-yellow"
                              onClick={() =>
                                setMobileSubExpanded(mobileSubExpanded === childIdx ? null : childIdx)
                              }
                            >
                              {child.label}
                              <ChevronRight
                                size={14}
                                className={`transition-transform ${mobileSubExpanded === childIdx ? "rotate-90" : ""
                                  }`}
                              />
                            </button>
                            {mobileSubExpanded === childIdx && (
                              <div className="pl-4 space-y-0.5">
                                {child.children.map((sub, subIdx) => (
                                  <div key={sub.label}>
                                    {sub.children ? (
                                      <>
                                        <button
                                          className="w-full flex items-center justify-between py-2 text-sm text-muted-foreground hover:text-yellow"
                                          onClick={() =>
                                            setMobileLevel3(mobileLevel3 === subIdx ? null : subIdx)
                                          }
                                        >
                                          {sub.label}
                                          <ChevronRight
                                            size={14}
                                            className={`transition-transform ${mobileLevel3 === subIdx ? "rotate-90" : ""}`}
                                          />
                                        </button>
                                        {mobileLevel3 === subIdx && (
                                          <div className="pl-4 space-y-0.5">
                                            {sub.children.map((leaf) => (
                                              <Link
                                                key={leaf.label}
                                                to={leaf.href}
                                                className="block py-2 text-sm text-muted-foreground hover:text-yellow"
                                                onClick={() => setOpen(false)}
                                              >
                                                {leaf.label}
                                              </Link>
                                            ))}
                                          </div>
                                        )}
                                      </>
                                    ) : (
                                      <Link
                                        to={sub.href || "#"}
                                        className="block py-2 text-sm text-muted-foreground hover:text-yellow"
                                        onClick={() => setOpen(false)}
                                      >
                                        {sub.label}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            to={child.href || "#"}
                            className="block py-2 text-sm text-muted-foreground hover:text-yellow"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block mt-4 bg-navy text-white px-5 py-2.5 text-sm font-bold uppercase text-center"
              onClick={() => setOpen(false)}
            >
              Apply Now →
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;