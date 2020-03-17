import React from "react";
import FAQCard from "../components/FAQCard";
import Sidebar from "../components/sidebar";
import "./faq.css";

const FAQ = () => {
  return (
    <div className="row">
      <Sidebar />
      <FAQCard />
    </div>
  );
};

export default FAQ;
