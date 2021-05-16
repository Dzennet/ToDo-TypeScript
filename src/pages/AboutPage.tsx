import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <>
      <h3>Информация</h3>
      <p>
        Этот ToDo List был сделан для удобства планирования и распределения дел
        в течение дня. Приложение написано с использованием React и TypeScript.{" "}
        <br /> Ссылка на все проекты: 
        <a href="https://github.com/Dzennet"> https://github.com/Dzennet</a>
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};

export default AboutPage;
