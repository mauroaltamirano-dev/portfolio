export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  color: string;
}

export interface Skill {
  name: string;
  icon:
    | React.ComponentType<{
        size?: number;
        color?: string;
        className?: string;
      }>
    | string;
  category:
    | "languages"
    | "frameworks"
    | "libraries"
    | "databases"
    | "tools"
    | "design";
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
}
