import Header from '../../Components/Header/Header'
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card'



function Home() {
  
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          minHeight: '100vh',
        }}
      >
        <Card>
          <CardMedia

            component="img"
            height="850"
            image="../../../public/sangre .png"
            alt="sangre"

          />
        </Card>
      </Box>
    </>
  )
}

export default Home