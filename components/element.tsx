'use client'

import { Elements } from '@/lib/features/elements/elementSlice'
import { RootState } from '@/lib/store'
import Image from 'next/image'
import { useSelector } from 'react-redux'

interface ElementProps {
    imageSource: string
    count: number
}

export default function ElementsModule() {
    const elements: Elements = useSelector(
        (state: RootState) => state.elements.elements
    )

    return (
        <div className="flex flex-col">
            {Object.keys(elements).map((element: string) => {
                const elementKey = element as keyof Elements
                return (
                    <Element
                        imageSource={elements[elementKey].image}
                        count={elements[elementKey].value}
                    />
                )
            })}
        </div>
    )
}

function Element(props: ElementProps) {
    return (
        <div className="flex flex-row pt-5 pl-5">
            <button>
                <Image
                    width={35}
                    height={35}
                    src={props.imageSource}
                    alt="fire"
                />
            </button>
            <button className="flex text-xl justify-start grow pl-5 pt-1">
                {props.count}
            </button>
        </div>
    )
}
