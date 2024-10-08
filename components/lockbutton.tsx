'use client'

import { hitLock } from '@/lib/features/elements/elementSlice'
import { RootState } from '@/lib/store'
import { useDispatch, useSelector } from 'react-redux'

export default function LockButton() {
    const dispatch = useDispatch()
    const lockElement = useSelector(
        (state: RootState) => state.elements.lockElement
    )
    const lockText = 'Lock'

    return (
        <button onClick={() => dispatch(hitLock())}>
            {lockElement ? (
                <div className="text-error">{lockText}</div>
            ) : (
                <div className="text-accent">{lockText}</div>
            )}
        </button>
    )
}
