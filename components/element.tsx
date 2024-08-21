'use client'

import {
    elementReducerMapping,
    Elements,
    incrementFire,
} from '@/lib/features/elements/elementSlice'
import { RootState } from '@/lib/store'
import { prototype } from 'events'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

interface ElementProps {
    imageSource: string
    count: number
    reducers: {
        increment: any
        decrement: any
    }
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
                        reducers={{
                            increment:
                                elementReducerMapping[elementKey].increment,
                            decrement:
                                elementReducerMapping[elementKey].decrement,
                        }}
                    />
                )
            })}
        </div>
    )
}

function Element(props: ElementProps) {
    const dispatch = useDispatch()

    return (
        <div className="flex flex-row pt-5 pl-5">
            <button onClick={() => dispatch(props.reducers.increment())}>
                <Image
                    width={35}
                    height={35}
                    src={props.imageSource}
                    alt="fire"
                />
            </button>
            <button
                className="flex text-xl justify-start grow pl-5 pt-1"
                onClick={() => dispatch(props.reducers.decrement())}
            >
                {props.count}
            </button>
        </div>
    )
}
