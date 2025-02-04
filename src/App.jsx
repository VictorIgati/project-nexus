import  'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pets from './pages/Pets';
import Adopt from './pages/Adopt';
import PetDetail from './components/PetDetail';
import './App.css';

// NotFound component to handle 404 errors
const NotFound = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
            <p className="text-lg">The page you are looking for does not  exist.</p>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pets" element={<Pets />} />
                        <Route path="/adopt" element={<Adopt />} />
                        <Route path="/pets/:id" element={<PetDetail />} />
                        {/* Catch - all route for 404 errors */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;