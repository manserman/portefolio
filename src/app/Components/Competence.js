"use client";

import { useState } from "react";

export default function Competence({ comp }) {
  const [sign, setSign] = useState("+");
  const s_comp_visible =
    "h-[8em] transition-height delay-150 pl-4 pt-2 w-full overflow-y-auto";
  const s_comp_hide = "h-0 transition-height delay-150 pl-4 pt-2 w-full";
  const [s_comp, setComp] = useState(s_comp_hide);

  const display = () => {
    if (sign == "+") {
      setComp(s_comp_visible);
      setSign("-");
    } else {
      setComp(s_comp_hide);
      setSign("+");
    }
  };

  return (
    <div className="w-[50em] border mx-auto overflow-hidden ">
      <div
        onClick={display}
        className={
          "w-full  flex relative items-center justify-center text-white h-[3em] " +
          comp.color
        }
      >
        <h1 className=" text font-serif mx_auto">{comp.titre}</h1>
        <span className="absolute left-24 text-xl text-white font-extrabold">
          {sign}
        </span>
        <span className="absolute right-24 text-xl text-white font-extrabold">
          {sign}
        </span>
      </div>
      <div className={s_comp}>
        <ul className="list-disc text-xs pl-8 space-y-2 pt-2">
          {comp.competences.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
