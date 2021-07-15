import Searchbar from './components/Searchbar/index';
import Posts from './containers/Posts/index';
import SelectedPost from './containers/SelectedPost/index';
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
