import React from "react";
import { useNavigate } from "react-router-dom";
import { Fab, AppBar, Toolbar, IconButton } from "@material-ui/core";
import useStyles from './styles';
import HomeIcon from '@mui/icons-material/Home';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const HomeBtn = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        isMobile ? (
            <AppBar position="absolute" className={classes.tabBar}>
                <Toolbar variant="dense">
                    <IconButton edge="start" sx={{ mr: 2 }} className={classes.homeIcon} onClick={() => navigate('/')}>
                        <HomeIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        ) : (
            <Fab classes={{ root: classes.home }} onClick={() => navigate('/')}>
                <HomeIcon />
            </Fab>
        )
    )
};

export default HomeBtn;