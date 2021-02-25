import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ArticlesListPage from './Pages/ArticlesListPage';
import ArticlePage from './Pages/ArticlePage';
import NotFoundPage from './Pages/NotFoundPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
    {/* can wrap all in a div with css tag to have css on all pages */}
    <div className="App">
    <NavBar />
    {/* using switch so that only one route is rendered at a time. */}
    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/about" component={AboutPage} />
      <Route path="/article-list" component={ArticlesListPage} />
      <Route path="/article/:name" component={ArticlePage} />
      <Route component={NotFoundPage} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
