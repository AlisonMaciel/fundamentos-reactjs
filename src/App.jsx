import { Header } from "./components/header"

import "./global.css"

import styles from "./App.module.css"

import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

const post = [
  {
    id: 1,
    author: {
      name: "Alison Maciel",
      role: "Dev Front-End",
      avatarUrl: "https://github.com/AlisonMaciel.png"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. 🚀"},
      {type: "Link", content: `https://rocketseat.com`},
    ],
    publishedAt: new Date(`2024-05-08 15:00:00`)
  },
  {
    id: 2,
    author: {
      name: "Diego fernandes",
      role: "CTO @ Rocketseat",
      avatarUrl: "https://github.com/Diego3g.png"
    },
    content: [
      {type: "paragraph", content: "Fala galera! Diego aqui 👋"},
      {type: "paragraph", content: "Educador e CTO na Rocketseat."},
      {type: "Link", content: `https://rocketseat.com`},
    ],
    publishedAt: new Date(`2025-04-08 15:00:00`)
  },
  {
    id: 3,
    author: {
      name: "MaykBrito",
      role: "Educador na Rocketseat",
      avatarUrl: "https://github.com/MaykBrito.png"
    },
    content: [
      {type: "paragraph", content: "Fala galera! Mayk aqui 👋"},
      {type: "paragraph", content: "Educador na Rocketseat com foco em ajuda quem está dando os primeiros passos"},
      {type: "Link", content: `https://rocketseat.com`},
    ],
    publishedAt: new Date(`2025-05-05 15:00:00`)
  },
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            post.map(post => (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}


