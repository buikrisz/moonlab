import { useCallback, useState } from "react";
import styles from "../styles/FaqCard.module.css";
import { FaqCardProps } from "../types";

export const FaqCard = ({ question, answer, link }: FaqCardProps) => {
  const [hidden, setHidden] = useState(true);

  const handleClick = useCallback(() => {
    setHidden(!hidden);
  }, [hidden]);

  return (
    <div className={styles.faqCard} onClick={handleClick}>
      <h5 className={styles.faqQuestion}>{question}</h5>
      <p
        className={`${styles.faqAnswer}${
          !hidden ? ` ${styles.faqAnswerVisible}` : ""
        }`}
      >
        {answer}
      </p>
      <a
        className={`${styles.faqLink}${
          !hidden ? ` ${styles.faqLinkVisible}` : ""
        }`}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
    </div>
  );
};
