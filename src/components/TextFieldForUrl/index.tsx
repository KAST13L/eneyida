import * as React from 'react';
import {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import {CONFIRM_TIMEOUT} from "../../variables";

interface TextFieldForUrlPropsType {
    url: string
}

export const TextFieldForUrl: React.FC<TextFieldForUrlPropsType> = ({url}) => {

    const [isOpenAlert, setIsOpenAlert] = useState(false)

    useEffect(()=>{
        let timer: NodeJS.Timeout;
        if (isOpenAlert) {
            timer = setTimeout(() => {
                setIsOpenAlert(false)
            }, CONFIRM_TIMEOUT)
        }
        return () => clearTimeout(timer)
    },[isOpenAlert])

    return (
        <>
            <Paper
                component="form"
                sx={{m:'5px 0', p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
            >
                <InputBase sx={{ml: 1, flex: 1}} value={url}/>
                <IconButton href={url} target={'_blank'} sx={{p: '10px'}}>
                    <VisibilityIcon/>
                </IconButton>
                <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                <IconButton color="primary" sx={{p: '10px'}}>
                    <CopyToClipboard text={url}
                                     onCopy={() => setIsOpenAlert(true)}>
                        <ContentCopyIcon/>
                    </CopyToClipboard>
                </IconButton>
            </Paper>
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
                    >
                        Copied!
                    </Alert>
                </Collapse>
            </Box>
        </>
    );
}