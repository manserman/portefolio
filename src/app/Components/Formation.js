import Image from "next/image";

export default function Formation({ form }) {
  return (
    <div className="w-[90%] h-[28em] px-8 py-6 bg-white shadow-lg rounded-lg border border-gray-200 mx-auto">
      <div className="flex flex-row space-x-4 items-center">
        <Image
          className="w-24 h-28 rounded"
          height={112}
          width={96}
          src={"./img/" + form.logo}
          alt="Logo"
        />

        <div className="flex flex-col space-y-2">
          <span className="text-2xl font-semibold">{form.intitule_s}</span>
          <span className="text-lg font-semibold text-gray-600">
            {form.institut}
          </span>
          <span className="text-base">{form.intitule_l}</span>
        </div>
      </div>

      <div className="mt-6 text-lg underline font-semibold">
        Détail de la formation :
      </div>

      <div className="w-full mt-4">
        <span className="text-base text-gray-700 italic">{form.detail}</span>
      </div>

      <div className="w-full mt-4 h-[10em] overflow-y-auto">
        <ul className="list-disc text-base pl-8">
          {form.acquis.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="absolute top-4 right-4 space-x-2 flex flex-row">
        <span className="text-gray-600 text-lg">{form.debut}</span>
        <span className="text-lg">-</span>
        <span className="text-gray-600 text-lg">{form.fin}</span>
      </div>
    </div>
  );
}
