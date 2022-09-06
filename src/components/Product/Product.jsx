import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Product.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1976d2' : '#1976d2',
  ...theme.typography.body2,
  padding: '3px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Product = ({producto}) => {
  return (
    <Grid item xs={6}>
      <Item>
        <Card sx={{ width: '100%' }}>
          <CardHeader
            className="card-header"
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={producto.nombre}
            subheader={producto.codigo}
          />
          <CardActionArea>
            <div className='card-image'>
              <img src={producto.foto} alt={producto.nombre}/>
            </div>
            <CardContent className='card-content'>
              <Typography className="card-description" variant="body2" color="text.secondary">
                {producto.descripcion}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='card-actions'>
            <span className='card-precio'>${producto.precio}</span>
            <Button 
              variant='contained' 
              color="primary" 
              startIcon={<AddShoppingCartIcon />}
              >
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </Item>
    </Grid>
  )
}

Product.propTypes = {}

export default Product