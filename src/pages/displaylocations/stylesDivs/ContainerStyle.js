// ContainerStyle.jsx
import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'

const ContainerStyle = styled(Grid)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  padding: '10px',
  margin: '20px 0px',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f3e5f5',
  boxShadow: '0px 0px 5px 1px black',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}))

export default ContainerStyle

