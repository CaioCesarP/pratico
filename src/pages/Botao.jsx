import React from "react";

import { Box, Button, Backdrop, TextField, Divider } from "@mui/material"

const Botao = (info) => {

    const [cliente, setCliente] = React.useState('');
    const [produto, setProduto] = React.useState('');
    const [prazo, setPrazo] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const handleClose = () => { 
        info = [cliente, produto, prazo];
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return(
        <Box 
        style={{ display: 'flex', justifyContent: 'space-around' }}
        >
        <Button
        style={{marginTop: '1rem'}}
        size='large'
        variant='outlined'
        onClick={handleToggle}
        >
            Adicionar
        </Button>
        <Button
        style={{marginTop: '1rem'}}
        size='large'
        variant='outlined'
        >
            Purge
        </Button>
        <Backdrop
        style={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        >
            <Box
            style={{ padding: '30rem 5rem' }}
            fullWidth
            backgroundColor='#687080'
            >
                <TextField color="secondary" fullWidth required value={cliente} label='cliente' variant="filled" onChange={e => setCliente(e.target.value)} />
                <TextField color="secondary" fullWidth required value={produto} label='produto' variant="filled" onChange={e => setProduto(e.target.value)} />
                <TextField color="secondary" fullWidth value={prazo} label='prazo' variant="filled" onChange={e => setPrazo(e.target.value)} />
                <Divider />
                <Button
                style={{ marginLeft: '6rem', marginTop: '1rem' }}
                color='success'
                variant='contained'
                onClick={handleClose}
                >
                    confirmar
                </Button>
            </Box>
            
        </Backdrop>
        </Box>
    )
}


export default Botao ;