import Image from "next/image";

export default function Experience({ exp }) {
  return (
    <div className="relative bg-white shadow-lg rounded-lg border border-gray-300 hover:shadow-2xl hover:border-gray-500 transition-all duration-300 w-[90%] h-[35em] p-6 mx-auto">
      <div className="flex flex-row space-x-4 items-center">
        <Image
          className="w-24 h-24 rounded"
          height={96}
          width={96}
          src={"./img/" + exp.logo}
          alt="Logo entreprise"
        />

        <div className="flex flex-col space-y-2">
          <span className="font-semibold text-lg">{exp.description}</span>
          <span className="text-sm font-semibold text-gray-600">
            {exp.entreprise}
          </span>
          <span className="text-sm text-gray-500">{exp.poste}</span>
        </div>
      </div>

      <div className="mt-6 text-sm underline font-semibold">
        Détail de l'expérience :
      </div>

      <div className="w-full mt-2">
        <span className="text-sm text-gray-700 italic">{exp.detail}</span>
      </div>

      <div className="w-full mt-2 h-[6em] overflow-y-auto">
        <ul className="list-disc text-sm pl-6">
          {exp.missions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="absolute top-4 right-4 space-x-2 flex">
        <span className="text-sm text-gray-600">{exp.debut}</span>
        <span className="text-sm text-gray-600">-</span>
        <span className="text-sm text-gray-600">{exp.fin}</span>
      </div>

      {exp.isExperience && (
        <table className="absolute top-16 right-4 text-center h-[60%] w-[22%] text-xs border border-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>Compétences acquises</th>
            </tr>
          </thead>
          <tbody>
            {exp.competences.map((item, index) => (
              <tr key={index}>
                <td className="border-t border-gray-300 p-1">{item}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
