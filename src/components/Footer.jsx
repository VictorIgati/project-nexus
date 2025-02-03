// Import the React library, which is essential for building React components.
import React from "react";

// Import social media icons from the react-icons library.
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Importing Facebook and Instagram icons
import { FaSquareXTwitter } from "react-icons/fa6"; // Importing the X (formerly Twitter) icon


// Define the Footer component as a functional component.
const Footer = () => {
  // The component's structure is returned within the JSX syntax.
  return (
    // Footer element with Tailwind CSS classes for styling.
    // bg-cyan-500: Sets the background color to cyan-500.
    // text-white: Sets the text color to white.
    // pt-8 md:pt-0: Adds padding to the top, but removes it on medium screens and above.
    <footer className="bg-cyan-500 text-white pt-8 md:pt-0">
      {/* Container div using flexbox for layout.
          flex flex-col md:flex-row: Sets up a column layout on small screens, and a row layout on medium screens and above.
          justify-center: Centers the items horizontally.
          gap-5 md:gap-24: Adds spacing between items, with different spacing on small and medium screens.
          p-8 md:px-32 px-5: Adds padding on all sides with some variance on medium screen.
      */}
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-24 p-8 md:px-32 px-5">
        {/* First column: Project name */}
        <div className="w-full md:w-1/4 space-y-4">
          {/* Project name styled with font and size classes. */}
          <span className="text-2xl font-bold">PROJECT NEXUS</span>
        </div>
        {/* Second column: Overview links */}
        <div>
          {/* Heading for the overview section */}
          <h1 className="font-medium text-2xl pb-4 pt-5 md:pt-0"></h1>
            {/* Container for overview links, with vertical spacing. */}
          <div className="space-y-5">
            {/* Individual overview links. */}
            <h3>Overview</h3>
            <h3>Workers</h3>
          </div>
        </div>

        {/* Third column: Resources links */}
        <div>
          {/* Heading for the resources section. */}
          <h1 className="font-medium text-2xl pb-4 pt-5 md:pt-0">Resources</h1>
          {/* Container for resource links, with vertical spacing. */}
          <div className="space-y-5">
            {/* Individual resource links */}
            <h3>Blog</h3>
            <h3>FAQ</h3>
            <h3>Services</h3>
          </div>
        </div>

        {/* Fourth column: Social media icons */}
        <div>
          {/* Heading for the social media section. */}
          <h1 className="font-medium text-2xl pb-4 pt-5 md:pt-0">Social</h1>
          {/* Container for social media icons, with vertical spacing. */}
          <div className="space-y-3">
            {/* Social media icons, each with a size of 32px. */}
            <FaFacebook size={32} />
            <FaInstagram size={32} />
            <FaSquareXTwitter size={32} />
          </div>
        </div>
      </div>
    </footer>
  );
};

// Export the Footer component, making it available for use in other parts of the application.
export default Footer;