import { useState } from "react";
import Faq from "../pages/Faq";
import Features from "../pages/Features";
import Overview from "../pages/Overview";
import Pricing from "../pages/Pricing";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "Faq" },
  ];

  const handleTabClick = (e, tabId, index) => {
    setActiveTab(tabId);
    setTabIndex(index);
  };

  return (
    <div className="tabs-container">
      <div className="tab-panel">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`tab-btn ${tabIndex === index ? "active" : ""}`}
            onClick={(e) => handleTabClick(e, tab.id, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-underline"></div>
      <div className="tab-data">
        {activeTab === "overview" && (
          <div className="tab-data1">
            <Overview />
          </div>
        )}
        {activeTab === "features" && (
          <div className="tab-data1">
            <Features />
          </div>
        )}
        {activeTab === "pricing" && (
          <div className="tab-data1">
            <Pricing />
          </div>
        )}
        {activeTab === "faq" && (
          <div className="tab-data1">
            <Faq />
          </div>
        )}
      </div>
    </div>
  );
};
export default Tabs;
