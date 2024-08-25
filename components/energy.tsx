'use client'

import { useState } from 'react'

export default function Energy() {
    const [energy, setEnergy] = useState(0)

    const handleDecrement = (newEnergy: number) => {
        setEnergy(newEnergy > 0 ? newEnergy : 0)
    }

    const handleIncrement = (newEnergy: number) => {
        setEnergy(newEnergy)
    }

    return (
        <div className="flex items-center flex-col ">
            <div className="card bg-base-100 w-25 shadow-xl">
                <div className="card-body">
                    <h2 className="text-accent card-title">{energy}</h2>
                    <p className="text-accent">Energy</p>
                    <div className="card-actions justify-start"></div>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleDecrement(energy - 1)}
                            className="btn"
                        >
                            -
                        </button>
                        <button
                            onClick={() => handleIncrement(energy + 1)}
                            className="btn"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
