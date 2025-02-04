import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Pets = () => {
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://db-json-backend.onrender.com/pets')
           .then(response => setPets(response.data))
           .catch(error => console.error('Error fetching pets:', error));
    }, []);

    const handleAdopt = (pet) => {
        navigate('/adopt', { state: { petToAdopt: pet } });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl mb-4">Available Pets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pets.map(pet => (
                    <div key={pet.id} className="border p-4 rounded shadow-md bg-white hover:shadow-2xl transition-all duration-300">
                        {/* Set a fixed height for the image container */}
                        <div className="h-48 overflow-hidden mb-2">
                            <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl">{pet.name}</h3>
                        <p>{pet.description}</p>
                        <Link to={`/pets/${pet.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</Link>
                        <button
                            onClick={() => handleAdopt(pet)}
                            className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2"
                        >
                            Adopt
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pets;