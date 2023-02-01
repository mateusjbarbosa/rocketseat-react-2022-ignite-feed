export interface Author {
  avatarURL: string;
  name: string;
  role: string;
}

export interface TextContent {
  type: "paragraph" | "link";
  content: string;
}

export interface Post {
  id: number;
  author: Author;
  content: TextContent[];
  publishedAt: Date;
}

export interface Comment {
  id: number;
  postID: number;
  author: Author;
  content: TextContent[];
  publishedAt: Date;
}

export interface Profile extends Author {
  coverURL: string;
}
