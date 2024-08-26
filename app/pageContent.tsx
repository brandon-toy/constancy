'use client'

import Element from '@/components/element'
import Energy from '@/components/energy'
import Navbar from '@/components/navbar'
import SpiritPage from '@/components/spiritPage'
import { RootState } from '@/lib/store'
import { useSelector } from 'react-redux'

export default function PageContent() {
    const spiritTab = useSelector(
        (state: RootState) => state.spirit.clickSpiritTab
    )

    return (
        <div>
            <div className="bg-secondary h-dvh z-100">
                {spiritTab ? (
                    <div>
                        <SpiritPage />
                    </div>
                ) : (
                    <div>
                        <div className="pt-5">
                            <Energy />
                        </div>
                        <Element />
                        <div className="pt-100 pb-100">&nbsp;</div>
                        <div className="pt-100">&nbsp;</div>
                        <div className="pt-100 pb-100">&nbsp;</div>
                    </div>
                )}
            </div>
            <Navbar />
        </div>
    )
}
