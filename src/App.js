import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
 <>
 
  <Navbar abc= "textutils"/>
  <div className='container my-3'>
  <TextForm heading = "enter the text to analize" />
 
  </div>

 </>
  )
}

export default App;
