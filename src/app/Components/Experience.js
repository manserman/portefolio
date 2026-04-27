import Image from "next/image";

export default function Experience({ exp, imgPrefix = "./img/" }) {
  if (!exp) return null;

  return (
    <article className="exp-item reveal">
      <div className="exp-years">
        <div className="exp-year-from">{exp.debut}</div>
        <div className="exp-year-to">→ {exp.fin}</div>
      </div>

      <div className="exp-body">
        <header className="exp-header">
          {exp.logo && (
            <Image
              className="exp-logo"
              src={`${imgPrefix}${exp.logo}`}
              alt={`Logo ${exp.entreprise}`}
              width={44}
              height={44}
            />
          )}
          <div>
            <h3 className="exp-role">{exp.poste}</h3>
            <div className="exp-company">{exp.entreprise} · {exp.lieu}</div>
          </div>
        </header>

        {exp.detail && <p className="exp-detail">{exp.detail}</p>}

        {Array.isArray(exp.missions) && exp.missions.length > 0 && (
          <ul className="exp-missions">
            {exp.missions.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        )}

        {Array.isArray(exp.competences) && exp.competences.length > 0 && (
          <div className="exp-tags">
            {exp.competences.map((c, i) => (
              <span key={i} className="exp-tag">{c}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
