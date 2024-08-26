'use client'

import { clickSpiritTab } from '@/lib/features/elements/spiritSlice'
import { useDispatch } from 'react-redux'

export default function SpiritSelectionButton() {
    const dispatch = useDispatch()

    return (
        <button
            className="text-accent"
            onClick={() => dispatch(clickSpiritTab())}
        >
            Spirit
        </button>
    )
}
