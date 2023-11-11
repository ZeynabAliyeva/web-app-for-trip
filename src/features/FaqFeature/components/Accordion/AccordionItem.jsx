import React, { useRef } from "react";
import openIcon from "../../../../assets/icons/openBtn.png";
import closeIcon from "../../../../assets/icons/closeBtn.png";

export const AccordionItem = ({ faqItem, onClick, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <li className="accordion-item">
      <button className="accordion-header" onClick={() => onClick()}>
        <div className="accordion-left">
          <div className="accordion-number">{faqItem.number}</div>
          <p className="accordion-title">{faqItem.title}</p>
        </div>
        <button className={`buttons-container ${isOpen ? "closeBtn" : ""}`}>
          {isOpen ? (
            <img src={closeIcon}/>
          ) : (
            <img src={openIcon}/>
          )}
        </button>
      </button>
      <div
        className="accordion-collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div className="accordion-body" ref={itemRef}>
          {faqItem.subTitle}
        </div>
      </div>
    </li>
  );
};
