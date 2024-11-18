import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

interface HeaderProps {
  sections: NodeListOf<Element>;
}

const Header: React.FC<HeaderProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<Element | null>(
    sections[0] || null // Initialisiere mit der ersten Sektion, falls vorhanden
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll-Ereignis, um die aktuelle aktive Sektion zu bestimmen
  const handleScroll = () => {
    let currentSection: Element | null = null;
    const offset = 300; // Offset-Wert in Pixeln, um die Sektion früher zu erkennen

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        currentSection = section;
      }
    });

    setActiveSection(currentSection || sections[0]);
  };

  useEffect(() => {
    // Beim Laden des Fensters die erste Sektion standardmäßig auswählen
    if (!activeSection && sections.length > 0) {
      setActiveSection(sections[0]);
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [sections]);

  // Funktion, um das Dropdown zu schließen, wenn außerhalb geklickt wird
  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  // GitHub-Links dynamisch generieren basierend auf der aktiven Sektion
  const generateGitHubLinks = (section: Element) => {
    const frontendName = section.getAttribute('data-frontend-name');
    const backendNames = section.getAttribute('data-backend-names')?.split(',') || [];
    const testNames = section.getAttribute('data-test-names')?.split(',') || [];

    const frontendLink = frontendName
      ? `https://github.com/jay-daniels/portfolio/blob/main/frontend/src/components/${frontendName}/${frontendName}.tsx`
      : null;

    const backendLinks = backendNames.map((name) => {
      const baseName = name.trim();
      const fileName = baseName.split('/').pop(); // Nur den Klassennamen extrahieren
      return {
        link: `https://github.com/jay-daniels/portfolio/blob/main/src/main/java/com/jaydaniels/portfolio/${baseName}`,
        name: fileName,
      };
    });

    const testLinks = testNames.map((testPath) => {
      const trimmedPath = testPath.trim();
      const testFileName = trimmedPath.split('/').pop(); // Extrahiert den Dateinamen
      return {
        link: `https://github.com/jay-daniels/portfolio/blob/main/src/test/java/com/jaydaniels/portfolio/${trimmedPath}`,
        name: testFileName,
      };
    });

    return { frontendLink, backendLinks, testLinks };
  };

  return (
    <header className="fixed top-0 w-full bg-black bg-opacity-50 text-white z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="section-name">
          <h2>{activeSection?.getAttribute('data-name')} Component</h2>
        </div>
        <div className="flex items-center space-x-4">
          {/* Link zum Repository */}
          <a
            href="https://github.com/jay-daniels/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:bg-purple-900 p-2 rounded"
          >
            Portfolio Repository
          </a>
          <div className="relative" ref={menuRef}>
            <button
              className="menu-toggle text-white hover:bg-purple-900 p-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              GitHub Links
            </button>
            {isMenuOpen && activeSection && (
              <div className="menu-dropdown absolute top-full right-0 bg-gray-900 bg-opacity-90 p-4 rounded shadow-lg">
                {(() => {
                  const { frontendLink, backendLinks, testLinks } = generateGitHubLinks(activeSection);

                  return (
                    <div>
                      {frontendLink && (
                        <>
                          <h3 className="font-bold text-lg">Frontend</h3>
                          <a
                            href={frontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-white hover:bg-purple-900 p-2 rounded"
                          >
                            {activeSection.getAttribute('data-frontend-name')}.tsx
                          </a>
                        </>
                      )}

                      {backendLinks.length > 0 && (
                        <>
                          <h3 className="font-bold text-lg mt-4">Backend</h3>
                          {backendLinks.map(({ link, name }, idx) => (
                            <a
                              key={idx}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-white hover:bg-purple-900 p-2 rounded"
                            >
                              {name}
                            </a>
                          ))}
                        </>
                      )}

                      {testLinks.length > 0 && (
                        <>
                          <h3 className="font-bold text-lg mt-4">Unit Tests</h3>
                          {testLinks.map(({ link, name }, idx) => (
                            <a
                              key={idx}
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-white hover:bg-purple-900 p-2 rounded"
                            >
                              {name}
                            </a>
                          ))}
                        </>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
