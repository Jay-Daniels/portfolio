
# Portfolio Project

## Description

This portfolio website is designed to showcase my skills and projects, offering an interactive and engaging way to present my work. It's not only a reflection of my experience but also a platform where potential employers can easily explore the technologies I have worked with. I enjoy building such projects as they give me the opportunity to apply my knowledge in a creative, real-world context.

## Features

- **Reusable Components:** The website is built around reusable components, making it modular and easy to maintain. Each component can be reused throughout the site for consistent design and functionality.
- **Code Insights:** On hover, each component reveals a button linking directly to its source code on GitHub, allowing employers to easily explore the underlying code.
- **Components:**
    - **Skills Component:** Displays the technologies I have acquired, with their proficiency levels visible. These proficiency levels are based on my self-assessment. The icons for these technologies slide to the side on hover to reveal the corresponding name of the technology.

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
    npm start
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

## License

This project is licensed under the MIT License - see the LICENSE file for details.
