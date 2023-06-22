import Header from '../../Components/Header/Header'
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card'



function Home() {
  
  return (
    
      <Card
        sx={{
          display: 'flex',
          margin:'15px auto',
          justifyItems: 'center',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          width: '35vw',
          height: '35vw',
        }}
      >
        <CardMedia
          component="img"
          image="../../../public/sangre .png"
          alt="sangre"
        />
      </Card>
    
  )
}

export default Home