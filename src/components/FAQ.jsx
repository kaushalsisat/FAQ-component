import { useState, useEffect } from "react";
 

const FAQ = () => {
  const [faqs, setFaqs] = useState([]); // State to store FAQs
  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  // Fetch data from the JSON file
  useEffect(() => {
    fetch("/faqs.json") // Path of faqs file
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Toggle answer visibility
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={faq.Id} className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(index)}>
            <span>{faq.question}</span>
            <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
