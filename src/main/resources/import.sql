-- Sample Data with path to icons and timestamps
INSERT INTO skills (name, proficiency, icon, created_at, updated_at, is_frontend) VALUES ('Java', 4, 'java-icon.png', CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0), false);
INSERT INTO skills (name, proficiency, icon, created_at, updated_at, is_frontend) VALUES ('React', 3, 'react-icon.png', CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0), true);
INSERT INTO skills (name, proficiency, icon, created_at, updated_at, is_frontend) VALUES ('Sightly', 4, 'sightly-icon.png', CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0), true);
INSERT INTO skills (name, proficiency, icon, created_at, updated_at, is_frontend) VALUES ('Tailwind CSS', 3, 'tailwind-icon.png', CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0), true);
INSERT INTO skills (name, proficiency, icon, created_at, updated_at, is_frontend) VALUES ('PostgreSQL', 3, 'postgresql-icon.png', CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0), false);
INSERT INTO skills (name, proficiency, icon, created_at, updated_at, is_frontend) VALUES ('GraphQL', 3, 'graphql-icon.png', CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0), false);
INSERT INTO skills (name, proficiency, icon, created_at, updated_at, is_frontend) VALUES ('Jenkins', 2, 'jenkins-icon.png', CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0), false);
INSERT INTO skills (name, proficiency, icon, created_at, updated_at, is_frontend) VALUES ('Maven', 4, 'maven-icon.png', CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0), false);
INSERT INTO skills (name, proficiency, icon, created_at, updated_at, is_frontend) VALUES ('Spring Boot', 3, 'springboot-icon.png', CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0), false);
INSERT INTO skills (name, proficiency, icon, created_at, updated_at, is_frontend) VALUES ('Adobe Experience Manager', 4, 'aem-icon.png', CURRENT_TIMESTAMP(0), CURRENT_TIMESTAMP(0), false);

INSERT INTO profile (name, description, picture) VALUES ('Jay Daniels', 'Greetings and welcome to my portfolio! I created this web-app as a fun and interactive way to showcase my skills as a developer. Each section represents a different component, all of which were built from scratch by me. You can freely explore the source code for every component, with a direct link provided for each, allowing you to see how everything works behind the scenes. Feel free to explore and enjoy this hands-on experience of my work!', '/components/profile/profile.png');