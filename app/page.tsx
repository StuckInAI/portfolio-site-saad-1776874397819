import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getProfile, getSkills, getSkillCategories, getProjects } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [profile, skills, skillCategories, projects] = await Promise.all([
    getProfile(),
    getSkills(),
    getSkillCategories(),
    getProjects(),
  ]);

  return (
    <main className="min-h-screen">
      <Navbar profile={profile} />
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills skills={skills} skillCategories={skillCategories} />
      <Projects projects={projects} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </main>
  );
}
