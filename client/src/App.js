
import { Box } from '@mui/material';
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';
import styled from '@emotion/styled';


const Container = styled(Box)(({theme}) => ({
  width: '60%',
  margin: '40px auto 0 auto',
  
}));

function App() {
  return (

    <>
      <Box>
        <Header />
        <Container>
          <InfoHeader />
          <Articles/>
        </Container>
      </Box>
    </>
  );
}

export default App;
