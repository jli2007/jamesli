export interface Track {
  id: string;
  name: string;
  artists?: { name: string }[];
  album?: { 
    images?: { url: string }[];
    name?: string;
  };
  external_urls?: { spotify: string };
}