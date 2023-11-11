import { AccordionItem } from "./accordionItem";
import "./style.css";
import { useState } from "react";

const faqList = [
  {
    number: "01",
    title:
      "What are the best tips for finding budget-friendly travel accommodations?",
    subTitle:
      "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.",
  },
  {
    number: "02",
    title: "How can I find authentic local experiences when traveling?",
    subTitle:
      "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Trave",
  },
  {
    number: "03",
    title: "What should I pack for a long-term trip or backpacking adventure?",
    subTitle:
      "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates.",
  },
  {
    number: "04",
    title:
      "What are some strategies for overcoming jet lag when traveling across time zones?",
    subTitle:
      "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers.",
  },
  {
    number: "05",
    title: "What are the visa requirements for popular tourist destinations?",
    subTitle:
      "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates.",
  },
];

function Accordion() {
  const [openId, setId] = useState(null);

  return (
    <ul className="accordion">
      {faqList.map((faqItem, id) => {
        return (
          <>
              <AccordionItem
            faqItem={faqItem}
            key={id}
            isOpen={id === openId}
            onClick={() => (id === openId ? setId(null) : setId(id))}
          />
          <div className="horizontal-line"></div>
          </>
        
        );
      })}
    </ul>
  );
}

export default Accordion;
