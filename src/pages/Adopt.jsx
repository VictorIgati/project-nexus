import { useState } from 'react'; // Import the useState hook from React to manage component state
import AdoptForm from '../components/AdoptForm'; // Import the AdoptForm component from the specified path

// Define a functional component named Adopt
const Adopt = () => {
  // Initialize pets state as an empty array to store pet data
  const [pets, setPets] = useState([]);

  // Function to add a new pet to the pets state
  const addPet = (newPet) => {
    setPets([...pets, newPet]); // Add the new pet to the existing pets array
  };

  // Render the main content of the Adopt component
  return (
    <div className="container mx-auto p-8 relative overflow-hidden"> {/* Main container */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent"> {/* Gradient background for text */}
        <h2 className="text-4xl font-bold mb-8 text-white">Adopt a New Pet</h2> {/* Header text */}
        <span className="block text-xl text-gray-200 mt-2 border-b border-gray-200 pb-2">Find your perfect virtual companion</span> {/* Subheader text */}
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl backdrop-blur-sm border border-gray-100"> {/* Container for the form */}
        <AdoptForm addPet={addPet} /> {/* Render the AdoptForm component and pass the addPet function as a prop */}
      </div>
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none -z-20"> {/* Absolute positioned container for decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl"></div> {/* First decorative element */}
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-xl"></div> {/* Second decorative element */}
      </div>
    </div>
  );
};

// Export the Adopt component as the default export
export default Adopt;