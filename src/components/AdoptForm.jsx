// src/components/AdoptForm.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AdoptForm = ({ addPet, preSelectedPet }) => {
    const [formData, setFormData] = useState({
        name: ''
    });
    const [fetchedPetData, setFetchedPetData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (preSelectedPet) {
            setFetchedPetData(preSelectedPet);
        }
    }, [preSelectedPet]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const fetchPetData = async () => {
        try {
            setLoading(true);
            setError('');
            const response = await axios.get(`https://db-json-backend.onrender.com/pets?name=${encodeURIComponent(formData.name)}`);
            if (response.data.length > 0) {
                setFetchedPetData(response.data[0]);
            } else {
                setFetchedPetData(null);
                setError('Pet not found. Please enter a valid name.');
            }
        } catch (err) {
            console.error('Error fetching pet data:', err);
            setError('Error fetching pet data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchPetData();
    };

    const handleAdopt = () => {
        if (fetchedPetData) {
            addPet(fetchedPetData);
            setFetchedPetData(null);
            setFormData({ name: '' });
            setError('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-accent mb-6 text-center">Adopt a New Pet</h2>
            <div className="mb-6">
                <label htmlFor="name" className="block text-textDark font-medium mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
                    required
                />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {fetchedPetData && (
                <div className="mb-6">
                    <h3 className="text-2xl font-medium mb-2">Fetched Pet Data</h3>
                    <p><strong>Name:</strong> {fetchedPetData.name}</p>
                    <button
                        type="button"
                        className="bg-green-500 text-textLight py-2 px-4 rounded-full hover:bg-blue-500 mt-4"
                        onClick={handleAdopt}
                    >
                        Adopt this Pet
                    </button>
                </div>
            )}
            <button
                type="submit"
                className="bg-green-500 text-textLight py-2 px-4 rounded-full hover:bg-blue-500"
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Fetch Pet'}
            </button>
        </form>
    );
};

AdoptForm.propTypes = {
    addPet: PropTypes.func.isRequired,
    preSelectedPet: PropTypes.object
};

export default AdoptForm;