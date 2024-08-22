import Element from '@/components/element'
import Energy from '@/components/energy'
import ResetButton from '@/components/resetbutton'
import StoreProvider from './StoreProvider'
import LockButton from '@/components/lockbutton'

export default function Page() {
    return (
        <StoreProvider>
            <Energy />
            <Element />
            <div className="flex items-center justify-center">
                <div className="flex-1" />
                <ResetButton />
                <div className="flex-1">
                    <LockButton />
                </div>
            </div>
        </StoreProvider>
    )
}
