import "./index.css";
import { Hero, Skills, Projects } from "./components";
import { heroData, socialLinks, skills, projects } from "./data/portfolio";

export function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero
        name={heroData.name}
        title={heroData.title}
        subtitle={heroData.subtitle}
        description={heroData.description}
        socialLinks={socialLinks}
      />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </div>
  );
}

export default App;
