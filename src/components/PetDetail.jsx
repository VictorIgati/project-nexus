// 1. Importing dependencies
import { useEffect, useState } from 'react'; // Fetch data when the component updates
import axios from 'axios'; // Handle HTTP requests
import { useParams, Link } from 'react-router-dom'; // Extracts parameters from the URL (Used to get the pet's ID)

// 2. Extracting the pet's ID from the URL
const PetDetail = () => {
  const { id } = useParams(); // Uses useParams to get ID from the route.

  // 3. Fetching pet Data from the API
  const [pet, setPet] = useState(null); // State (pet): Starts as null and is updated with the fetched pet data.
  
  useEffect(() => {
axios.get(`https://db-json-backend.onrender.com/pets/${id}`) // Fetches pet data from the API
  .then(response => setPet(response.data)) // if succesful, updates state with the fetched data
  .catch(error => console.error('Error fetching pet details:', error)); // if an error occurs, logs an error
  }, [id]);

  // 4. Displaying a Loading message
  if (!pet) return <div>Loading...</div>; // // Shows a loading message until the pet data is fetched

  // 5. Rendering the pet details
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl mb-4">{pet.name}</h2>
      <img src={pet.image} alt={pet.name} className="w-full h-96 object-cover mb-4" />
      <p>{pet.description}</p>
      <div className="mt-4">
        <Link to="/pets" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Back to Pets</Link>
      </div>
    </div>
  );
};

export default PetDetail;