import { useEffect, useState } from'react';
import axios from 'axios';
import { useParams, Link } from'react-router-dom';

const PetDetail = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);

    useEffect(() => {
        axios.get(`https://db-json-backend.onrender.com/pets/${id}`)
           .then(response => setPet(response.data))
           .catch(error => console.error('Error fetching pet details:', error));
    }, [id]);

    if (!pet) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl mb-4">{pet.name}</h2>
                {/* Set a fixed height for the image container */}
                <div className="h-96 overflow-hidden mb-4">
                    <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
                </div>
                <p>{pet.description}</p>
                <div className="mt-4">
                    <Link to="/pets" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Back to Pets</Link>
                </div>
            </div>
        </div>
    );
};

export default PetDetail;