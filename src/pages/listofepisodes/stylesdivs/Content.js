import { styled } from '@mui/system'

const ContentStyle = styled('div')(() => ({
        position:'relative',
        display:'flex',
        width: 'auto',
        height: '150px',
        justifyContent:'center',
        flexDirection:'column',
        top: '10px',
        fontSize:'15px'
}))

export default ContentStyle;