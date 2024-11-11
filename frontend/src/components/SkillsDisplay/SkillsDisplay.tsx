import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import './SkillsDisplay.css';

const SkillsDisplay = () => {
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [animateStars, setAnimateStars] = useState<boolean>(true); // Neuer State für die Animation

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/skills')
      .then((response) => {
        setSkills(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching skills:', error);
        setLoading(false);
      });
  }, []);

  const iconBasePath = '/components/skills-display/icons/';

  return (
    <div className="p-5 bg-gray-100 max-w-screen-md mx-auto">
      <h2 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-green-400 mb-5 pb-1 inline-block">
        .technical_skills{`{}`}
      </h2>

      {loading ? (
        <div className="text-center text-xl text-gray-600">Loading...</div>
      ) : (
        <>
          {/* Grid für die Skills */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={skill.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center space-y-4 relative">
                {/* Wrapper für das Icon */}
                <div className="relative group">
                  <img
                    src={`${iconBasePath}${skill.icon}`}
                    alt={skill.name}
                    className={`w-24 h-16 object-contain transition-transform
                      ${index % 2 === 0 ? 'group-hover:-translate-x-24' : 'group-hover:translate-x-24'}`}
                  />
                  {/* Text im Zentrum des Icons */}
                  <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                    <p className="text-lg font-semibold">{skill.name}</p>
                  </div>
                </div>

                {/* Anzeige der Sterne mit Animation */}
                <img
                  src={`${iconBasePath}stars/stars-${skill.proficiency}.png`}
                  alt={`Proficiency: ${skill.proficiency}`}
                  className={`w-28 ${animateStars ? 'star-animation' : ''}`} // Animation an/aus
                  style={{
                    '--random-delay': `${Math.random() * 2}s`, // Zufällige Verzögerung für subtile Variation
                  }}
                />
              </div>
            ))}
          </div>

          {/* Toggle Button für die Animation */}
          <div className="mt-5 text-right">
            <Button
              variant="text"
              size="small"
              color="inherit"
              onClick={() => setAnimateStars(!animateStars)}
              style={{
                textTransform: 'none',
                fontSize: '0.8rem',
                padding: '2px 8px',
                opacity: 0.7,
              }}
            >
              {animateStars ? 'Disable Animation' : 'Enable Animation'}
            </Button>
          </div>

        </>
      )}
    </div>
  );
};

export default SkillsDisplay;
