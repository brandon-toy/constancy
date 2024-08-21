'use client'

import Element from '@/components/element'
import Energy from '@/components/energy'
import ResetButton from '@/components/resetbutton'
import { useState } from 'react'
import StoreProvider from './StoreProvider'

export default function Home() {
    const [reset, setReset] = useState(false)

    return (
        <StoreProvider>
            <div>
                <Energy />
                <Element />
                <ResetButton />
            </div>
        </StoreProvider>
    )
}
