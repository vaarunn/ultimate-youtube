import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import Channel from './pages/Channel';
import Search from './pages/Search';
import Navbar from './pages/Navbar';
import VideoDetail from './components/VideoDetail';
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<Channel />} />
        <Route path='/search/:searchTerm' element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
