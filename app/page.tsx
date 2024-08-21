import Element from '@/components/element'
import Energy from '@/components/energy'
import ResetButton from '@/components/resetbutton'
import StoreProvider from './StoreProvider'

export default function Page() {
    return (
        <StoreProvider>
            <Energy />
            <Element />
            <ResetButton />
        </StoreProvider>
    )
}
