import './App.css';
import "./index.css";
import Banner from './component/Banner';
import Exhibit from './component/Exhibit';

function App() {
  return (
    <div className="App">
     <Banner data="Sextant"/>
     <Exhibit data="Heading" />
    </div>
  );
}

export default App;
