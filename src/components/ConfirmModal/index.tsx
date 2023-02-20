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
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box sx={style}>
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
                <TextFieldForUrl url={url}/>
            </Box>
        </Modal>
    );
}