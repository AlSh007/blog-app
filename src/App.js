import Navbar from './Navbar';
import Home from './Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Create from './Create';
import NotFound from './NotFound';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
            <Routes>
              <Route  exact path="/" element={<Home/ >}>
              </Route>
              <Route path="/create" element={<Create/>}></Route>
              <Route path="/blogs/:id" element={<BlogDetails/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
