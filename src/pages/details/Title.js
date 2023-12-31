import Typography from '@mui/material/Typography'

function TitleDetails() {
    return (
        <div style={{
            padding: '20px',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <Typography variant="h6"
                component="h4"
                align="center"
                sx={{ marginBottom: '20px', margin: '100px 0px 20px', fontSize: '30px' }}>
                Episode Details
            </Typography>
        </div>
    )
}

export default TitleDetails
