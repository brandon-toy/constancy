'use client'

import { resetElements } from '@/lib/features/elements/elementSlice'
import { useDispatch } from 'react-redux'

export default function ResetButton() {
    const dispatch = useDispatch()

    return (
        <button
            className="btn btn-outline btn-error"
            onClick={() => dispatch(resetElements())}
        >
            Reset
        </button>
    )
}
