import { Post, Profile } from "./models";

export const profile: Profile = {
  avatarURL:
    "https://images.unsplash.com/photo-1599425857670-b17a03c9c897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb25kZSUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=30",
  coverURL:
    "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=30",
  name: "Aurora Ribeiro",
  role: "Frontend Developer",
};

export const posts: Post[] = [
  {
    id: 3,
    author: {
      avatarURL:
        "https://images.unsplash.com/photo-1531518326825-96490ddf2a89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdW5nJTIwZ2lybCUyMGJsYWNrJTIwaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=30",
      name: "Helena Ribeiro",
      role: "Product Manager",
    },
    content: [
      { type: "paragraph", content: "Oi, pessoal! 👋🏻" },
      {
        type: "paragraph",
        content:
          "Acabei de escrever esse artigo sobre criação de Backlogs. Ficou bem legal!",
      },
      { type: "link", content: "http://helenaribeiro.com/criacao-de-backlogs" },
    ],
    publishedAt: new Date("2023-02-01 10:41:18"),
  },
  {
    id: 2,
    author: {
      avatarURL:
        "https://images.unsplash.com/photo-1599425857670-b17a03c9c897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb25kZSUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=30",
      name: "Aurora Ribeiro",
      role: "Frontend Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Olá, galera! Alguém aqui já testou o Zod? Queria começar um novo projeto usando ele e gostaria de opiniões",
      },
    ],
    publishedAt: new Date("2023-01-28 21:41:58"),
  },
  {
    id: 1,
    author: {
      avatarURL:
        "https://images.unsplash.com/photo-1594201510970-f549e4a6e96d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHlvdW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=30",
      name: "Davi Barbosa",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Opa! 👨🏻‍💻" },
      {
        type: "paragraph",
        content:
          "Mais um projeto na conta, hoje finalizei meu primeiro aplicativo com uso de mapas!",
      },
      { type: "link", content: "http://davibarbosa.dev/following-my-delivery" },
    ],
    publishedAt: new Date("2023-01-26 14:30:25"),
  },
];
