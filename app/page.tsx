'use client'

import Element from '@/components/element'
import Energy from '@/components/energy'
import ResetButton from '@/components/resetbutton'
import StoreProvider from './StoreProvider'

export default function Home() {
    return (
        <StoreProvider>
            <Energy />
            <Element />
            <ResetButton />
        </StoreProvider>
    )
}
