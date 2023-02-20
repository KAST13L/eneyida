import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextFieldForUrl} from "../TextFieldForUrl";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

interface ConfirmModalPropsType {
    open: boolean,
    url: string,
    title: string,
    onClose: (isOpen: boolean) => void
}

export const ConfirmModal: React.FC<ConfirmModalPropsType> = ({
                                                                  url,
                                                                  onClose,
                                                                  open,
                                                                  title
                                                              }) => {

    const [isOpenAlert, setIsOpenAlert] = useState(false)

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography sx={{mt: 2}}>
                    <TextFieldForUrl url={url}/>
                </Typography>
                <Box sx={{width: '100%'}}>
                    <Collapse in={isOpenAlert}>
                        <Alert
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setIsOpenAlert(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit"/>
                                </IconButton>
                            }
                            sx={{mb: 2}}
                        >
                            Close me!
                        </Alert>
                    </Collapse>
                </Box>
            </Box>
        </Modal>
    );
}