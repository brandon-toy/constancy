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
        <div className="join">
            <button onClick={props.decrementButton} className="join-item btn">
                -
            </button>
            <button className="join-item btn">
                <Image
                    src={props.elementSrc}
                    width={20}
                    height={20}
                    alt={props.elementAlt}
                />
                {props.elementCount}
            </button>
            <button onClick={props.incrementButton} className="join-item btn">
                +
            </button>
        </div>
    )
}
