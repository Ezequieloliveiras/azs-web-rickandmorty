import { styled } from '@mui/system'

const ContentStyle = styled('div')(() => ({
        position:'relative',
        display:'flex',
        top: '10px',
        width: 'auto',
        height: '150px',
        justifyContent:'center',
        flexDirection:'column',
        fontSize:'15px'
}))

export default ContentStyle;