import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <aside className="relative overflow-hidden text-gray-900 bg-white rounded-lg shadow-lg mx-2 sm:mx-16 py-12 sm:py-20">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 pt-10 sm:pt-24 flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between">
          {/* Text Content */}
          <div className="max-w-xl space-y-6 text-center sm:text-left sm:max-w-md">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
              Experience the Future with <span className="text-orange-600">MetaApp</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Discover new worlds, connect with others, and explore endless possibilities through our cutting-edge Metaverse platform. Download now to start your journey into immersive experiences.
            </p>

            <Link
              to="/download"
              className="inline-flex items-center px-8 py-3 font-semibold bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition duration-300 ease-in-out"
              aria-label="Download MetaApp"
            >
              <svg
                fill="currentColor"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="mr-3"
                aria-hidden="true"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Download Now
            </Link>
          </div>

          {/* Hero Image */}
          <div className="w-full sm:w-auto mb-12 sm:mb-0 flex justify-center sm:justify-end">
            <img
              className="w-72 sm:w-96 max-w-full rounded-lg shadow-xl"
              src="https://img.freepik.com/free-vector/metaverso-concept-illustration_114360-9845.jpg?semt=ais_hybrid&w=740"
              alt="Metaverse concept illustration"
              loading="lazy"
            />
          </div>
        </div>
      </aside>

      {/* Features Section */}
      <section className="mt-16 sm:mt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid gap-10 sm:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img
              src="https://img.icons8.com/color/96/000000/virtual-reality.png"
              alt="Immersive VR"
              className="mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">Immersive VR Experience</h3>
            <p className="text-gray-600">
              Dive deep into stunning virtual worlds using the latest VR technology for seamless and realistic interaction.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/021/666/213/non_2x/3d-hand-holding-phone-with-emoji-comment-love-like-and-hashtag-icon-3d-online-social-media-communication-platform-concept-3d-rendering-png.png"
              alt="Social Connectivity"
              className="mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">Connect with Friends</h3>
            <p className="text-gray-600">
              Meet, chat, and collaborate with your friends or new people worldwide in safe and secure virtual spaces.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img
              src="https://img.icons8.com/color/96/000000/blockchain-technology.png"
              alt="Secure Transactions"
              className="mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">
              Trade, buy, and sell digital assets with blockchain-powered security ensuring trust and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary Image Section */}
      <div className="grid place-items-center mt-16 sm:mt-24 px-4">
        <img
          className="w-48 sm:w-96 max-w-full rounded-lg shadow-lg"
          src="https://img.freepik.com/free-vector/flat-world-science-day-background_52683-95667.jpg?semt=ais_hybrid&w=740"
          alt="Science and innovation"
          loading="lazy"
        />
      </div>

      {/* Call to Action Section */}
      <section className="text-center mt-20 mb-20 px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">Join Millions Exploring New Realities</h2>
        <p className="max-w-xl mx-auto text-gray-700 text-lg sm:text-xl mb-8">
          Whether you are a gamer, developer, or explorer, MetaApp is your gateway to the next-generation internet — immersive, interactive, and intuitive.
        </p>
        <Link
          to="/signup"
          className="inline-block px-10 py-4 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition duration-300 ease-in-out"
          aria-label="Sign up for MetaApp"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
