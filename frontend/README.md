# Frontend

This is the frontend for the portfolio project. It is a React-based web application developed with Tailwind CSS for styling and Vite for build management.

## Technologies

- **React** (Frontend Framework)
- **Vite** (Build Tool)
- **Tailwind CSS** (CSS Framework)

## Installation

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:

    Make sure you have `Node.js` and either `npm` or `yarn` installed. Then install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the development server**:

    To run the app locally, execute the following command:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will start the local development server and open the app in the browser. By default, the app will be accessible at `http://localhost:3000`.

## Project Structure

- `src/`: The main code of the application.
  - `components/`: Contains reusable components.
  - `assets/`: Static assets such as images and icons.
  - `styles/`: Tailwind CSS and custom CSS files.
- `public/`: Static files that are served directly, such as `index.html`.
- `tailwind.config.js`: Tailwind CSS configuration.

## Development

- **Tailwind CSS**: All styles are created using Tailwind CSS classes. You can modify the default Tailwind configuration in the `tailwind.config.js` file.
- **React Components**: The UI is divided into reusable React components located in the `src/components/` folder.

## Deployment

For deployment, you can upload the application to platforms like Vercel or Netlify. Simply create the production build with:

```bash
npm run build
# or
yarn build
