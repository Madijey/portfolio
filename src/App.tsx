import React from "react";
import notesImg from "./assets/notes.png";
import econImg from "./assets/ecom.png";
import capstoneImg from "./assets/capstone.png";

function App() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero section */}
            <section className="flex flex-col items-center justify-center h-screen text-center px-4">
                <h1 className="text-5xl font-bold">madijeydesantos</h1>
                <p className="mt-4 text-xl text-gray-600">
                    AI engineer, software developer, and builder. | Podashia ventures.
                </p>
                <p className="mt-2 text-lg text-gray-500">
                    Portfolio - Real projects, real impact.
                </p>
            </section>

            {/* Projects section */}
            <section className="max-w-5xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-semibold mb-8">Projects</h2>
                
                <div className="grid gap-12">
                    {/* Notes App */}
                    <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
                        <h3 className="text-2xl font-semibold">Notes App + Summarizer</h3>
                        <p className="mt-2 text-gray-600">
                            Real-time notes with authentication, postgres backend, and summarization microservice
                        </p>
                        <img
                            src={notesImg}
                            alt="Notes App screenshot"
                            className="mt-4 rounded-lg border"
                        />
                        <div className="mt-4 aspect-video">
                            <iframe
                                className="w-full h-full rounded-lg border"
                                src="https://www.youtube.com/embed/your-video-id"
                                title="Notes App Demo"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <a
                            href="https://github.com/madijeydesantos/notes-app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 mt-4 inline-block"
                        >
                            View repo
                        </a>
                    </div>

                    {/* E-commerce */}
                    <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
                        <h3 className="text-2xl font-semibold">
                            E-commerce + Recommendations
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Product catalog with embeddings-based search and recommendations
                        </p>
                        <img
                            src={econImg}
                            alt="E-commerce screenshot"
                            className="mt-4 rounded-lg border"
                        />
                        <div className="mt-6 aspect-video">
                            <iframe
                                className="w-full h-full rounded-lg border"
                                src="https://www.youtube.com/embed/your-video-id"
                                title="E-commerce Demo"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <a
                            href="https://github.com/madijeydesantos/e-commerce"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 mt-4 inline-block"
                        >
                            View repo
                        </a>
                    </div>

                    {/* Capstone Project */}
                    <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
                        <h3 className="text-2xl font-semibold">Capstone SaaS</h3>
                        <p className="mt-2 text-gray-600">
                            Unified SaaS app: notes, summarization, real-time collab, and recommendations in one seamless tool.
                        </p>
                        <img
                            src={capstoneImg}
                            alt="Capstone Project screenshot"
                            className="mt-4 rounded-lg border"
                        />
                        <div className="mt-6 aspect-video">
                            <iframe
                                className="w-full h-full rounded-lg border"
                                src="https://www.youtube.com/embed/your-video-id"
                                title="Capstone Project Demo"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <a
                            href="https://github.com/madijeydesantos/capstone-saas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 mt-4 inline-block"
                        >
                            View repo
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact section */}
            <section className="bg-gray-100 py-16 text-center">    
                <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
                <p className="mt-2 text-gray-600">madijeydesantos@gmail.com</p>
                <p className="mt-2 text-gray-600">WhatsApp +254 723 134 062</p>
                <p className="mt-2 text-gray-600">
                    Instagram:{" "}
                    <a
                        href="https://www.instagram.com/madijeydesantos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                    >
                        @madijeydesantos
                    </a>
                </p>
            </section>
        </div>
    );
}

export default App;