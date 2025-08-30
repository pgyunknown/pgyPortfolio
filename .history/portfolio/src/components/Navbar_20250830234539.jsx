import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#works", label: "Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <aside className="hidden md:flex flex-col items-center justify-between w-64 bg-[#0d709a]/10 border-r border-[#0d709a]/30 p-8 fixed h-screen">
      {/* Photo */}
      <motion.img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full w-28 h-28 border-4 border-[#03b3fd] shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Links */}
      <nav className="flex flex-col gap-6 text-lg font-medium">
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            whileHover={{ scale: 1.1 }}
            className="text-[#e9f2f6] hover:text-[#03b3fd] transition"
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      {/* Footer */}
      <div className="text-sm text-[#e9f2f6]/60">© 2025 Gokul</div>
    </aside>
  );
}
