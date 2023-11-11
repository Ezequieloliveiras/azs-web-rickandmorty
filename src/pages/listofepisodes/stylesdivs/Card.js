import { styled } from '@mui/system'

const CardStyle = styled('div')(() => ({
  position: 'relative',
  width: '350px',
  height: '300px',
  margin: '10px',
  padding: '10px',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  border: 'none',
  boxShadow: '0px 0px 5px 1px',

  '@media (max-width: 300px)': {
    width: '250px',
  },
}))

export default CardStyle;
