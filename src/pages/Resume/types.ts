export interface Education {
  institution: string;
  degree: string;
  program: string;
  duration: string;
  year: string;
}

export interface Experience {
  position: string;
  duration: string;
  location: string;
}

export interface Skills {
  [key: string]: string[];
}
