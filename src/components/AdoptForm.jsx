import { useState } from 'react'; // Import the useState hook from React to manage component state
import axios from 'axios'; // Import axios for making HTTP requests
import PropTypes from 'prop-types'; // Import PropTypes for type checking props

// Define a functional component named AdoptForm that takes in a prop called addPet
const AdoptForm = ({ addPet }) => {
  // Initialize formData state with a name field set to an empty string
  const [formData, setFormData] = useState({
    name: ''
  });

  // Initialize fetchedPetData state to store pet data fetched from the API
  const [fetchedPetData, setFetchedPetData] = useState(null);

  // Initialize loading state to track if data is being fetched
  const [loading, setLoading] = useState(false);

  // Initialize error state to store any errors that occur during fetching
  const [error, setError] = useState('');

  // Handle changes to form input fields and update formData state accordingly
  const handleChange = (e) => {
    const { name, value } = e.target; // Get the name and value of the changed input
    setFormData({
      ...formData, // Spread the existing formData
      [name]: value // Update the specific field with the new value
    });
  };

  // Fetch pet data based on the name entered in the form
  const fetchPetData = async () => {
    try {
      setLoading(true); // Set loading state to true to indicate data is being fetched
      setError(''); // Clear any previous errors
      // Assuming you have an endpoint to fetch pet data by name
      const response = await axios.get(`https://db-json-backend.onrender.com/pets?name=${encodeURIComponent(formData.name)}`);
      if (response.data.length > 0) {
        setFetchedPetData(response.data[0]); // If pet data is found, store it in fetchedPetData state
      } else {
        setFetchedPetData(null); // If no pet data is found, clear fetchedPetData
        setError('Pet not found. Please enter a valid name.'); // Set an error message
      }
    } catch (err) {
      console.error('Error fetching pet data:', err); // Log any errors to the console
      setError('Error fetching pet data. Please try again later.'); // Set an error message for the user
    } finally {
      setLoading(false); // Set loading state back to false after the fetch operation completes
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Fetch pet data when the form is submitted
    await fetchPetData();
  };

  // Render the form component
  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-accent mb-6 text-center">Adopt a New Pet</h2> {/* Form header */}
      <div className="mb-6"> {/* Input container */}
        <label htmlFor="name" className="block text-textDark font-medium mb-2">Name</label> {/* Label for name input */}
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
          required
        /> {/* Name input field */}
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message if there is one */}
      {fetchedPetData && (
        <div className="mb-6">
          <h3 className="text-2xl font-medium mb-2">Fetched Pet Data</h3> {/* Header for fetched pet data */}
          <p><strong>Name:</strong> {fetchedPetData.name}</p> {/* Display the name of the fetched pet */}
          {/* Add more fields as needed */}
        </div>
      )}
      <button
        type="submit"
        className="bg-green-500 text-textLight py-2 px-4 rounded-full hover:bg-blue-500"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch Pet'} {/* Button to submit the form, display "Loading..." if fetching data */}
      </button>
    </form>
  );
};

// Define prop types for the AdoptForm component
AdoptForm.propTypes = {
  addPet: PropTypes.func.isRequired // Ensure addPet is a function and is required
};

// Export the AdoptForm component as the default export
export default AdoptForm;