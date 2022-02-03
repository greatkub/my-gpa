import { Navbar } from 'react-bootstrap';
import './App.css';
import HomeGrade from './HomeGrade';
function App() {
  var rootStyle = {
    height: '100%',
    minHeight : '100vh',
    backgroundColor: "#F3F7FC"
  }
  return (
    <div className="App"  style={rootStyle}>
      <Navbar style={{backgroundColor: '#FFFFFF', height: 63, marginBottom: 50}}/>
      <HomeGrade/>
    </div>
  );
}

export default App;
