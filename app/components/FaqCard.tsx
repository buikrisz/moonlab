import { useCallback, useState } from "react";
import styles from "../styles/FaqCard.module.css";
import { FaqCardProps } from "../types";

export const FaqCard = ({ question, answer }: FaqCardProps) => {
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
    </div>
  );
};
