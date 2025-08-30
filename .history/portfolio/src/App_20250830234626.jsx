import { motion } from "framer-motion";
import Navbar from "./Navbar";


export default function App() {
return (
<div className="flex bg-[#040a0d] text-[#e9f2f6] min-h-screen">
{/* Sidebar Navbar */}
<Navbar />


{/* Main Content */}
<main className="flex-1 p-8 md:p-16 space-y-32 overflow-x-hidden">
{/* Home Section */}
<section id="home" className="h-screen flex flex-col justify-center">
<motion.h1
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className="text-4xl md:text-6xl font-bold text-[#8dcfeb]"
>
Hi, I'm Gokul 👋
</motion.h1>
<p className="mt-4 text-lg md:text-2xl text-[#e9f2f6]/80">
Java Backend Developer | Web Enthusiast
</p>
<motion.a
href="#works"
whileHover={{ scale: 1.05 }}
className="mt-8 inline-block bg-[#03b3fd] text-[#040a0d] px-6 py-3 rounded-xl font-semibold shadow-lg"
>
View My Work
</motion.a>
</section>


{/* About Section */}
<section id="about" className="min-h-screen flex flex-col md:flex-row items-center gap-10">
<motion.img
src="https://via.placeholder.com/200"
alt="Profile"
className="rounded-full w-40 h-40 md:w-56 md:h-56 border-4 border-[#8dcfeb] shadow-lg"
initial={{ opacity: 0, scale: 0.8 }}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8 }}
/>
<motion.div
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
>
<h2 className="text-3xl md:text-4xl font-bold text-[#8dcfeb] mb-4">About Me</h2>
<p className="text-lg text-[#e9f2f6]/80 max-w-xl">
I'm a passionate Java Backend Developer who loves creating scalable applications
and clean user experiences. With strong interest in system design, web apps, and
problem-solving, I aim to craft impactful solutions.
</p>
</motion.div>
</section>


{/* Works Section */}
<section id="works" className="min-h-screen">
<h2 className="text-3xl md:text-4xl font-bold text-[#8dcfeb] mb-10">My Works</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{[1, 2, 3, 4].map((work) => (
<motion.div
key={work}
className="bg-[#0d709a]/20 border border-[#0d709a]/30 rounded-xl p-6 hover:shadow-xl hover:shadow-[#03b3fd]/30 transition"
whileHover={{ scale: 1.03 }}
}