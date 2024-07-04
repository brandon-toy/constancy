'use client'

import Element from '@/components/element'
import Energy from '@/components/energy'
import ResetButton from '@/components/resetbutton'
import { useState } from 'react'
import { createContext } from 'vm'

export default function Home() {
    const [reset, setReset] = useState(false)

    return (
        <main>
            <Energy />
            <Element reset={reset} />
            <ResetButton reset={reset} setReset={setReset} />
        </main>
    )
}
