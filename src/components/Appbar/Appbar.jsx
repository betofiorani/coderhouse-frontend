import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink, useNavigate } from 'react-router-dom';
import './Appbar.css'
import { Modal } from '@mui/material';
import ShoppingCartDetail from '../ShoppingCartDetail/ShoppingCartDetail';
import useAuth from '../../hooks/useAuth'
import { logout } from '../../services/loginService';
import Swal from 'sweetalert2';

const pages = [
  {title:'Products', path:'productos'}, 
  {title:'Chat', path:'chat'}, 
  {title:"ABM Products", path:'admin/productos'},
  {title:'Faker Products', path:'faker-productos'},
  {title:'Info App', path:'info'},
  {title:'randoms', path:'random'},
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const modalMessageStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const Appbar = ({shoppingCart, shoppingCartHandlers}) => {

  const auth = useAuth()
  const settings = [
    {label:'Profile',clickHandler: () => console.log("soy profile")},
    {label:'Account',clickHandler: () => console.log("soy account")}, 
    {label:'Logout',clickHandler: async () => {
      const response = await logout()
      setOpenMessage({open: true})
    }}
  ];  

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [cartInfo, setCartInfo] = useState({monto: 0, cantidad:0})
  const [openModal, setOpenModal] = useState({open:false});
  const [openMessage, setOpenMessage] = useState({open:false});



  useEffect(() => {
    
    const buildCartInfo = async () => {
      if(!shoppingCart){
        setCartInfo({monto: 0, cantidad:0})
      } else {
        let monto = 0
        let cantidad = 0
        await shoppingCart.productos.forEach(producto => {
          monto = monto*1 + producto.productoId.price*1
          cantidad = cantidad + 1
        })
        setCartInfo({monto, cantidad})
      }
    } 

    buildCartInfo()

  }, [shoppingCart])

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenShoppingCart = () => setOpenModal({open:true});
  const handleModalClose = () => setOpenModal({open:false});
  
  const handleMessageClose = () => {
    setOpenMessage({open:false})
    auth.logout()
    navigate('/login')
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              BETO COMMERCE
            </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <NavLink
                    className="navlink"
                    to={`/${page.path}`}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => navigate(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex' }}>
            <div className='shopping-cart'>
              <IconButton onClick={handleOpenShoppingCart} sx={{ p: 0 }}>
                <ShoppingCartIcon />
                <span className='cantidad-carrito'>{cartInfo.cantidad}</span>
              </IconButton>
              <span>${cartInfo.monto}</span>
            </div>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.label} onClick={() => setting.clickHandler()}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Modal
        open={openModal && openModal.open}
        onClose={handleModalClose}
      >
        <Box sx={modalStyle}>
          <ShoppingCartDetail shoppingCart={shoppingCart} handleModalClose={handleModalClose} shoppingCartHandlers={shoppingCartHandlers} />
        </Box>       
      </Modal>
      <Modal
        open={openMessage && openMessage.open}
        onClose={handleMessageClose}
      >
        <Box sx={modalMessageStyle}>
          <p className='logout-msg'>see you later <span className='logout-username'>{auth && auth.user?.username}</span></p>
          <div className='logout-btn'>
            <Button variant="contained" onClick={() => handleMessageClose()}>
              Salir
            </Button>
          </div>
        </Box>       
      </Modal>
    </AppBar>
  );
};
export default Appbar;