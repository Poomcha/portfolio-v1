import styles from "./links.module.css"

import { useState, useEffect } from "react"
import cN from "classnames"

interface RandomAnim {
    element: string,
    animation: string,
}
const randomAnim = (): RandomAnim => {
    const animations = ["grow", "rotate", "shakeX", "fallDown"];
    const elements = ["linkedIn", "email", "github"];
    const oneOrChainedAnimation = Math.ceil(Math.random()*10%2)
    const randomElement = elements[Math.floor(Math.random()*elements.length)]
    const randomAnimation = animations[Math.floor(Math.random()*animations.length)]
    if (oneOrChainedAnimation === 1) {
        return {
            element: randomElement,
            animation: randomAnimation
        }
    } else {
        return {
            element: randomElement,
            animation: `${randomAnimation}-${animations.filter(anim => anim !== randomAnimation)[Math.floor(Math.random()*(animations.length-1))]}`
        }
    }
}

const randomTime = (min: number, max: number): number => {
    const randomTime = Math.ceil(Math.random()*(max-min)+min)*1000
    // console.log(randomTime);
    return randomTime;
}

interface IconP {
    link: string,
    name: string,
    classes: string,
    fontAwesome: string,
}

const Icon = (props: IconP): JSX.Element => (
    <a href={props.link} className={styles.links__link}>
        <span style={{display: 'none'}}>{props.name}</span>
        <i className={cN(props.fontAwesome, props.classes.split(' ').map(style => styles[style]))}></i>
    </a>
)

export default function Links() {

    const [animObject, setAnimObject] = useState({
        element: '',
        animation: ''
    })

    useEffect(() => {
        const timeoutId = setTimeout(() => setAnimObject(randomAnim()), randomTime(4, 8))
        return () => {
            clearTimeout(timeoutId)
        }
    })

    return (
        // Random key here make the whole component re render on each new state
        <section className={styles.links} key={Math.random()}>
            <div className={styles.links__cat_ctn}>
                <i className={styles.links__cat + " fa-solid fa-at"}></i>
            </div>
            <Icon
                link="https://www.linkedin.com/in/benjamin-degen%C3%A8ve-93b991186/"
                name="linkedin"
                fontAwesome="fa-brands fa-linkedin-in"
                classes={`links__img links__img--linkedIn ${animObject.element === "linkedIn" ? animObject.animation : ''}`}
            ></Icon>
            <Icon
                link="mailto:ben.degeneve@gmail.com"
                name="email"
                fontAwesome="fa-solid fa-envelope"
                classes={`links__img links__img--email ${animObject.element === "email" ? animObject.animation : ''}`}
            ></Icon>
            <div className={styles.links__cat_ctn}>
                <i className={styles.links__cat + " fa-solid fa-code"}></i>
            </div>
            <Icon
                link="https://github.com/Poomcha"
                name="github"
                fontAwesome="fa-brands fa-github"
                classes={`links__img ${animObject.element === "github" ? animObject.animation : ''}`}
            ></Icon>
        </section>
    )
}