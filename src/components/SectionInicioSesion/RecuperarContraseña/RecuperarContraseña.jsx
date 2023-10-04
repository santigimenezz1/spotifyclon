import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import  '../CrearCuenta/CrearCuenta.css'
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RecuperarContraseña() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={{fontSize:"13px" }} className='button' onClick={handleOpen}>Recuperar contraseña</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='crearCuenta__box' >
          <Typography  id="modal-modal-title" variant="h6" component="h2">
          <h1 className='title__crearCuenta'>
          Recuperar contraseña
          </h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form className='form__user'>
          <TextField  className='input__crearCuenta' id="outlined-basic" label="Email" variant="outlined"  />
          <TextField   className='input__crearCuenta'  id="outlined-basic" label="Password" variant="outlined" />
          <button className='button__form'>ENVIAR</button>
          </form>
          </Typography>
        </div>
      </Modal>
    </div>
  );
}