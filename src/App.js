import qrcode from './image-qr-code.png'
import './App.css';

function App() {
  return (
    <div className='mainbody'>
    <div className="App">
      <img src={qrcode} className='QRcode' alt='qr' />
      <h1 className='header-text'>Improve your front-end <br /> skills by building projects</h1>
      <p className='para'>Scan the QR code to visit Frontend <br />
       Mentor and take your coding skills to <br /> the next level</p>
    </div>
    </div>
  );
}

export default App;
