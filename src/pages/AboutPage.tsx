import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <>
      <h3>Информация</h3>
      <p>
        Это приложение было сделано для удобства планирования и распределения дел
        в течение дня. Приложение написано с использованием React и TypeScript.{" "}
        <br /> Остальные проекты
        <a href="https://github.com/Dzennet"> находятся по этой ссылке</a>
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};

export default AboutPage;
