'use client'

import { resetElements } from '@/lib/features/elements/elementSlice'
import { useDispatch } from 'react-redux'

export default function ResetButton() {
    const dispatch = useDispatch()

    return (
        <button
            className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => dispatch(resetElements())}
        >
            Reset
        </button>
    )
}
