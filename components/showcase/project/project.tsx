import styles from './project.module.css';

import Image from 'next/image';

interface ProjectPropsI {
  key: string;
  language: string;
  nbOfProjects: number;
  name: string;
  shortName: string;
  ghPagesUrl: string;
  repoUrl: string;
  imgMinSrc: string;
  imgMinAlt: string;
  imgSrc: string;
  imgAlt: string;
  shortDescription: string;
  description: string;
  liveVersion: boolean;
  tech: string[];
}

export default function Project(props: ProjectPropsI) {
  return (
    <figure className={styles.project}>
      <Image
        src={props.imgMinSrc}
        alt={props.imgMinAlt}
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        sizes="
          calc(100% / 2),
          (min-width: 600px) calc(100% / 3),
          (min-width: 1200px) calc(100% / 4),
          (min-width: 1800px) calc(100% / 5)
        "
      />
      <figcaption className={styles.project__caption}>
        <h2>{props.name}</h2>
        <p>{props.shortDescription}</p>
        <h3>Tech:</h3>
        <p>
          {props.tech.map((tech, index) => (
            <strong key={`${tech}${index}`}>{tech} </strong>
          ))}
        </p>
        <div>
          <a href={props.repoUrl} target="_blank">
            <i className="fa-brands fa-square-github"></i>github
          </a>
          {props.liveVersion && (
            <a href={props.ghPagesUrl} target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>website
            </a>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
