export type Project = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  status: string;
  icon: "globe" | "dumbbell" | "layers" | "wrench" | "shopping-basket";
};
