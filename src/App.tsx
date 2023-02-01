import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import { Wrapper } from './components/Wrapper';
import './global.css';

export function App() {
  return (
    <>
      <Header />

      <Wrapper>
        <Sidebar />
        <main>
          <Post />
        </main>
      </Wrapper>
    </>
  )
}
