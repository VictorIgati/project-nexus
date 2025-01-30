// 1. Importing of dependencies
import { useEffect, useState } from 'react'; // Hook to run API calls and manage state
import axios from 'axios'; // Library to make HTTP requests
import { Link } from 'react-router-dom'; //component from react-router-dom for client-side navigation

// 2. Defining the Pets component
const Pets = () => {
  const [pets, setPets] = useState([]); // State to hold the list of pets initially set as an empty array

  // 3. useEffect to fetch the list of pets from the API when the component mounts

  useEffect(() => {
    axios.get('https://db-json-backend.onrender.com/pets') // Sends a GET request to fetch pet details based on ID
      .then(response => setPets(response.data)) // Updates state with the fetched data.
      .catch(error => console.error('Error fetching pets:', error)); // Logs an error if the request fails.
  }, []);

  // 4. Rendering the UI
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl mb-4">Available Pets</h2>   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pets.map(pet => (
          <div key={pet.id} className="border p-4 rounded shadow-md">
            <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover mb-2" />
            <h3 className="text-xl">{pet.name}</h3>
            <p>{pet.description}</p>

        <Link to={`/pets/${pet.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</Link>
      </div>
    ))}
  </div>
</div>
  );
};

export default Pets; 