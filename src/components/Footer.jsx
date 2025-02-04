// src/components/Footer.jsx
import  "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-indigo-600 text-white pt-8 md:pt-0">
            <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-24 p-8 md:px-32 px-5">
                <div className="w-full md:w-1/4 space-y-4">
                    <span className="text-2xl font-bold">PROJECT NEXUS</span>
                </div>
                <div>
                    <h1 className="font-medium text-2xl pb-4 pt-5 md:pt-0"></h1>
                    <div className="space-y-5">
                        <h3>Overview</h3>
                        <h3>Workers</h3>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium text-2xl pb-4 pt-5 md:pt-0">Resources</h1>
                    <div className="space-y-5">
                        <h3>Blog</h3>
                        <h3>FAQ</h3>
                        <h3>Services</h3>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium text-2xl pb-4 pt-5 md:pt-0">Social</h1>
                    <div className="space-y-3">
                        <FaFacebook size={32} />
                        <FaInstagram size={32} />
                        <FaSquareXTwitter size={32} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;