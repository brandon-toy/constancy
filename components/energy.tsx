'use client'

import { useState } from 'react'

export default function Energy() {
    const [energy, useEnergy] = useState(0)

    const handleClick = (newEnergy: number) => {
        if (newEnergy < 0) {
            return
        }

        useEnergy(newEnergy)
    }

    return (
        <div className="flex items-center flex-col ">
            <div className="text-8xl flex flex-row content-center">
                <button onClick={() => handleClick(energy - 1)}>-</button>
                <div className="text-9xl">{energy}</div>
                <button onClick={() => handleClick(energy + 1)}>+</button>
            </div>
            <div className="text-3xl">Energy</div>
        </div>
    )
}
