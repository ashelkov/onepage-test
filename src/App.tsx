import { Button } from "./components/Button/Button";
import "./App.scss";

function App() {
  return (
    <>
      <div className="card">
        <Button label="Button" onClick={() => console.log("click!")} />
      </div>
    </>
  );
}

export default App;
