import Container from '@mui/material/Container'
import { styled } from '@mui/system'
import Header from '../pages/partials/header/Header'
import ControlledCarousel from '../pages/partials/carousel/Carousel'




const StyledContainer = styled(Container)(() => ({
    minWidth: '100%',
    height: '100vh',
    display: 'block',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
}))

const Template = ({ children }) => {

    return (
        <>
            <Header />
            <ControlledCarousel />
            <StyledContainer style={{ padding: '0px 0px' }}>
                {children}
            </StyledContainer>
        </>
    )
}



export default Template