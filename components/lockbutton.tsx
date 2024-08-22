'use client'

import { IoMdLock } from 'react-icons/io'
import { useDispatch } from 'react-redux'

export default function LockButton() {
    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch({ type: 'element/lockElement' })}>
            <IoMdLock size={42} className="align-bottom" />
        </button>
    )
}
