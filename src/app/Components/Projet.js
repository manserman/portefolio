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
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="text-center font-serif text-gray-700 font-semibold py-5">
          {projet.titre}
        </div>

        <div
          className="mt-5 mx-auto rounded-lg overflow-hidden"
          style={{ width: "100%", height: "13rem" }}
        >
          <Image
            className="object-cover w-full h-full"
            width={200}
            height={200}
            src={"./img/" + projet.illustration}
            alt={projet.titre}
          />
        </div>

        <div className="px-6 py-4">
          <p className="text-sm text-gray-600">{projet.description}</p>
        </div>

        <div className="px-6 py-4 text-center">
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
