import { AppBar, Toolbar, styled } from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

const styleHeader = styled(AppBar)`
 background: #fff;
 height: 70px;
 
`;

const Image = styled('img')({
    height: 55 ,
    margin: 'auto',
    paddingRight: 70
})



const Header = () => {

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <styleHeader>
            <Toolbar>
                <MenuIcon/>
                <Image src={url} alt="logo"/>
            </Toolbar>
        </styleHeader>
    )
}

export default Header;