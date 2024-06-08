import Image from "next/image";

export default function Experience({ exp }) {
  return (
    <div className="w-[80%] pl-4 h-[20em] relative border border-upjv-2 ">
      <div className="w-[45%] h-20 mt-4 flex flex-row space-x-3  ">
        <Image
          className="w-18 h-20"
          height={200}
          width={100}
          src={"./img/" + exp.logo}
        />

        <div className="flex flex-col space-y-1 mt-2">
          <span className="font-semibold">{exp.description}</span>
          <span className="text-sm font-semibold text-upjv-2">
            {exp.entreprise}
          </span>
          <span className="text-xs">{exp.poste}</span>
        </div>
      </div>

      <div className="mt-6 text-xs underline font-semibold">
        {/* {exp.description} */}
        Détail de l'expérience :
      </div>

      <div className="w-[70%]">
        <span className="text-xs text-upjv-2 italic">{exp.detail}</span>
      </div>

      <div className="w-[70%] h-[35%] overflow-y-auto">
        <ul className="list-disc text-xs pl-8 pt-2">
          {exp.missions.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="absolute top-4 right-4 space-x-2 flex flex-rox">
        <span className="text-upjv-2">{exp.debut}</span>
        <span>-</span>
        <span className="text-upjv-2">{exp.fin}</span>
      </div>

      {exp.isExperience ? (
        <table className="absolute top-16 right-4 text-center h-[60%] w-[22%] text-xs ">
          <tr className="bg-upjv text-xs text-upjv-2 font-normal">
            <th>Competences acquises</th>
          </tr>
          {exp.competences.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item}</td>
              </tr>
            );
          })}
        </table>
      ) : (
        <></>
      )}
    </div>
  );
}
