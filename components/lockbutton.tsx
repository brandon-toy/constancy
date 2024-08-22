'use client'

import { hitLock } from '@/lib/features/elements/elementSlice'
import { RootState } from '@/lib/store'
import { IoLockClosed, IoLockOpen } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'

export default function LockButton() {
    const dispatch = useDispatch()
    const lockElement = useSelector(
        (state: RootState) => state.elements.lockElement
    )

    return (
        <button onClick={() => dispatch(hitLock())}>
            {lockElement ? (
                <IoLockOpen size={42} className="align-bottom" />
            ) : (
                <IoLockClosed size={42} className="align-bottom" />
            )}
        </button>
    )
}
