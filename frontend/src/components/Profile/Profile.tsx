import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [displayText, setDisplayText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [textIndex, setTextIndex] = useState<number>(0);
  const [alternator, setAlternator] = useState<boolean>(true);

  const typingSpeed = 120; // Geschwindigkeit des Tippens
  const deletingSpeed = 50; // Geschwindigkeit des Löschens
  const pauseBeforeDelete = 3000; // Pause nach dem Tippen, bevor gelöscht wird
  const pauseBetweenTexts = 1000; // Pause zwischen den Texten

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/profile')
      .then((response) => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    const texts = profile ? [profile.name, 'Developer'] : [''];

    const handleTypingEffect = () => {
      const currentText = texts[alternator ? 0 : 1];

      if (isTyping && textIndex < currentText.length) {
        setDisplayText((prev) => prev + currentText.charAt(textIndex));
        setTextIndex((prev) => prev + 1);
      } else if (isDeleting && textIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setTextIndex((prev) => prev - 1);
      } else if (isTyping && textIndex === currentText.length) {
        setIsTyping(false);
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      } else if (isDeleting && textIndex === 0) {
        setIsDeleting(false);
        setAlternator(!alternator);
        setTextIndex(0);
        setDisplayText('');
        setIsTyping(true);
      }
    };

    typingInterval = setInterval(handleTypingEffect, isTyping ? typingSpeed : deletingSpeed);

    return () => clearInterval(typingInterval);
  }, [profile, textIndex, isTyping, isDeleting, alternator]);

  return (
    <div className="profile-container lg:min-h-[1080px] min-h-screen flex items-center justify-center p-4 pt-36 lg:pt-0">
      {loading ? (
        <div className="text-gray-600">Loading...</div>
      ) : (
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 space-y-8 lg:space-y-0">
          {/* Bild Sektion */}
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden">
            <img src={profile.picture} alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Text Sektion */}
          <div className="text-center lg:text-left max-w-full lg:max-w-3xl">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-green-400 mb-4">
              Hi, I'm
              <br />
              <span className="text-wrapper">
                <span className="profile-name">{displayText}</span>
              </span>
              <span className="cursor"></span>
            </h2>

            {/* Description Box */}
            <div className="profile-description p-4 md:p-6 rounded-3xl shadow-md max-w-full md:max-w-2xl mx-auto lg:mx-0 text-center">
              <p className="text-base sm:text-lg md:text-xl text-gray-700">{profile.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
