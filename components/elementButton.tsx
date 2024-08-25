import Image from 'next/image'

interface ElementButtonProps {
    elementSrc: string
    elementCount: number
    elementAlt: string
    incrementButton: () => void
    decrementButton: () => void
}

export default function ElementButton(props: ElementButtonProps) {
    return (
        <div className="join px-20">
            <button
                onClick={props.decrementButton}
                className="text-secondary join-item btn"
            >
                -
            </button>
            <button className="join-item btn text-accent">
                <Image
                    src={props.elementSrc}
                    width={20}
                    height={20}
                    alt={props.elementAlt}
                />
                {props.elementCount}
            </button>
            <button
                onClick={props.incrementButton}
                className="text-secondary join-item btn"
            >
                +
            </button>
        </div>
    )
}
