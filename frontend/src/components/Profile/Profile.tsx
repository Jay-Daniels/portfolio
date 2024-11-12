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

      // Wenn wir tippen
      if (isTyping && textIndex < currentText.length) {
        setDisplayText((prev) => prev + currentText.charAt(textIndex));
        setTextIndex((prev) => prev + 1);
      }
      // Wenn wir löschen
      else if (isDeleting && textIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setTextIndex((prev) => prev - 1);
      }
      // Wenn der Text vollständig getippt wurde
      else if (isTyping && textIndex === currentText.length) {
        setIsTyping(false);
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete); // Pause nach dem Tippen, bevor wir löschen
      }
      // Wenn der Text vollständig gelöscht wurde
      else if (isDeleting && textIndex === 0) {
        setIsDeleting(false);
        setAlternator(!alternator); // Wechsel zum nächsten Text
        setTextIndex(0); // Text-Index zurücksetzen
        setDisplayText(''); // Text zurücksetzen
        setIsTyping(true); // Typen neu starten
      }
    };

    // Verwende konstanten Timeout für das Tippen und Löschen
    typingInterval = setInterval(handleTypingEffect, isTyping ? typingSpeed : deletingSpeed);

    return () => clearInterval(typingInterval);
  }, [profile, textIndex, isTyping, isDeleting, alternator]);

  return (
    <div className="profile-container min-h-screen flex items-center justify-center">
      {loading ? (
        <div className="text-gray-600">Loading...</div>
      ) : (
        <div className="flex justify-center items-center space-x-8">
          {/* Bild Sektion */}
          <div className="w-80 h-80 rounded-full overflow-hidden">
            <img src={profile.picture} alt="Profile" />
          </div>

          {/* Text Sektion */}
          <div className="max-w-3xl">
              <h2 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-500 to-green-400 mb-4">
                Hi, I'm
                <br />
                <span className="text-wrapper">
                  <span className="profile-name">{displayText}</span>
                </span>
                <span className="cursor"></span>
              </h2>

            {/* Description Box mit beschränkter Breite */}
            <div className="profile-description p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700">{profile.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
