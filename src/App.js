import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>{t("title")}</p>
        <p>{t("description.part1")}</p>
        <div>
          <button type="button" onClick={() => changeLanguage("en")}>
            {t("buttons.english")}
          </button>
          <button type="button" onClick={() => changeLanguage("pt")}>
            {t("buttons.portuguese")}
          </button>
          <button type="button" onClick={() => changeLanguage("es")}>
            {t("buttons.spanish")}
          </button>
        </div>
        <p>{t("description.part2")}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
