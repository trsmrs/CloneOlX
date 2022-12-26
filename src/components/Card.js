import {
  Button,
  Card as CardMui,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material'


const Card = ({ image, title, subtitle, actions }) => {

  return (

    <CardMui>
      <CardMedia sx={{ paddingTop: "56%" }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant='h5' component='h2'>
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
      </CardContent>
      {actions
        ?
        (
          <CardActions>
            {actions}
          </CardActions>
        ) : null
      }
    </CardMui>



  )
}
export default Card