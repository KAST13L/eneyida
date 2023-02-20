import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';

interface TextFieldForUrlPropsType {
    url: string
}

export const TextFieldForUrl: React.FC<TextFieldForUrlPropsType> = ({url}) => {

    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
        >
            <InputBase sx={{ml: 1, flex: 1}} value={url}/>
            <IconButton type="button" sx={{p: '10px'}}>
                <VisibilityIcon/>
            </IconButton>
            <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
            <IconButton color="primary" sx={{p: '10px'}}>
                <CopyToClipboard text={url}
                                 onCopy={() => alert('copied')}>
                    <ContentCopyIcon/>
                </CopyToClipboard>
            </IconButton>

        </Paper>
    );
}