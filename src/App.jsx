// Import the React library, which is essential for building React components.
import React from 'react';
// Import necessary components from react-router-dom for handling routing.
// BrowserRouter: Provides the routing functionality.
// Routes: Groups individual Route components.
// Route: Defines a specific route with a path and associated component.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import custom components used in the application's layout.
import Navbar from './components/Navbar'; // Navigation bar component
import Footer from './components/Footer'; // Footer component

// Import page components that represent different sections of the application.
import Home from './pages/Home'; // Home page component
import Pets from './pages/Pets'; // Pets listing page component
import Adopt from './pages/Adopt'; // Adopt a pet page component
// Import a component for displaying a single pet's details.
import PetDetail from './components/PetDetail';

// Import the main stylesheet for the application.
import './App.css';

// Define the main App component as a functional component.
const App = () => {
  // The component's structure is returned within the JSX syntax.
  return (
    // BrowserRouter sets up the application to use routing.
    <Router>
      {/* Container div with flexbox classes for layout.
          min-h-screen: Ensures the container takes at least the full screen height.
          flex: Enables flexbox layout.
          flex-col: Arranges flex items in a column.
      */}
      <div className="min-h-screen flex flex-col">
        {/* Render the navigation bar component at the top. */}
        <Navbar />
        {/* Main content area, which will grow to take up available space. */}
        <main className="flex-grow">
          {/* Routes component contains all individual routes. */}
          <Routes>
            {/* Define the route for the home page, accessible at the root path ("/").
                The Home component will be rendered when the user navigates to this route. */}
            <Route path="/" element={<Home />} />
            {/* Define the route for the pets listing page, accessible at "/pets".
                The Pets component will be rendered when the user navigates to this route. */}
            <Route path="/pets" element={<Pets />} />
            {/* Define the route for the adopt page, accessible at "/adopt".
                The Adopt component will be rendered when the user navigates to this route. */}
            <Route path="/adopt" element={<Adopt />} />
             {/* Define the route for displaying a single pet's details, accessible at "/pets/:id".
                 :id is a URL parameter, allowing the PetDetail component to receive a specific ID for a pet.
                 The PetDetail component will be rendered when the user navigates to this route.
             */}
            <Route path="/pets/:id" element={<PetDetail />} />
          </Routes>
        </main>
        {/* Render the footer component at the bottom. */}
        <Footer />
      </div>
    </Router>
  );
};

// Export the App component, making it available for use in other parts of the application.
export default App;