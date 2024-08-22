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
    lockedValue: number
    image: string
}

const elementSlice = createSlice({
    name: 'element',
    initialState: {
        elements: {
            sun: {
                value: 0,
                lockedValue: 0,
                image: '/constancy/elements/sun.png',
            },
            fire: {
                value: 0,
                lockedValue: 0,
                image: '/constancy/elements/fire.png',
            },
            water: {
                value: 0,
                lockedValue: 0,
                image: '/constancy/elements/water.png',
            },
            earth: {
                value: 0,
                lockedValue: 0,
                image: '/constancy/elements/earth.png',
            },
            air: {
                value: 0,
                lockedValue: 0,
                image: '/constancy/elements/air.png',
            },
            plant: {
                value: 0,
                lockedValue: 0,
                image: '/constancy/elements/plant.png',
            },

            animal: {
                value: 0,
                lockedValue: 0,
                image: '/constancy/elements/animal.png',
            },
        },
        lockElement: false,
    },
    reducers: {
        incrementSun: (state) => {
            state.elements.sun.value += 1
        },
        incrementFire: (state) => {
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

        incrementLockedSun: (state) => {
            state.elements.sun.lockedValue += 1
        },

        incrementLockedFire: (state) => {
            state.elements.fire.lockedValue += 1
        },

        incrementLockedWater: (state) => {
            state.elements.water.lockedValue += 1
        },

        incrementLockedEarth: (state) => {
            state.elements.earth.lockedValue += 1
        },

        incrementLockedAir: (state) => {
            state.elements.air.lockedValue += 1
        },

        incrementLockedPlant: (state) => {
            state.elements.plant.lockedValue += 1
        },

        incrementLockedAnimal: (state) => {
            state.elements.animal.lockedValue += 1
        },

        decrementSun: (state) => {
            if (state.elements.sun.value === 0) {
                return
            }
            state.elements.sun.value -= 1
        },
        decrementFire: (state) => {
            if (state.elements.fire.value === 0) {
                return
            }
            state.elements.fire.value -= 1
        },
        decrementWater: (state) => {
            if (state.elements.water.value === 0) {
                return
            }
            state.elements.water.value -= 1
        },
        decrementEarth: (state) => {
            if (state.elements.earth.value === 0) {
                return
            }

            state.elements.earth.value -= 1
        },
        decrementAir: (state) => {
            if (state.elements.air.value === 0) {
                return
            }

            state.elements.air.value -= 1
        },
        decrementPlant: (state) => {
            if (state.elements.plant.value === 0) {
                return
            }

            state.elements.plant.value -= 1
        },
        decrementAnimal: (state) => {
            if (state.elements.animal.value === 0) {
                return
            }

            state.elements.animal.value -= 1
        },

        decrementLockedSun: (state) => {
            if (state.elements.sun.lockedValue === 0) {
                return
            }
            state.elements.sun.lockedValue -= 1
        },

        decrementLockedFire: (state) => {
            if (state.elements.fire.lockedValue === 0) {
                return
            }
            state.elements.fire.lockedValue -= 1
        },

        decrementLockedWater: (state) => {
            if (state.elements.water.lockedValue === 0) {
                return
            }
            state.elements.water.lockedValue -= 1
        },

        decrementLockedEarth: (state) => {
            if (state.elements.earth.lockedValue === 0) {
                return
            }
            state.elements.earth.lockedValue -= 1
        },

        decrementLockedAir: (state) => {
            if (state.elements.air.lockedValue === 0) {
                return
            }
            state.elements.air.lockedValue -= 1
        },

        decrementLockedPlant: (state) => {
            if (state.elements.plant.lockedValue === 0) {
                return
            }
            state.elements.plant.lockedValue -= 1
        },

        decrementLockedAnimal: (state) => {
            if (state.elements.animal.lockedValue === 0) {
                return
            }
            state.elements.animal.lockedValue -= 1
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

        lockElement: (state) => {
            state.lockElement = true
        },

        unlockElement: (state) => {
            state.lockElement = false
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
    incrementLockedSun,
    incrementLockedFire,
    incrementLockedWater,
    incrementLockedEarth,
    incrementLockedAir,
    incrementLockedPlant,
    incrementLockedAnimal,
    decrementSun,
    decrementFire,
    decrementWater,
    decrementEarth,
    decrementAir,
    decrementPlant,
    decrementAnimal,
    decrementLockedSun,
    decrementLockedFire,
    decrementLockedWater,
    decrementLockedEarth,
    decrementLockedAir,
    decrementLockedPlant,
    decrementLockedAnimal,
    resetElements,
    lockElement,
    unlockElement,
} = elementSlice.actions

export const elementReducerMapping = {
    sun: {
        increment: incrementSun,
        decrement: decrementSun,
        incrementLocked: incrementLockedSun,
        decrementLocked: decrementLockedSun,
    },
    fire: {
        increment: incrementFire,
        decrement: decrementFire,
        incrementLocked: incrementLockedFire,
        decrementLocked: decrementLockedFire,
    },
    water: {
        increment: incrementWater,
        decrement: decrementWater,
        incrementLocked: incrementLockedWater,
        decrementLocked: decrementLockedWater,
    },
    earth: {
        increment: incrementEarth,
        decrement: decrementEarth,
        incrementLocked: incrementLockedEarth,
        decrementLocked: decrementLockedEarth,
    },
    air: {
        increment: incrementAir,
        decrement: decrementAir,
        incrementLocked: incrementLockedAir,
        decrementLocked: decrementLockedAir,
    },
    plant: {
        increment: incrementPlant,
        decrement: decrementPlant,
        incrementLocked: incrementLockedPlant,
        decrementLocked: decrementLockedPlant,
    },
    animal: {
        increment: incrementAnimal,
        decrement: decrementAnimal,
        incrementLocked: incrementLockedAnimal,
        decrementLocked: decrementLockedAnimal,
    },
}

export default elementSlice.reducer
