import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode,setMode]=useState('light');

  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success")
      
    } else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
    }
  }
  const [mode1,setMode1]=useState('light')
  const toggleMode1=()=>{
    if (mode1==='light') {
      setMode1('green');
      document.body.style.backgroundColor='lightgreen';
      showAlert("Green Mode has been enabled","success")
      
    } else{
      setMode1('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (
    <>
      
        <Navbar
          title="TextUtils" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1}
        />
        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          
            
                <TextForm
                  showAlert={showAlert} heading="Enter Text to analyze "mode={mode}
                />
              
          
        </div>
      
    </>
  );


}

export default App;
