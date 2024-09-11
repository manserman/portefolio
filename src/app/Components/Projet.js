import Image from "next/image";

export default function Formation({ form }) {
  return (
    <div className="w-[80%] pl-4 h-[20em] relative border border-upjv-2 ">
      <div className="w-[45%] h-20 mt-4 flex flex-row space-x-3  ">
        <Image
          className="w-18 h-20"
          height={200}
          width={100}
          src={"./img/" + form.logo}
        />

        <div className="flex flex-col w-30 space-y-1 mt-2">
          <span className="font-semibold">{form.intitule_s}</span>
          <span className="text-sm font-semibold text-upjv-2">
            {form.institut}
          </span>
          <span className="text-xs">{form.intitule_l}</span>
        </div>
      </div>

      <div className="mt-6 text-xs underline font-semibold">
        {/* {form.description} */}
        Détail de la formation :
      </div>

      <div className="w-[95%]">
        <span className="text-xs text-upjv-2 italic">{form.detail}</span>
      </div>

      <div className="w-[95%] h-[35%] overflow-y-auto">
        <ul className="list-disc text-xs pl-8 pt-2">
          {form.acquis.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="absolute top-4 right-4 space-x-2 flex flex-rox">
        <span className="text-upjv-2">{form.debut}</span>
        <span>-</span>
        <span className="text-upjv-2">{form.fin}</span>
      </div>
    </div>
  );
}
