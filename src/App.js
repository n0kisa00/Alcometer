import './App.css';
import {useState} from "react";

function App() {
  const [weight, setWeight] = useState(60);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [alcoresult, setAlcoresult] = useState(0);

  function handlesubmit(e){
    let result = 0;
    let liters = bottles * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;
    let gramsleft = grams - (burning * time);
    e.preventDefault();
    if (gender === "male") {
      result = gramsleft / (weight * 0.7)
    } else {
      result = gramsleft / (weight * 0.6)
    }
    setAlcoresult(result);
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Weight</label>
          <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
          <input type="number" value={bottles} onChange={e => setBottles(e.target.value)}></input>
        </div>
        <div>
          <label>Time</label>
          <input type="number" value={time} onChange={e => setTime(e.target.value)}></input>
        </div>
        <div>
          <label>Gender</label>
          <div>
          <label><input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input>Male</label>
          <label><input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input>Female</label>
          </div>
        </div>
        <div>
        <button>Calculate</button>
        <output>{alcoresult}</output>
        </div>
      </form>
    </div>
  );
}

export default App;
