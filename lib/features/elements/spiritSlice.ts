import { createSlice } from '@reduxjs/toolkit'

const spiritSlice = createSlice({
    name: 'spirit',
    initialState: {
        clickSpiritTab: false,
    },
    reducers: {
        clickSpiritTab: (state) => {
            state.clickSpiritTab = !state.clickSpiritTab
        },
    },
})

export const { clickSpiritTab } = spiritSlice.actions
export default spiritSlice.reducer
