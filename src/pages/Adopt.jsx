// src/pages/Adopt.jsx
import { useState, useEffect } from 'react';
import AdoptForm from '../components/AdoptForm';
import { useLocation } from 'react-router-dom';

const Adopt = () => {
    const [pets, setPets] = useState([]);
    const location = useLocation();
    const preSelectedPet = location.state?.petToAdopt;

    useEffect(() => {
        // Example: Fetch pets data from API when the component mounts
        fetch('/api/pets')
            .then(response => response.json())
            .then(data => setPets(data));
    }, []); // Empty array means the effect runs once on component mount

    const addPet = (newPet) => {
        setPets([...pets, newPet]);
    };

    return (
        <div className="container mx-auto p-8 relative overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                <h2 className="text-4xl font-bold mb-8 text-white">Adopt a New Pet</h2>
                <span className="block text-xl text-gray-200 mt-2 border-b border-gray-200 pb-2">Find your perfect virtual companion</span>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl backdrop-blur-sm border border-gray-100">
                <AdoptForm addPet={addPet} preSelectedPet={preSelectedPet} />
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none -z-20">
                <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-xl"></div>
            </div>
            {pets.length > 0 && (
                <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-accent mb-6 text-center">Your Adopted Pets</h2>
                    <ul>
                        {pets.map((pet, index) => (
                            <li key={index} className="mb-2">{pet.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Adopt;