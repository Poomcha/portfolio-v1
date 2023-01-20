import styles from './project.module.css';

import Image from 'next/image';

interface ProjectPropsI {
  key: string;
  nbOfProjects: number;
  name: string;
  shortName: string;
  ghPagesUrl: string;
  repoUrl: string;
  imgMinSrc: string;
  imgMinAlt: string;
  imgSrc: string;
  imgAlt: { fr: string; en: string; [key: string]: string };
  shortDescription: { fr: string; en: string; [key: string]: string };
  description: { fr: string; en: string; [key: string]: string };
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
    </figure>
  );
}
