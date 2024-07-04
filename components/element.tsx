"use client"

import Image from "next/image";
import { useState } from "react"





const elements: string[] = [
	"/elements/air.png",
	"/elements/animal.png",
	"/elements/earth.png",
	"/elements/fire.png",
	"/elements/moon.png",
	"/elements/plant.png",
	"/elements/sun.png",
	"/elements/water.png",
]

interface ImageSource {
	imageSource: string
}



export default function Elements() {
	const [count, setCount] = useState(0);
	return (
		<div className="flex items-center flex-col ">
			{elements.map((imageSource) => {

				return <Element imageSource={imageSource} />
			})
			}
		</div>
	)
}

function Element(props: ImageSource) {

	const [count, setCount] = useState(0);
	return (
		<div className="flex items-center flex-col ">
			<button onClick={() => setCount(count == 0 ? count : count - 1)}>
				{count}
			</button>
			<button onClick={() => setCount(count + 1)}>
				<Image width={50} height={50} src={props.imageSource} alt="fire" />
			</button>
		</div>
	)
}
