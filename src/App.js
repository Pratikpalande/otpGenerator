import logo from './lock.svg';
import log from './279547.jpg'
import './App.css';

function App() {
  const otpGenerator = () => {
    let optShow = document.getElementsByClassName("card")[0]; // Access the first element with the class name "card"
    let digits = "0123456789";
    let otp = "";
    for (let i = 0; i < 4; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    optShow.innerHTML = "<span></span>"
    setTimeout(() => {
      optShow.innerHTML = otp; // Update the inner HTML of the element
    }, 1000);
  };
  return (
    <div className="App">
      <div className="card bg-success p-2 text-dark bg-opacity-25 position-absolute top-50 start-50 translate-middle" style={{ width: '11rem', }}>
     
        <img src={logo} id="img" className="card-img-top "alt="..." />
        
        <div className="card-body">
          
        </div>
        <button type="button" className="btn btn-outline-dark position-absolute bottom-0 start-50 translate-middle-x" onClick={otpGenerator}>GET OTP</button>
      </div>
    </div>

  );
}

export default App;
