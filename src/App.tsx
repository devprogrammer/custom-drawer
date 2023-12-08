import {useState} from 'react';
import { DeliverDrawer } from './components/mydrawer/deliverDrawer';
import './App.css';
import { GoogleMapsComponent } from './components/googleMap/google.map';

function App() {
  const [open, setOpen] = useState<boolean>(false)
  const [map, setMap] = useState<any>(null)

  const onDone = () => {}
  const close = () => {
    setOpen(!open)
  }

  return (
    <div className="App">
      <div className='w-full h-screen' onClick={close}>
        <GoogleMapsComponent />
      </div>
      <DeliverDrawer 
        open={open} 
        onClose={close} 
        onDone={onDone}
      />
    </div>
  );
}

export default App;
