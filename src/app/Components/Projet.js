import { useEffect, useState } from "react";
import Image from "next/image";

export default function Projet({ projet }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`container mx-auto mt-10 px-4 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95 transform'}`}>
      <div className="max-w-md mx-auto text-center font-serif text-gray-700 font-semibold mt-5 transition-opacity transition-transform duration-500">
        {projet.titre}
      </div>

      <div className="mt-7 mx-auto rounded-lg overflow-hidden transition-opacity transition-transform duration-500" style={{ width: "13rem", height: "9rem" }}>
        <Image
          className="object-cover"
          width={200}
          height={200}
          src={"./img/" + projet.illustration}
          alt={projet.titre}
        />
      </div>

      <div className="max-w-lg mt-5 mx-auto text-center transition-opacity transition-transform duration-500">
        <p className="text-sm text-gray-600">{projet.description}</p>
      </div>
      <div className="max-w-lg mt-5 mx-auto text-center transition-opacity transition-transform duration-500">
        <p className="text-sm text-gray-600"><a href={projet.lien} className="text-blue-500 hover:underline">Cliquez ici pour accéder au code source du projet</a></p>
      </div>
    </div>
  );
}
