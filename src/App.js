import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (<>
{/* the whole function of navbar is carried by Navbar component */}
< Navbar title= "TextUtils" about="About "/>
<TextForm heading= "Enter your thoughts below " />  {// created a props for heading
}
</>
  );
}

export default App;
