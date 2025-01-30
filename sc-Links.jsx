import React, { useEffect } from 'react';
import './style.css';
import 'aos/dist/aos.css';
import AOS from "aos";

function Links() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: -100,
            easing: 'ease-in-out',
            once: false,
            mirror: true
        });
    }, []);

    const linksData = [
        {
            href: "https://github.com/YounesOuba?tab=overview&from=2024-12-01&to=2024-12-31",
            label: "Github",
            icon: "github",
            delay: 600,
        },
        {
            href: "https://www.linkedin.com/in/younes-ouba-4560292a9",
            label: "LinkedIn",
            icon: "linkedin",
            delay: 800,
        },
        {
            href: "https://www.instagram.com/younes__ouba/",
            label: "Instagram",
            icon: "instagram-alt",
            delay: 1000,
        },
        {
            href: "https://t.me/YounesOuba",
            label: "Telegram",
            icon: "telegram",
            delay: 1200,
        },
    ];

    return (
        <div className="sc-Links w-full flex flex-wrap gap-8 justify-center mt-10 px-4">
            {linksData.map((link, index) => (
                <a
                    key={index}
                    className="relative bg-transparent block p-8 border border-gray-100 rounded-xl mt-6 shadow-lg hover:shadow-xl transition duration-300"
                    href={link.href}
                    target="_blank" // Opens the link in a new tab      /////Remember this 
                    rel="noopener noreferrer" // Add security protection
                    data-aos="zoom-in-down"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                    data-aos-delay={link.delay}
                    style={{ width: '20%' }}
                >
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600 rounded-b-2xl opacity-60"></span>
                    <div className="divLiks my-4 flex flex-col items-center">
                        {/* Icon with rounded background */}
                        <div className="bg-slate-600/30 p-4 rounded-full mb-4">
                            <box-icon type='logo' name={link.icon} color="white" size="lg"></box-icon>
                        </div>
                        <h2 className="text-white text-2xl font-bold text-center">
                            {link.label}
                        </h2>
                    </div>
                    <div className="flex justify-center">
                        <button className="px-4 py-2 text-white font-semibold border border-gray-200 rounded hover:bg-gray-800 hover:scale-105 transition duration-300">
                            Click Me
                        </button>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default Links;
