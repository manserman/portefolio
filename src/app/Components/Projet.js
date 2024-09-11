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
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* Titre du projet */}
        <div className="text-center font-serif text-gray-700 font-semibold py-6 text-2xl">
          {projet.titre}
        </div>

        {/* Image du projet */}
        <div
          className="mt-5 mx-auto rounded-lg overflow-hidden"
          style={{ width: "100%", height: "18rem" }}
        >
          <Image
            className="object-cover w-full h-full"
            width={500}  // Taille augmentée
            height={300} // Taille augmentée
            src={"./img/" + projet.illustration}
            alt={projet.titre}
          />
        </div>

        {/* Description du projet */}
        <div className="px-8 py-6">
          <p className="text-base text-gray-600">{projet.description}</p>
        </div>

        {/* Lien vers le projet */}
        <div className="px-8 py-4 text-center">
          <a
            href={projet.lien}
            className="text-blue-500 hover:underline text-base"
          >
            Cliquez ici pour accéder au code source du projet
          </a>
        </div>
      </div>
    </div>
  );
}
