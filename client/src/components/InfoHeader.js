import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
    background: '#f44336',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    height: 48,
    marginBottom: 30
   
}));

const Image = styled('img')({
    height: 34,
    '&:last-child': {
        margin: '0 50px 0 20px'
    }
})

const Text = styled(Typography)`
font-size: 14px;
font-weight: 300;
margin-left: 50px;
`

const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Container>
            <Text>
                For the best Experience use inshorts app on your smartphone
            </Text>
            <Box style={{ display: 'flex', marginLeft: 'auto' }}>
                <Image src={appleStore} alt='apple' />
                <Image src={googleStore} alt='google' />
            </Box>
        </Container>
    )
}

export default InfoHeader;