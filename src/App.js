import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
 return ( 
    <Routes>
      <Route path="/movie/:id" Component={Detail}/>
      <Route path ="/" Component={Home}/>
    </Routes>
 )
}
export default App;
