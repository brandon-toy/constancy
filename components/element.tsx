'use client'

import Image from 'next/image'
import { useContext, useState } from 'react'

const elements: string[] = [
    '/elements/sun.png',
    '/elements/moon.png',
    '/elements/fire.png',
    '/elements/air.png',
    '/elements/water.png',
    '/elements/earth.png',
    '/elements/plant.png',
    '/elements/animal.png',
]

interface ImageSource {
    imageSource: string
}

type ElementsProps = {
    reset: boolean
}

export default function Elements(props: ElementsProps) {
    return (
        <div className="flex flex-col">
            {props.reset
                ? elements.map((imageSource: string, x) => {
                      return <Element key={1 + x} imageSource={imageSource} />
                  })
                : elements.map((imageSource: string, x) => {
                      return <Element key={-1 * x} imageSource={imageSource} />
                  })}
        </div>
    )
}

function Element(props: ImageSource) {
    const [count, setCount] = useState(0)
    return (
        <div className="flex flex-row pt-5 pl-5">
            <button onClick={() => setCount(count + 1)}>
                <Image
                    width={35}
                    height={35}
                    src={props.imageSource}
                    alt="fire"
                />
            </button>
            <button
                className="flex text-xl justify-start grow pl-5 pt-1"
                onClick={() => setCount(count == 0 ? count : count - 1)}
            >
                {count}
            </button>
        </div>
    )
}
