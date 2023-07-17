import React, { useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';


const experiences = [
  // { 
  //   title: "Yakeey", 
  //   description: ["Description 1"], 
  //   skillsAcquired: ["Python", "Django", "Django Rest Framework", "RESTful API", "Pytest", "Docker", "Scrum", "PostgreSQL", "POSTMAN", "Git", "GitHub", "Postgis", "GoogleMaps API"],
  //   year: "jun 2023 - aug 2023",
  //   position: "Data Science Intern",
  //   company: "Yakeey"
  // },
  { 
    title: "KubicBits", 
    description: [
        "Developed on-demand transportation service, enhancing user experience by generating the route 400% times faster",
        "Constructed web app with Restful APIS for optimized route planning, decreasing travel time and saving fuel of each vehicle.",
        "Analyzed and optimized multi-vehicle path.",
        "Engineered algorithm for efficient vehicle paths.",
        "Incorporated traffic patterns and road conditions into algorithm.",
        "Integrated error detection system, reducing delays.",
        "Implemented optimization system into existing backend."
    ], 
    year: "28 June 2022 - 28 September 2022",
    position: "AI/Backend Developer Intern",
    company: "KubicBits",
    skillsAcquired: [
        "Python",
        "Django",
        "Django Rest Framework",
        "RESTful API",
        "Pytest",
        "Docker",
        "Scrum",
        "PostgreSQL",
        "POSTMAN",
        "Git",
        "GitHub",
        "Postgis",
        "GoogleMaps API"
    ]
  },
  // Add more experiences here
];

const ExperiencePage = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const tabs = useRef([]);

  // const focusTab = () => {
  //   if (tabs.current[activeTabId]) {
  //     tabs.current[activeTabId].focus();
  //   }
  // };

  // React.useEffect(() => focusTab(), [activeTabId]);

  return (
    <Fade>
      <div className="container m-auto mt-5 mb-5 sm:mt-10 sm:mb-10 md:mt-25 md:mb-20 px-2 sm:px-4 md:px-20 max-w-screen-xl py-5 flex flex-col items-center justify-center space-y-6 md:space-x-6">
      <Fade right><h1 className="font-mono" style={{color: 'var(--primary)'}}>{'<'} experience {' />'}</h1></Fade>
        <div className="flex flex-col md:flex-row space-y-2 md:space-x-8 mt-8 mb-8 max-w-lg md:max-w-full">
          <div className="flex flex-col space-y-2">
            {experiences.map((exp, index) => (
              <button 
                key={index} 
                className={`content highlight shadow-md rounded-2xl p-2 sm:p-4 hover:shadow-xl transform hover:scale-105 transition duration-500 ${index === activeTabId ? 'active' : ''}`} 
                onClick={() => setActiveTabId(index)}
                style={{
                  background: 'var(--card)', 
                  cursor: 'pointer', 
                  color: index === activeTabId ? 'var(--secondary)' : 'var(--theme)', 
                  transition: 'color 0.3s',
                }}
                ref={el => (tabs.current[index] = el)}
                id={`tab-${index}`}
                role="tab"
                aria-selected={activeTabId === index ? true : false}
                aria-controls={`panel-${index}`}
                tabIndex={activeTabId === index ? '0' : '-1'}
              >
                <h1 className="flex-auto text-lg font-bold ">{exp.title}</h1>
              </button>
            ))}
          </div>
          <Fade right key={activeTabId}>
            <div className="shadow-md rounded-2xl p-2 sm:p-4 hover:shadow-xl transform hover:scale-105 transition duration-500 hover:content highlight" style={{background: 'var(--card)', minHeight: '400px'}}>
              <div className="flex-auto ml-3 justify-evenly py-2">
                <div className="flex flex-wrap ">
                  <div className="content highlight w-full flex-none text-xs sm:text-sm font-medium grid justify-items-stretch">
                  <h2 className="content highlight flex justify-between text-year" style={{fontSize: '1.5em', lineHeight: '1.5em', color: 'var(--primary)'}} >
                      
                      {experiences[activeTabId].position} @{experiences[activeTabId].company}
                     
                    </h2>

                    <span className="flex justify-between text-year" style={{marginTop: '1em'}}>
                      {experiences[activeTabId].year}
                    </span>
                  </div>
                  <p className="mt-3"></p>
                  <div className="flex py-4 flex-col text-sm" style={{color: 'var(--secondary)', marginTop: '1em'}}>
                    <div className="flex-1 inline-flex items-center">
                    <ul className="list-decorated">
                      
                      {experiences[activeTabId].description.map((desc) => (
                        <li style={{fontSize: '1.2em'}}>{desc}</li>
                      ))}
                    
                    </ul>
                    </div>
                    <h3 style={{marginTop: '1em', color: 'var(--theme)'}}>Skills Acquired</h3>
                    <div className="flex-1 inline-flex items-center">
                      <p style={{fontSize: '1em'}}>
                        
                        {experiences[activeTabId].skillsAcquired.join(' · ')}
                          
                      </p>
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