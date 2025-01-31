// Import the Link component from react-router-dom, which is used for navigation.
import { Link } from 'react-router-dom';

// Define the Navbar component as a functional component.
const Navbar = () => {
  // The component's structure is returned within the JSX syntax.
  return (
    // Navigation bar element using semantic HTML5 <nav> tag.
    // Styling is applied using Tailwind CSS classes.
    // bg-blue-500: Sets the background color to blue-500.
    // p-4: Adds padding of 4 units on all sides.
    <nav className="bg-blue-500 p-4">
        {/* Container div that centers the content horizontally.
           container: Sets the container to adapt to different screen sizes with a maximum width.
           mx-auto: Centers the container horizontally within its parent.
           flex: Enables flexbox layout.
           justify-between: Distributes space between items, aligning the first item to the left and the last to the right.
           items-center: Vertically aligns items in the center of the flex container.
        */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Heading/logo for the navbar.
            text-white: Sets the text color to white.
            text-2xl: Sets the font size to 2xl.
        */}
        <h1 className="text-white text-2xl">Nexus</h1>
        {/* Unordered list for navigation links.
            flex: Enables flexbox layout.
            space-x-4: Adds horizontal spacing between the list items.
        */}
        <ul className="flex space-x-4">
            {/* List item containing a navigation link. */}
          <li>
            {/* Link component from react-router-dom for client-side navigation.
                to="/": Specifies the destination path for the link, in this case the home page.
                text-white: Sets the text color to white.
                hover:text-blue-300: Sets the text color to blue-300 on hover.
            */}
            <Link to="/" className="text-white hover:text-blue-300">Home</Link>
          </li>
            {/* List item containing a navigation link. */}
          <li>
            {/* Link component for the pets page. */}
            <Link to="/pets" className="text-white hover:text-blue-300">Pets</Link>
          </li>
            {/* List item containing a navigation link. */}
          <li>
            {/* Link component for the adopt page. */}
            <Link to="/adopt" className="text-white hover:text-blue-300">Adopt</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Export the Navbar component, making it available for use in other parts of the application.
export default Navbar;