import Image from "next/image";

export default function Experience({ exp }) {
  return (
    <div className="relative bg-white shadow-lg rounded-lg border border-gray-300 hover:shadow-2xl hover:border-gray-500 transition-all duration-300 w-[90%] h-auto p-6 mx-auto">
      {/* Logo et informations principales */}
      <div className="flex flex-row space-x-4 items-center mb-4">
        <Image
          className="w-24 h-24 rounded"
          height={96}
          width={96}
          src={"./img/" + exp.logo}
          alt="Logo entreprise"
        />

        <div className="flex flex-col space-y-2">
          <span className="font-semibold text-lg">{exp.description}</span>
          <span className="text-sm font-semibold text-gray-600">{exp.entreprise}</span>
          <span className="text-sm text-gray-500">{exp.poste}</span>
        </div>
      </div>

      {/* Détail de l'expérience */}
      <div className="mt-4">
        <h3 className="text-sm underline font-semibold">Détail de l'expérience :</h3>
        <p className="text-sm text-gray-700 italic mt-2">{exp.detail}</p>
      </div>

      {/* Liste des missions */}
      <div className="mt-4">
        <h4 className="text-sm font-semibold">Missions :</h4>
        <ul className="list-disc text-sm pl-6 mt-2">
          {exp.missions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Dates de l'expérience */}
      <div className="absolute top-4 right-4 space-x-2 flex text-sm text-gray-600">
        <span>{exp.debut}</span>
        <span>-</span>
        <span>{exp.fin}</span>
      </div>

      {/* Compétences acquises (si applicables) */}
      {exp.isExperience && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold">Compétences acquises :</h4>
          <table className="w-[50%] text-left text-lg border border-gray-300 mt-2 mx-auto">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-2 text-lg" >Compétences</th>
              </tr>
            </thead>
            <tbody>
              {exp.competences.map((item, index) => (
                <tr key={index}>
                  <td className="border-t border-gray-300  text-lg p-2">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
