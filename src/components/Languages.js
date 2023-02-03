import React from "react";
const Languages = ({ language, languagefilter }) => {
  return (
    <div className="btn_list">
      {language.map((lang, index) => {
        return (
          <button
            className="filter_btn"
            key={index}
            onClick={() => languagefilter(lang)}
          >
            <h3>{lang}</h3>
          </button>
        );
      })}
    </div>
  );
};
export default Languages;
