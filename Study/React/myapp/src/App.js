import logo from "./logo.svg";
import "./App.css";

function MyButton() {
  return <button>test</button>;
}

function Test() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

function Card() {
  return (
    <div id="PhotoCard">
      <div>
        <image></image>
      </div>
      <div id="Text">
      <a1>Test</a1>
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <div className="App">
      <Test />
      <Card></Card>
    </div>
  );
}
