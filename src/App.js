import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Friend from './components/Friend/Friend';
import Header from './components/Header/Header';
import FriendDeatil from './FriendDetail/FriendDeatil';
import Custom from './components/Custom/Custom';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
        <Route path='/friends'>
            <Friends></Friends>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route path='/about/custom'>
          <Custom></Custom>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/friend/:id'>
            <FriendDeatil></FriendDeatil>
          </Route>
          <Route path='/post/:postId'>
            <PostDetail></PostDetail>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
          <Route path='/friends'>
            <Friends></Friends>
          </Route>
          <Route path='/friend'>
            <Friend></Friend>
          </Route>
       </Switch>
       </Router>
    </div>
  );
}
export default App;
