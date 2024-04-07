import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { IUser } from '../interfaces/interfaces'

const DetailsCard = ({user}:{user:IUser}) => {
  return (
    <Card sx={{display:'flex'}}>
    <CardMedia
      image={user.avatar}
      title="User avatar"
      sx={{height: 128, width:128}}
    />
    <Box sx={{display:'flex', flexDirection:'column',justifyContent:'space-between', width:'100%'}}>
    <CardContent> 
      <Typography gutterBottom variant="h5" component="h2" style={{whiteSpace:'nowrap'}}>
        {`${user.firstName} ${user.lastName}`}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {user.email}
      </Typography>
    </CardContent>
    </Box>
  </Card>
  )
}

export default DetailsCard