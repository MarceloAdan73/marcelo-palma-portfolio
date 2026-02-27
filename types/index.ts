export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  icon: React.ReactNode;
  category: string;
  technologies: Array<{ name: string; icon: React.ReactNode }>;
  demoLink: string;
  codeLink: string;
  featured: boolean;
  metrics?: {
    tests?: number;
    docker?: boolean;
    jwt?: boolean;
  };
}

export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';