'use client'

import Image from 'next/image'
import { useState } from 'react'

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
    count: number
    setCount: Function
}

export default function Elements() {
    const [count, setCount] = useState(0)

    return (
        <div className="flex place-content-center flex-row">
            {elements.map((imageSource) => {
                return (
                    <Element
                        count={count}
                        setCount={setCount}
                        imageSource={imageSource}
                    />
                )
            })}
        </div>
    )
}

function Element(props: ImageSource) {
    return (
        <div className="flex flex-col pl-2 pr-2">
            <button
                className="text-med"
                onClick={() =>
                    props.setCount(
                        props.count == 0 ? props.count : props.count - 1
                    )
                }
            >
                {props.count}
            </button>
            <button onClick={() => props.setCount(props.count + 1)}>
                <Image
                    width={35}
                    height={35}
                    src={props.imageSource}
                    alt="fire"
                />
            </button>
        </div>
    )
}
