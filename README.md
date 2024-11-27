# Portfolio Project

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Testing](#testing)
  - [Backend Testing](#backend-testing)
  - [Frontend Testing](#frontend-testing)
- [Components](#components)
  - [Header Component](#header-component)
  - [Profile Component](#profile-component)
  - [Skills Component](#skills-component)
- [License](#license)

## Description

This portfolio website is designed to showcase my skills and projects, offering an interactive and engaging way to present my work. It's not only a reflection of my experience but also a platform where potential employers can easily explore the technologies I have worked with. I enjoy building such projects as they give me the opportunity to apply my knowledge in a creative, real-world context.

## Features

- **Reusable Components:** The website is built around reusable components, making it modular and easy to maintain. Each component can be reused throughout the site for consistent design and functionality.
- **Code Insights:** The title bar reveals a button linking directly to the source code for each component on GitHub, allowing visitors to easily explore the underlying code.
- **Components:**
    - **Header Component:** A information header that dynamically generates GitHub links for frontend, backend, and test files, including a dropdown menu for easy access. [Read more](#header-component)
    - **Profile Component:** First point of contact, offers a profile picture, headline and quick introductory text. [Read more](#profile-component)
    - **Skills Component:** Displays the technologies I have acquired, with their proficiency levels visible. These proficiency levels are based on my self-assessment. The icons for these technologies slide to the side on hover to reveal the corresponding name of the technology. [Read more](#skills-component)

## Tech Stack

- **Backend:** Spring Boot, Java
- **Frontend:** React, Tailwind CSS
- **Database:** PostgreSQL
- **Version Control:** Git, GitHub
- **Build Tool:** Maven
- **Styling:** Tailwind CSS
- **Documentation:** Swagger

## Installation

### Backend Setup:

- Clone the repository:

    ```bash
    git clone git@github.com:jay-daniels/portfolio.git
    ```

- Navigate to the project directory:

    ```bash
    cd portfolio
    ```

- Set up the backend environment (Make sure you have Java 17+ installed):

    ```bash
    mvn spring-boot:run
    ```
    
- Build and run (Make sure you have Java 17+ installed):

    ```bash
    mvn clean install spring-boot:run
    ```

### Frontend Setup:

- Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

- Install dependencies:

    ```bash
    npm install
    ```

- Start the development server:

    ```bash
    npm run dev
    ```

## Testing

### Backend Testing:

- **JUnit:** Unit tests for the backend are written with JUnit. You can run the tests using Maven:

    ```bash
    mvn test
    ```

### Frontend Testing:

- **Jest:** Unit tests for the frontend are written with Jest. You can run the tests using:

    ```bash
    npm test
    ```

## Components

### Header Component

The `Header` component is a information header used in the portfolio website. It displays the current active section of the page and dynamically generates GitHub links for frontend, backend, and unit test files based on the active section's attributes. It also includes a dropdown menu to display these links, which can be toggled by the user.

#### Key Features:
- Displays current section / component name based on section attributes.
- Generates GitHub links for frontend, backend, and tests dynamically.
- Dropdown menu for GitHub links.

### Profile Component

The `Profile` component features a profile picture, an animated heading with a typewriter effect, and a text bubble for introductory text. This component introduces the user in a visually engaging way, where the typewriter animation adds a dynamic touch to the profile header, and the text bubble provides space for a brief description or introduction.

#### Key Features:
- Displays Profile picture.
- Animated headline with a type-writer effect that can be adjusted.
- Offers space in a description text-bubble.

### Skills Component

The `Skills` component showcases the technologies I have learned, with proficiency levels displayed through icons. Hovering over each icon reveals the name of the technology.

#### Key Features:
- Displays technologies with proficiency levels.
- Hovering over icons reveals the name of the technology.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
