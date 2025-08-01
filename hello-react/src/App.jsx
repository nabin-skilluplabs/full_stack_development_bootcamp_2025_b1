import { Link } from 'react-router';
import './App.css';
import { Counter } from './Counter';
import Gallery from './Gallery';
import ScientistsList from './ScientistsList';

function App() {
  return (
    <>
      <ul>
        <li><Link to="/thinking-in-react">Thinking in react</Link></li>
      </ul>
      <Counter />
      <ScientistsList />
    </>
  )
}

export default App
