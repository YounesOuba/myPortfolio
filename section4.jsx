import React from "react";
import "./style.css";
import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';
import AOS from 'aos';


function Resume() {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: -100,
        });
    },[]);
    return (
        <div className="resume p-10 w-full min-h-screen flex flex-col items-center bg-transparent text-white">
            <h1 className="text-5xl font-bold text-center mb-10 text-white"
                data-aos="fade-up"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                >Resume
            </h1>
            <section className="resume-content w-4/5 bg-slate-300/10 p-10 rounded-2xl shadow-lg flex flex-col gap-8"
                data-aos="fade-in"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                >
                {/* Education Section */}
                <div className="education"
                    data-aos="zoom-in"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <h2 className="text-3xl ml-8 font-semibold mb-4 text-purple-300 underline hover:tracking-wider hover:scale-105 transition-all"
                    data-aos="zoom-in"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">Education</h2>
                    <ul className="space-y-6">
                        <li className="section4container p-4 bg-slate-700/50 rounded-lg"
                        data-aos="zoom-in"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                        >
                            <strong className="text-xl">OFPPT Mohammed El Fassi, Errachidia</strong>
                            <p>Diploma DEVOWFS (Developpement Web Option Web Full Stack)</p>
                            <p>Graduated: 2025</p>
                        </li>
                        <li className="section4container p-4 bg-slate-700/50 rounded-lg"
                        data-aos="zoom-in"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                        >
                            <strong className="text-xl">Abdelmoumn High School, Tounfite</strong>
                            <p>Bachelor's Degree Physics and Chemistry</p>
                            <p>Graduated: 2023</p>
                        </li>
                    </ul>
                </div>
                
                {/* Skills Section */}
                <div className="skills">
                    <h2 className="text-3xl ml-8 font-semibold mb-4 text-purple-300 underline hover:tracking-wider hover:scale-105 transition-all">Skills</h2>
                    <ul className="grid grid-cols-2 gap-4">
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">HTML, CSS, JavaScript</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">Bootstrap</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">Tailwind CSS</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">jQuery, Ajax</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">React, Node Js</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">UI/UX Design</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">PHP, MySQL</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">MongoDB, JSON</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">Python</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">Git, GitHub</li>
                    </ul>
                </div>
                
                {/* Languages Section */}
                <div className="languages">
                    <h2 className="text-3xl ml-8 font-semibold mb-4 text-purple-300 underline hover:tracking-wider hover:scale-105 transition-all">Languages</h2>
                    <ul className="space-y-3">
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">Arabic - Native</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">Tamazight - Native</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">English - Advanced</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">French - Advanced</li>
                        <li className="section4container bg-slate-700/50 p-3 rounded-lg">German - Intermediate</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Resume;