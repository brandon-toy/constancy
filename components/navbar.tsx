'use client'

import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'
import LockButton from './lockbutton'
import ResetButton from './resetbutton'
import SpiritSelectionButton from './spiritSelectionButton'

export default function Navbar() {
    const spiritTab = useSelector(
        (state: RootState) => state.spirit.clickSpiritTab
    )

    return (
        <div>
            {spiritTab ? (
                <div className="btm-nav mt-1000 z-0">
                    <SpiritSelectionButton />
                </div>
            ) : (
                <div className="btm-nav mt-1000 z-0">
                    <LockButton />
                    <ResetButton />
                    <SpiritSelectionButton />
                </div>
            )}
        </div>
    )
}
