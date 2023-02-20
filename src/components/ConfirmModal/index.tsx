import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextFieldForUrl} from "../TextFieldForUrl";

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

export const ConfirmModal: React.FC<ConfirmModalPropsType> = ({url,onClose,open, title}) => {

    return (
            <Modal
                open={open}
                onClose={onClose}
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                       {title}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        <TextFieldForUrl/>
                    </Typography>
                </Box>
            </Modal>
    );
}