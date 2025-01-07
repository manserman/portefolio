import { useState } from 'react';
import Image from 'next/image'; // Si vous utilisez Next.js, sinon importez l'image selon votre projet.

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen w-screen overflow-y-auto">
      <main className="h-full bg-inherit flex flex-row">
        {/********************* BURGER MENU BUTTON **********************/}
        <button
          className="p-4 fixed top-4 left-4 z-50 bg-gray-800 text-white"
          onClick={toggleMenu}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        {/********************* SIDE BAR **********************/}
        <div
          className={`h-[100%] w-[17%] fixed bg-gray-800 flex flex-col transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        > 
           {/* Image de profil */}
           <div className="flex justify-center mt-10">
            <Image
              className="rounded-full border-4 border-gray-300 shadow-md object-cover"
              src="./img/photo_profil.JPG" // Assurez-vous que le chemin est correct.
              alt="Photo de profil"
              width={150} // Largeur minimale pour Next.js
              height={150} // Hauteur minimale pour Next.js
              style={{
                maxWidth: '80%', // Limite la largeur à 80% du conteneur
                maxHeight: '30%', // Limite la hauteur à 30% du conteneur
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-start mt-4">
            <a
              href="#accueil"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Accueil
            </a>
            <a
              href="#savoir-faire"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >Savoir faire
            </a>
            <a
              href="#stack"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Stack technique
            </a>
            <a
              href="#competences"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Compétences
            </a>
            <a
              href="#experiences"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Expériences
            </a>
            <a
              href="#savoirs"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Savoir-être
            </a>
            <a
              href="#formations"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Formations
            </a>
            <a
              href="#projets"
              className="text-white text-lg p-3 w-full text-center hover:bg-gray-700 mt-1 cursor-pointer"
            >
              Projets
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
