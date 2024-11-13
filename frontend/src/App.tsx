import React, { useEffect, useState } from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import SkillsDisplay from './components/SkillsDisplay/SkillsDisplay';

const App = () => {
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
      threshold: 0.30, // Trigger, wenn 25% der Sektion sichtbar sind
    });

    // Wenden Sie den Observer auf die Sektionen an
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <div className="section profile-section">
        <Profile />
      </div>
      <div className="section skills-section">
        <SkillsDisplay />
      </div>
    </div>
  );
};

export default App;
