import styles from "./links.module.css"

import { useState, useEffect } from "react"
import Image from "next/image"

interface RandomAnim {
    element: string,
    animation: string,
}
const randomAnim = (): RandomAnim => {
    const animations = ["grow", "rotate", "shakeX", "fallDown"];
    const elements = ["linkedIn", "email", "discord", "github"];
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

const randomTime = (min: number, max: number): number => (Math.ceil(Math.random()*(max-min)+min)*1000)

interface IconP {
    link: string,
    name: string,
    classes: string,
    src: string,
}

const Icon = (props: IconP): JSX.Element => (
    <a href={props.link} className={styles.links__link}>
        <span style={{display: 'none'}}>{props.name}</span>
        <Image 
            src={props.src}
            alt={props.name}
            fill
            sizes=""
        />
    </a>
)

export default function Links() {

    const [animObject, setAnimObject] = useState({
        element: '',
        animation: ''
    })

    useEffect(() => {
        const timeoutId = setTimeout(() => setAnimObject(randomAnim()), randomTime(8, 4))
        return () => {
            clearTimeout(timeoutId)
        }
    })

    return (
        // Random key here make the whole component re render on each new state
        <section className={styles.links} key={Math.random()}>
            <div className={styles.links__cat_ctn}>
                <Image
                    src="/icons/at-solid.svg"
                    alt="@" 
                    className={styles.links__cat}
                    fill
                />
            </div>
            <Icon
                link="https://www.linkedin.com/in/benjamin-degen%C3%A8ve-93b991186/"
                name="linkedin"
                src="/icons/linkedin-in.svg"
                classes={`${animObject.element === "linkedIn" ? animObject.animation : ''}`}
            ></Icon>
            <Icon
                link="https://www.linkedin.com/in/benjamin-degen%C3%A8ve-93b991186/"
                name="linkedin"
                src="/icons/linkedin-in.svg"
                classes={`${animObject.element === "linkedIn" ? animObject.animation : ''}`}
            ></Icon>
            <div className={styles.links__cat_ctn}>
                <Image
                    src="/icons/code-solid.svg"
                    alt="code" 
                    className={styles.links__cat}
                    fill
                />
            </div>
            {/* <LinkImg
                name="linkedIn" 
                link={about.links.linkedIn} 
                classes={`fa-brands fa-linkedin-in links__img ${animObject.element === "linkedIn" ? animObject.animation : ''}`} />
            <LinkImg
                name="email"
                link={`mailto:${about.links.gmail}`} 
                classes={`fa-solid fa-envelope links__img ${animObject.element === "email" ? animObject.animation : ''}`} />
            <LinkImg 
                name="github"
                link={about.links.github} 
                classes={`fa-brands fa-github links__img ${animObject.element === "github" ? animObject.animation : ''}`} /> */}
        </section>
    )
}