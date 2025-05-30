"use client";
import React, { useEffect, useRef, useState } from "react";
import "@/app/styles/tabs.scss";

export interface Tab {
  title: string;
  content: React.ReactNode;
  // Optional custom classes and styles for the tab button and content panel
  customTabButtonClassName?: string;
  customTabButtonStyle?: React.CSSProperties;
  customContentClassName?: string;
  customContentStyle?: React.CSSProperties;
}

interface TabsProps {
  tabs: Tab[];
  containerClassName?: string;
  headerClassName?: string;
  tabButtonClassName?: string;
  activeTabButtonClassName?: string;
  contentClassName?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  containerClassName = "",
  headerClassName = "",
  tabButtonClassName = "btn tab-title",
  activeTabButtonClassName = "active",
  contentClassName = "content-area transition-opacity duration-300",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Adjust content height so that all panels match the height of the tallest one.
useEffect(() => {
  const activeRef = contentRefs.current[activeIndex];
  if (activeRef) {
    const height = activeRef.offsetHeight;
    contentRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.height = `${height}px`;
      }
    });
  }
}, [tabs, activeIndex]);


  return (
    <div className={`tabs-container ${containerClassName}`}>
      {/* Tab Header */}
      <div className={headerClassName}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            id={`tab-${index}`}
            className={`tab-title ${tabButtonClassName} ${
              activeIndex === index ? activeTabButtonClassName : ""
            } ${tab.customTabButtonClassName || ""}`}
            style={{
              cursor: "pointer",
              padding: "1.5rem 1rem",
              ...tab.customTabButtonStyle,
            }}
            title={tab.title}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content Panels */}
      <div className="tabs-content relative font-proxima-light flex justify-center text-center">
        {tabs.map((tab, index) => (
          <div
            key={index}
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            className={`w-3/4 ${contentClassName} ${
              activeIndex === index
                ? "activate relative opacity-100"
                : "absolute opacity-0"
            } ${tab.customContentClassName || ""}`}
            style={tab.customContentStyle}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
