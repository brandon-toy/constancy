import PageContent from './pageContent'
import StoreProvider from './StoreProvider'

export default function Page() {
    return (
        <StoreProvider>
            <PageContent />
        </StoreProvider>
    )
}
