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
          <Dictionary defaultKeyword="moonlight" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://khelsea-alarefi-web-dev-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Khelsea Al-Arefi
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/Khelbot/react-weather-homework"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://jolly-salamander-27ea5f.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
