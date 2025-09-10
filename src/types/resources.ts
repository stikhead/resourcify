
export type Youtuber = {
  name?: string;
  description?: string;
  playlistId?: string;
  channelUrl?: string;
  playlistUrl?: string;
  language?: string;
  difficulty?: string;
  duration?: string;
  subscribers?: string;
  avatar?: string;
};

export type Book = {
  title?: string;
  author?: string;
  description?: string;
  url?: string;
  type?: string;
  pages?: string;
  level?: string;
  year?: string;
};

export type Doc = {
  title?: string;
  organization?: string;
  description?: string;
  url?: string;
  type?: string;
  year?: string;
};

export type PracticeResource = {
  name?: string;
  description?: string;
  url?: string;
  type?: string;
  icon?: any;
};
