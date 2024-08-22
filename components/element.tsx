'use client'

import {
    elementReducerMapping,
    Elements,
    lockElement,
    unlockElement,
} from '@/lib/features/elements/elementSlice'
import { RootState } from '@/lib/store'
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

interface ElementProps {
    imageSource: string
    count: number
    reducers: {
        increment: ActionCreatorWithoutPayload<any>
        incrementLocked: ActionCreatorWithoutPayload<any>
        decrement: ActionCreatorWithoutPayload<any>
        decrementLocked: ActionCreatorWithoutPayload<any>
    }
    element: string
}

export default function ElementsModule() {
    const elements: Elements = useSelector(
        (state: RootState) => state.elements.elements
    )

    return (
        <div className="flex flex-col justify-center items-center">
            {Object.keys(elements).map((element: string) => {
                const elementKey = element as keyof Elements
                return (
                    <Element
                        key={elementKey}
                        imageSource={elements[elementKey].image}
                        count={
                            elements[elementKey].value +
                            elements[elementKey].lockedValue
                        }
                        reducers={{
                            increment:
                                elementReducerMapping[elementKey].increment,
                            incrementLocked:
                                elementReducerMapping[elementKey]
                                    .incrementLocked,
                            decrement:
                                elementReducerMapping[elementKey].decrement,
                            decrementLocked:
                                elementReducerMapping[elementKey]
                                    .decrementLocked,
                        }}
                        element={element}
                    />
                )
            })}
        </div>
    )
}

function Element(props: ElementProps) {
    const dispatch = useDispatch()
    const isLocked = useSelector(
        (state: RootState) => state.elements.lockElement
    )

    const handleDecrementClick = () => {
        if (!isLocked) {
            dispatch(props.reducers.decrement())
            return
        }

        dispatch(unlockElement())
        dispatch(props.reducers.decrementLocked())
    }

    const handleIncrementClick = () => {
        if (!isLocked) {
            dispatch(props.reducers.increment())
            return
        }

        dispatch(unlockElement())
        dispatch(props.reducers.incrementLocked())
    }

    return (
        <div className="flex flex-row pt-5 pl-5">
            <button onClick={handleDecrementClick}>
                <Image
                    width={35}
                    height={35}
                    src={props.imageSource}
                    alt={props.element}
                />
            </button>
            <button
                className="flex text-xl justify-start grow pl-5 pt-1"
                onClick={handleIncrementClick}
            >
                {props.count}
            </button>
        </div>
    )
}
