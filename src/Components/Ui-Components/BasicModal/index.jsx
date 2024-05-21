import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MuiDeleteForeverOutlinedIcon } from '../../Mui-Icons';
import { MuiBox,MuiButton } from '../../Mui-Component';
import { Delete, patch } from '../../../Service/ApiService';
import { useDispatch } from 'react-redux';
import { newValue } from '../../../store/slice/DataRefresh';

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

export default function BasicModal({emailProp}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const delValue = ()=>{
    Delete(`v1/admin`,{email:emailProp}).then((res)=>{
        handleClose()
        console.log('del response',res)
        alert(res.message)
        dispatch(newValue())

    })
   
    console.log({email:emailProp})
  }

  return (
    <>
      <Button onClick={handleOpen}><MuiDeleteForeverOutlinedIcon className='DrawerContent Notification' id='delContent' /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='TableHead ThColor' sx={style}>
          <Typography className='Notification'>
          Remove Admin User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Do you want to remove the admin user - Kevin Finch? 
          </Typography>
          
          <MuiBox className='Title'>
                  <MuiButton
                    type="submit"
                    className="formik2BtnMargin color"
                    variant="contained"
                    onClick={delValue}
                  >
                    Delete
                  </MuiButton>
                  <MuiButton
                    type="submit"
                    className=""
                    variant="outlined"
                    onClick={()=>{handleClose()}}
                  >
                   Cancel
                  </MuiButton>

                  </MuiBox>

        </Box>
      </Modal>
    </>
  );
}
function BasicModal2({delFunc}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const delValue = ()=>{
        delFunc()
        handleClose()
        dispatch(newValue())

 
  }

  return (
    <>
      <Button onClick={handleOpen}>
        <MuiDeleteForeverOutlinedIcon className='DrawerContent Notification contentDel' id='delContent' />
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='TableHead ThColor' sx={style}>
          <Typography className='Notification'>
          Remove Admin User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Do you want to remove the admin user - Kevin Finch? 
          </Typography>
          
          <MuiBox className='Title dontMulti3dAccount'>
                  <MuiButton
                    type="submit"
                    className="formik2BtnMargin color"
                    variant="contained"
                    onClick={delValue}
                  >
                    Delete
                  </MuiButton>
                  <MuiButton
                    type="submit"
                    className=""
                    variant="outlined"
                    onClick={()=>{handleClose()}}
                  >
                   Cancel
                  </MuiButton>

                  </MuiBox>

        </Box>
      </Modal>
    </>
  );
}
function BasicModal3({delFunc,id,liveIcon}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const LiveFunc = ()=>{
        patch(`v1/admin/contents/status/${id}`,{status: 5}).then((res)=>{
          console.log('res',res)
        })
        // handleClose()
        // dispatch(newValue())

 
  }

  return (
    <>
      <Button onClick={handleOpen}>
       {liveIcon}
        
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='TableHead ThColor' sx={style}>
          <Typography className='Notification'>
          Want to live 
          </Typography>
          <MuiBox className='Title dontMulti3dAccount'>
                  <MuiButton
                    type="submit"
                    className="formik2BtnMargin color"
                    variant="contained"
                    onClick={LiveFunc}
                  >
                    Live
                  </MuiButton>
                  <MuiButton
                    type="submit"
                    className=""
                    variant="outlined"
                    onClick={()=>{handleClose()}}
                  >
                   Cancel
                  </MuiButton>

                  </MuiBox>

        </Box>
      </Modal>
    </>
  );
}

export{BasicModal2,BasicModal3}