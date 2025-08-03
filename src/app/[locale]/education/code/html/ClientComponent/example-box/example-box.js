"use client";
import { useState } from "react";
import Styles from "./example-box.module.css";

export default function ExampleBox({ exampleContent }) {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHTML, setShowHTML] = useState(true);
  const toggleHTML = () => {
    setShowHTML(!showHTML);
  };
  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  return (
    <div
      className={
        showHTML
          ? Styles.container_example + " " + Styles.expanded
          : Styles.container_example
      }
    >
      <div className={Styles.interaktif_button}>
        <h2 className={Styles.title_interaktif}>{exampleContent.title}</h2>
        <button onClick={toggleHTML}>
          {showHTML ? exampleContent.button.text : "HTML"}
        </button>
        <button
          onClick={toggleExplanation}
          className={showExplanation ? Styles.show_explanation : ""}
        >
          {exampleContent.button.explanation}
        </button>
      </div>
      <div>
        {showHTML ? (
          <code>
            {`<h4>${exampleContent.content.title}</h4>`}
            <br />
            {`
 <p>${exampleContent.content.paragraphs[0]}</p>`}
            <br />
            {`<p>${exampleContent.content.paragraphs[1]}</p>`}
          </code>
        ) : (
          <>
            <h4>{exampleContent.content.title}</h4>
            <p>{exampleContent.content.paragraphs[0]}</p>
            <p>{exampleContent.content.paragraphs[1]}</p>
          </>
        )}
      </div>
    </div>
  );
}
