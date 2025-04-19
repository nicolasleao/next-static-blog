import Avatar from "../../components/Avatar";

export const metadata = {
  title: "About - Nicolas Leão",
  description: "About Nicolas, an AI Engineer from Brazil.",
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-8">
        <Avatar />
        <h1 className="text-4xl font-bold text-pastel-primary mb-2">About Me</h1>
        <p className="text-pastel-light max-w-lg">
          Software Engineer & Full Stack Developer with 5 years of experience helping redefine productivity and digital experiences.
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        <p>
          I&apos;m a Full Stack Engineer with expertise in accelerating value delivery and resolving complex 
          technical challenges to optimize system performance and improve user experiences. Currently 
          working at Vectal where I&apos;m helping redefine productivity through innovative software solutions.
        </p>

        <h2>Professional Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Engineering productivity tools at Vectal with focus on UX and performance</li>
          <li>Built AI systems for enterprise customer support automation at Kodif</li>
          <li>Led engineering teams to deliver complex products on schedule</li>
          <li>Developed ecommerce applications impacting thousands of users</li>
        </ul>

        <h2>Skills</h2>
        <div className="flex flex-wrap gap-2 my-4">
          {[
            "JavaScript (ES6+)", "React.js", "TypeScript", "PHP", "Python",
            "AI/ML", "LLMs", "Next.js", "Redux", "Nest.js",
            "Google Cloud", "AWS", "Jest", "CI/CD", "Git",
            "Elasticsearch", "Microservices", "RAG Systems", "Compound AI Systems"
          ].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-pastel-primary/20 text-pastel-primary border border-pastel-primary/30 rounded-full text-sm hover:bg-pastel-primary/30 transition-colors">
              {skill}
            </span>
          ))}
        </div>

        {/* <h2>Accomplishments</h2>
        <div className="bg-pastel-primary/10 p-4 rounded-lg border border-pastel-primary/20 mb-4">
          <h3 className="text-pastel-accent mt-0">Tetrix Challenge | VTEX (2020)</h3>
          <p className="mb-1">Finalist among 72,000+ participants in the world&apos;s biggest university challenge, demonstrating skills in statistics, logic, leadership, and e-commerce.</p>
        </div>
        
        <div className="bg-pastel-primary/10 p-4 rounded-lg border border-pastel-primary/20">
          <h3 className="text-pastel-accent mt-0">Hackathon | Alooba (2022)</h3>
          <p className="mb-1">1st place winner, created UX improvements by drastically increasing navigation performance with a caching/revalidation strategy.</p>
        </div> */}

        <h2>Contact Me</h2>
        <p>
          I&apos;m always open to collaboration and discussions about productivity, technology trends, and 
          innovative projects. Feel free to reach out via:
        </p>
        <ul>
          <li><a href="https://github.com/nicolasleao" className="text-pastel-secondary hover:text-pastel-accent transition-colors">GitHub</a></li>
          <li><a href="https://linkedin.com/in/nicolasleao" className="text-pastel-secondary hover:text-pastel-accent transition-colors">LinkedIn</a></li>
          <li><a href="https://www.youtube.com/@nicolasleao-tech" className="text-pastel-secondary hover:text-pastel-accent transition-colors">Youtube</a></li>
        </ul>
      </div>
    </main>
  );
} 