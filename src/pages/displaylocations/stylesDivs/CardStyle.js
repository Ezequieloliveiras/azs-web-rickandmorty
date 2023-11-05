import { styled } from '@mui/system'

const CardStyle = styled('div')(() => ({
    backgroundColor: 'white',
    border: 'none',
    boxShadow: '0px 0px 5px 1px',
    width: '300px',
    height: '300px',
    margin: '10px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}))

export default CardStyle;