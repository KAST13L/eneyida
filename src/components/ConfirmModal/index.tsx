import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextFieldForUrl} from "../TextFieldForUrl";
import {FacebookIcon, FacebookShareButton} from "react-share";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    minWidth: '400px',
    display: 'flex-row',
    justifyContent: 'center',
    alignItems: 'center',
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
                <Box>
                    <Typography variant="h6">
                        Title of the movies list:
                    </Typography>
                    <Typography variant="h4" sx={{textAlign: 'center', m: '5px 0'}}>
                        {title}
                    </Typography>
                </Box>

                <Box>
                    <Typography variant='h6'>
                        Share this link by:
                    </Typography>
                    <Box sx={{m: '3px 0', textAlign: 'center',}}>
                        <FacebookShareButton url={url} children={<FacebookIcon round
                                                                               size={'40px'}/>}/>
                        <FacebookShareButton url={url} children={<FacebookIcon round
                                                                               size={'40px'}/>}/>
                    </Box>
                </Box>

                <Box>
                    <Typography variant='h6'>
                        Or copy link:
                    </Typography>
                    <Box sx={{textAlign: 'center'}}>
                        <TextFieldForUrl url={url}/>
                    </Box>
                </Box>

            </Box>
        </Modal>
    );
}