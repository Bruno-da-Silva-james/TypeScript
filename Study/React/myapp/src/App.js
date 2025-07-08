import logo from "./logo.svg";
import "./App.css";

function HeaderButton(letraBotao) {
  return <button id="HeaderButton">teste</button>;
}

function Test() {
  return (
    <div>
      <h1>Welcome to my app</h1>
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
      <div className="Header">
        <a1>Bruno da Silva James</a1>
        <HeaderButton></HeaderButton>
      </div>
      <Test />
      <Card></Card>
    </div>
  );
}
