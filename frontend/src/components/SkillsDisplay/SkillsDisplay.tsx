import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SkillsDisplay = () => {
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
      <h2 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 mb-5 pb-1">
        .skills{`{}`}
      </h2>

      {loading ? (
        <div className="text-center text-xl text-gray-600">Loading...</div>
      ) : (
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

              <p className="text-xl text-gray-700">Proficiency: {skill.proficiency}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsDisplay;
