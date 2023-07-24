import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <p className={style["footer__paragraph"]}>
        Challenge by{" "}
        <a
          className={style["footer__link"]}
          href="https://www.frontendmentor.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor.
        </a>{" "}
        Code by{" "}
        <a
          className={style["footer__link"]}
          href="https://www.frontendmentor.io/profile/NahuelEF"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nahuel Fedele.
        </a>
      </p>
    </footer>
  );
};
