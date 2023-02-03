import styles from './project.module.css';

import Image from 'next/image';
import { WheelEvent, TouchEvent } from 'react';
import cN from 'classnames';

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
  // Stop events propagation, so we can scroll in captions.
  const stopWheelingPropagation = (e: WheelEvent<HTMLElement>): void =>
    e.stopPropagation();
  const stopTouchEndPropagation = (e: TouchEvent<HTMLElement>): void =>
    e.stopPropagation();

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
      <figcaption
        className={styles.project__caption}
        onWheel={stopWheelingPropagation}
        onTouchEnd={stopTouchEndPropagation}
      >
        <h2>{props.name}</h2>
        <p>{props.shortDescription}</p>
        <h3>{props.language === 'fr' ? 'tech' : 'stack'}</h3>
        <p>
          {props.tech.map((tech, index) => (
            <strong key={`${tech}${index}`}>{tech} </strong>
          ))}
        </p>
        <div className={styles.project__caption__links}>
          <a href={props.repoUrl} target="_blank" rel="noreferrer">
            <i
              className={cN(
                'fa-brands fa-github',
                styles.project__caption__links__icon
              )}
            ></i>
            <span>
              {props.language === 'fr'
                ? 'répertoire github'
                : 'github repository'}
            </span>
          </a>
          {props.liveVersion && (
            <a href={props.ghPagesUrl} target="_blank" rel="noreferrer">
              <i
                className={cN(
                  'fa-solid fa-arrow-up-right-from-square',
                  styles.project__caption__links__icon
                )}
              ></i>
              <span>website</span>
            </a>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
