import styles from './showcase.module.css';

import { Element } from 'react-scroll';
import cN from 'classnames';
import Project from './project/project';
import projects from '../../data/projects';
import { useContext } from 'react';
import { LanguageContext, LanguageContextI } from '../context/language';

export default function Showcase() {
  const { language } = useContext(LanguageContext) as LanguageContextI;
  return (
    <Element
      className={cN(styles.showcase, 'page')}
      id="showcase"
      name="showcase"
    >
      {projects.map((project, index, array) => (
        <Project
          key={project.shortName}
          language={language}
          nbOfProjects={array.length}
          name={project.name[language]}
          shortName={project.shortName}
          ghPagesUrl={project.ghPagesUrl}
          repoUrl={project.repoUrl}
          imgMinSrc={project.imgMinSrc}
          imgMinAlt={project.imgMinAlt}
          imgSrc={project.imgSrc}
          imgAlt={project.imgAlt[language]}
          shortDescription={project.shortDescription[language]}
          description={project.description[language]}
          liveVersion={project.liveVersion}
          tech={project.tech}
        />
      ))}
    </Element>
  );
}
