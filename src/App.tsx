import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./components/Wrapper";
import "./global.css";
import { posts, profile } from "./mockData";

export function App() {
  return (
    <>
      <Header />

      <Wrapper>
        <Sidebar profile={profile} />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              id={post.id}
              profile={profile} // is a temporary hack to use a correct profile in new comments
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </Wrapper>
    </>
  );
}
