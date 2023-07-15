import React, { useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';

const experiences = [
  { 
    title: "charika harbana", 
    description: ["Description 1"], 
    year: "jun 2023 - aug 2023",
    position: "Machine Learning Engineer Intern",
    company: "Yakeey"
  },
  { 
    title: "charika harbana", 
    description: ["Description 1"], 
    year: "jun 2022 - aug 2022",
    position: "Backend And AI Engineer Intern",
    company: "Pull4you services"
  },
  // Add more experiences here
];

const ExperiencePage = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const tabs = useRef([]);

  const focusTab = () => {
    if (tabs.current[activeTabId]) {
      tabs.current[activeTabId].focus();
    }
  };

  // Only re-run the effect if activeTabId changes
  React.useEffect(() => focusTab(), [activeTabId]);

  return (
    <Fade>
      <div className="container m-auto mt-25 -mb-20 sm:px-12 md:px-20 max-w-screen-xl px-15 py-10 flex flex-col lg:flex items-center lg:justify-center lg:space-x-6">
        <Fade right>
          <h1 className="font-mono" style={{color: 'var(--primary)'}}>
            {'<'} experience {'/>'}
          </h1>
        </Fade>
        <div className="flex space-x-8 mt-8 mb-8">
          <div className="flex flex-col space-y-2">
            {experiences.map((exp, index) => (
              <button 
                key={index} 
                className={`shadow-md rounded-2xl p-4 hover:shadow-xl transform hover:scale-105 transition duration-500 hover:content highlight ${index === activeTabId ? 'active' : ''}`} 
                onClick={() => setActiveTabId(index)}
                style={{
                  background: 'var(--card)', 
                  cursor: 'pointer', 
                  color: index === activeTabId ? 'var(--theme)' : 'var(--secondary)', 
                  transition: 'color 0.3s',
                }}
                ref={el => (tabs.current[index] = el)}
                id={`tab-${index}`}
                role="tab"
                aria-selected={activeTabId === index ? true : false}
                aria-controls={`panel-${index}`}
                tabIndex={activeTabId === index ? '0' : '-1'}
              >
                <h1 className="flex-auto text-lg font-bold">{exp.title}</h1>
              </button>
            ))}
          </div>
          <Fade right key={activeTabId}>
            <div className="shadow-md rounded-2xl p-4 hover:shadow-xl transform hover:scale-105 transition duration-500 hover:content highlight" style={{background: 'var(--card)', flex: '1', width: '600px', height: '400px', border: 'none'}}>
              <div className="flex-auto ml-3 justify-evenly py-2">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-xs font-medium grid justify-items-stretch">
                  <h2 className="flex justify-between text-year" style={{fontSize: '1.5em'}}>
                      {experiences[activeTabId].position} @{experiences[activeTabId].company}
                    </h2>

                    <span className="flex justify-between text-year" style={{marginTop: '1em'}}>
                      {experiences[activeTabId].year}
                    </span>
                  </div>
                  <p className="mt-3"></p>
                  <div className="flex py-4 flex-col text-sm" style={{color: 'var(--secondary)', marginTop: '1em'}}>
                    <div className="flex-1 inline-flex items-center">
                      <ul>
                        {experiences[activeTabId].description.map((desc) => (
                          <li>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  )
}

export default ExperiencePage;
