import { useEffect, useState } from "react";
import Image from "next/image";

export default function Projet({ projet }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`container mx-auto mt-10 px-4 transition-all duration-500 ease-in-out transform ${
        show ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* Titre du projet */}
        <div className="text-center font-serif text-gray-700 font-semibold py-4 text-xl">
          {projet.titre}
        </div>

        {/* Image du projet */}
        <div className="mt-4 mx-auto rounded-lg overflow-hidden flex justify-center">
          <Image
            width={300}  // Taille réduite
            height={250} // Taille réduite
            src={"./img/" + projet.illustration}
            alt={projet.titre}
          />
        </div>

        {/* Description du projet */}
        <div className="px-6 py-4">
          <p className="text-sm text-gray-600">{projet.description}</p>
        </div>

        {/* Lien vers le projet */}
        <div className="px-6 py-3 text-center">
          <a
            href={projet.lien}
            className="text-blue-500 hover:underline text-sm"
          >
            Cliquez ici pour accéder au code source du projet
          </a>
        </div>
      </div>
    </div>
  );
}
