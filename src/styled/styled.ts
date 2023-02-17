import {Paper, styled} from "@mui/material";
import Stack from "@mui/material/Stack";

export const MoviesList = styled(Stack)(() => ({
    overflow: 'auto',
    height: '90%'
}))

export const SelectedMovies = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 135px)',
    position: 'sticky',
    top: theme.spacing(2),
}))
