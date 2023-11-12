import { styled } from '@mui/system'

const CardStyle = styled('div')(() => ({
  position: 'relative',
  width: '355px',
  height: '300px',
  margin: '10px',
  padding: '10px',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  border: 'none',
  boxShadow: '0px 0px 10px 2px rgba(128, 0, 128, 0.5)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundImage: 'url(https://wallpapercave.com/dwp1x/wp2091530.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: 0.1,
  },

  '@media (max-width: 360px)': {
    width: '300px',
  },
}))

export default CardStyle
