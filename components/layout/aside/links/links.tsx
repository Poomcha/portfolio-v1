import styles from './links.module.css';

import { useState, useEffect, useContext } from 'react';
import cN from 'classnames';
import {
  MailModalContext,
  MailModalContextI,
} from '../../../context/mailmodal';

interface RandomAnim {
  element: string;
  animation: string;
}
const randomAnim = (): RandomAnim => {
  const animations = ['grow', 'rotate', 'shakeX', 'fallDown'];
  const elements = ['linkedIn', 'email', 'github'];
  const oneOrChainedAnimation = Math.ceil((Math.random() * 10) % 2);
  const randomElement = elements[Math.floor(Math.random() * elements.length)];
  const randomAnimation =
    animations[Math.floor(Math.random() * animations.length)];
  if (oneOrChainedAnimation === 1) {
    return {
      element: randomElement,
      animation: randomAnimation,
    };
  } else {
    return {
      element: randomElement,
      animation: `${randomAnimation}-${
        animations.filter((anim) => anim !== randomAnimation)[
          Math.floor(Math.random() * (animations.length - 1))
        ]
      }`,
    };
  }
};

const randomTime = (min: number, max: number): number => {
  const randomTime = Math.ceil(Math.random() * (max - min) + min) * 1000;
  return randomTime;
};

interface IconP {
  link: string | undefined;
  name: string;
  classes: string;
  fontAwesome: string;
  target: '_blank' | '_self';
  onClick?: () => void;
}

const Icon = (props: IconP): JSX.Element => (
  <a
    href={props.link}
    className={styles.links__link}
    onClick={props.onClick}
    target={props.target}
  >
    <span style={{ display: 'none' }}>{props.name}</span>
    <i
      className={cN(
        props.fontAwesome,
        props.classes.split(' ').map((style) => styles[style])
      )}
    ></i>
  </a>
);

export default function Links() {
  const [animObject, setAnimObject] = useState({
    element: '',
    animation: '',
  });

  const { setIsOpen } = useContext(MailModalContext) as MailModalContextI;

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setAnimObject(randomAnim()),
      randomTime(4, 8)
    );
    return () => {
      clearTimeout(timeoutId);
    };
  });

  const handleClickOnMail = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    // Random key here make the whole component re render on each new state
    <section className={styles.links} key={Math.random()}>
      <div className={styles.links__cat_ctn}>
        <i className={styles.links__cat + ' fa-solid fa-at'}></i>
      </div>
      <Icon
        link="https://www.linkedin.com/in/benjamin-degen%C3%A8ve-93b991186/"
        name="linkedin"
        fontAwesome="fa-brands fa-linkedin-in"
        target="_blank"
        classes={`links__img links__img--linkedIn ${
          animObject.element === 'linkedIn' ? animObject.animation : ''
        }`}
      ></Icon>
      <Icon
        link={undefined}
        name="email"
        fontAwesome="fa-solid fa-envelope"
        target="_self"
        classes={`links__img links__img--email ${
          animObject.element === 'email' ? animObject.animation : ''
        }`}
        onClick={handleClickOnMail}
      ></Icon>
      <div className={styles.links__cat_ctn}>
        <i className={styles.links__cat + ' fa-solid fa-code'}></i>
      </div>
      <Icon
        link="https://github.com/Poomcha"
        name="github"
        fontAwesome="fa-brands fa-github"
        target="_blank"
        classes={`links__img links__img--github ${
          animObject.element === 'github' ? animObject.animation : ''
        }`}
      ></Icon>
    </section>
  );
}
