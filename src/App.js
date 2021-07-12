import Searchbar from './components/Searchbar/index';
import Posts from './features/posts/Posts';
import SelectedPost from './features/selectedPost/SelectedPost';
import styles from './style/styles.module.scss';

const App = () => {

  return (
    <>
      <header>
        <Searchbar />
       </header>
       <main>
        <div className = {styles.postsContainer}>
          <Posts/>
          <SelectedPost />
        </div>
      </main>
    </>
  );
}

export default App;
