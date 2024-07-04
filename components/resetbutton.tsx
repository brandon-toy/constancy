type ResetButtonProps = {
    reset: boolean
    setReset: Function
}

export default function ResetButton(props: ResetButtonProps) {
    return (
        <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => props.setReset(!props.reset)}
        >
            Reset
        </button>
    )
}
