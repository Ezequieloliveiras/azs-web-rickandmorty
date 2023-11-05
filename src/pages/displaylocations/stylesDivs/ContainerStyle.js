import { styled } from '@mui/system'

const ContainerStyle = styled('div')(() => ({
        position: 'relative',
        width: '900px',
        padding: '10px',
        margin: '20px',
        borderRadius: '5px',
        display: 'block',
        justifyContent: 'space-around',
        backgroundColor: '#f3e5f5',
        boxShadow: '0px 0px 5px 1px black'
}))

export default ContainerStyle;