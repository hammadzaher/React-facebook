// import logo from './logo.svg';
import './App.css';
import Header from './header'
import LeftBar from './side-bar'
import RightBar from './rightbar';
import MainContent from './maincont'
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
function App() {
  
  return (
    <div className="App">
      <div className="one"><Header/></div>
      <div className="left-right-bar">
        <div className="left-bar">
          <LeftBar/>
        </div>
        <div className="maincont">
          <MainContent />
        </div>
        <div className="right-bar">
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default App;
