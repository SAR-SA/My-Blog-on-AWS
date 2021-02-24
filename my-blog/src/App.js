import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticleListPage from './Pages/ArticleListPage';
import ArticlePage from './Pages/ArticlePage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    {/* can wrap all in a div with css tag to have css on all pages */}
    <div className="App">
      <Route path="/" component={HomePage} exact/>
      <Route path="/about" component={AboutPage} exact/>
      <Route path="/article-list" component={ArticleListPage} exact/>
      <Route path="/article" component={ArticlePage} exact/>
    </div>
    </Router>
  );
}

export default App;
