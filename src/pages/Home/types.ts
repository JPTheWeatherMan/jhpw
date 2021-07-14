export interface About {
  name: string;
  position: string;
  school: string;
  status: string;
  interests: string[];
  email: string;
  discord: string;
}

interface Link {
  linkName: string;
  linkUrl: string;
}

export interface Links {
  LinkedIn: Link;
  GitHub: Link;
}
