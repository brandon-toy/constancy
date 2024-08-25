import Element from '@/components/element'
import Energy from '@/components/energy'
import ResetButton from '@/components/resetbutton'
import StoreProvider from './StoreProvider'
import LockButton from '@/components/lockbutton'

export default function Page() {
    return (
        <StoreProvider>
            <div className="h-dvh z-100">
                <div className="pt-5">
                    <Energy />
                </div>
                <Element />
                <div className="pt-100 pb-100">&nbsp;</div>
                <div className="pt-100">&nbsp;</div>
                <div className="pt-100 pb-100">&nbsp;</div>
            </div>
            <div className="btm-nav mt-1000 z-0">
                <ResetButton />
                <LockButton />
            </div>
        </StoreProvider>
    )
}
