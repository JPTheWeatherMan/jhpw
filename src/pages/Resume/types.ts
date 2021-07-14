export interface Education {
  institution: string;
  degree: string;
  program: string;
  duration: string;
  year: string;
}

export interface Experience {
  position: string;
  entity: string;
  location: string;
  duration: string;
  description: string;
}

export interface Skills {
  [key: string]: string[];
}
