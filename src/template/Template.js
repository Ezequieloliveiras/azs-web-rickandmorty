import Container from '@mui/material/Container'
import { styled } from '@mui/system'
import Header from '../pages/partials/header/Header'
import ControlledCarousel from '../pages/partials/carousel/Carousel'
import Footer from '../pages/partials/footer/Footer'



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
            <StyledContainer style={{ padding: '0px 0px', color:'#6b3fa0' }}>
                {children}
            <Footer />
            </StyledContainer>
        </>
    )
}



export default Template