import book from "./book.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={book} className="App-logo img-fluid" alt="logo" />{" "}
        </header>
        <main>
          <Dictionary  defaultKeyword="moonlight"/>
        </main>
        <footer className="App-footer">
          <small>Coded by Khelsea Al-Arefi</small>
        </footer>
      </div>
    </div>
  );
}
