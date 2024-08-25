'use client'

import { resetElements } from '@/lib/features/elements/elementSlice'
import { useDispatch } from 'react-redux'

export default function SpiritSelectionButton() {
    const dispatch = useDispatch()

    return (
        <button
            className="text-accent"
            onClick={() => dispatch(resetElements())}
        >
            Spirit
        </button>
    )
}
