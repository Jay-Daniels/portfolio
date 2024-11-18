import React, { useEffect, useState } from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import SkillsDisplay from './components/SkillsDisplay/SkillsDisplay';
import Header from './components/Header/Header';

const App = () => {
  const [sections, setSections] = useState<NodeListOf<Element>>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer für die Sektionen
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.30, // Trigger, wenn 30% der Sektion sichtbar ist
    });

    // Wende Observer auf die Sektionen an
    const sections = document.querySelectorAll('.section');
    setSections(sections);
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <Header sections={sections} />
      <div className="section profile-section"
           data-name="Profile"
           data-frontend-name="Profile"
           data-backend-names="controllers/ProfileController.java,services/ProfileService.java"
           data-test-names="controllers/ProfileControllerTest.java">
        <Profile />
      </div>
      <div className="section skills-section"
           data-name="Skills Display"
           data-frontend-name="SkillsDisplay"
           data-backend-names="controllers/SkillController.java,services/SkillService.java"
           data-test-names="controllers/SkillControllerTest.java">
        <SkillsDisplay />
      </div>
    </div>
  );
};

export default App;
