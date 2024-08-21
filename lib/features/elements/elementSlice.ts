import { createSlice } from '@reduxjs/toolkit'

export interface Elements {
    sun: ElementState
    fire: ElementState
    water: ElementState
    earth: ElementState
    air: ElementState
    plant: ElementState
    animal: ElementState
}

export interface ElementState {
    value: number
    image: string
}

const elementSlice = createSlice({
    name: 'element',
    initialState: {
        elements: {
            sun: {
                value: 0,
                image: '/elements/sun.png',
            },
            fire: {
                value: 0,
                image: '/elements/fire.png',
            },
            water: {
                value: 0,
                image: '/elements/water.png',
            },
            earth: {
                value: 0,
                image: '/elements/earth.png',
            },
            air: {
                value: 0,
                name: 'Air',
                image: '/elements/air.png',
            },
            plant: {
                value: 0,
                image: '/elements/plant.png',
            },

            animal: {
                value: 0,
                image: '/elements/animal.png',
            },
        },
    },
    reducers: {
        incrementSun: (state) => {
            state.elements.sun.value += 1
        },
        incrementFire: (state) => {
            console.log('incrementFire')
            state.elements.fire.value += 1
        },
        incrementWater: (state) => {
            state.elements.water.value += 1
        },
        incrementEarth: (state) => {
            state.elements.earth.value += 1
        },
        incrementAir: (state) => {
            state.elements.air.value += 1
        },
        incrementPlant: (state) => {
            state.elements.plant.value += 1
        },
        incrementAnimal: (state) => {
            state.elements.animal.value += 1
        },

        decrementSun: (state) => {
            state.elements.sun.value -= 1
        },
        decrementFire: (state) => {
            state.elements.fire.value -= 1
        },
        decrementWater: (state) => {
            state.elements.water.value -= 1
        },
        decrementEarth: (state) => {
            state.elements.earth.value -= 1
        },
        decrementAir: (state) => {
            state.elements.air.value -= 1
        },
        decrementPlant: (state) => {
            state.elements.plant.value -= 1
        },
        decrementAnimal: (state) => {
            state.elements.animal.value -= 1
        },

        resetElements: (state) => {
            state.elements.sun.value = 0
            state.elements.fire.value = 0
            state.elements.water.value = 0
            state.elements.earth.value = 0
            state.elements.air.value = 0
            state.elements.plant.value = 0
            state.elements.animal.value = 0
        },
    },
})

export const {
    incrementSun,
    incrementFire,
    incrementWater,
    incrementEarth,
    incrementAir,
    incrementPlant,
    incrementAnimal,
    decrementSun,
    decrementFire,
    decrementWater,
    decrementEarth,
    decrementAir,
    decrementPlant,
    decrementAnimal,
    resetElements,
} = elementSlice.actions

export const elementReducerMapping = {
    sun: {
        increment: incrementSun,
        decrement: decrementSun,
    },
    fire: {
        increment: incrementFire,
        decrement: decrementFire,
    },
    water: {
        increment: incrementWater,
        decrement: decrementWater,
    },
    earth: {
        increment: incrementEarth,
        decrement: decrementEarth,
    },
    air: {
        increment: incrementAir,
        decrement: decrementAir,
    },
    plant: {
        increment: incrementPlant,
        decrement: decrementPlant,
    },
    animal: {
        increment: incrementAnimal,
        decrement: decrementAnimal,
    },
}

export default elementSlice.reducer
