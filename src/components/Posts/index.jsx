import React from "react";

import { Typography, CircularProgress } from "@mui/material";
import { Masonry } from '@mui/lab';
import useStyles from './styles';

import Post from "./Post";

const Posts = ({ blogs, isLoading }) => {
    const classes = useStyles();

    if (!blogs && !isLoading) return (
        <Typography className={classes.result}>No Blogs</Typography>
    )

    return (
        isLoading ? <CircularProgress className={classes.circularProgress} /> : (
            <>
                <Typography className={classes.result}>{blogs.length}&nbsp;result</Typography>
                <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 2, sm: 3 }} sx={{ maxWidth: '852px' }}>
                    {blogs.map((post) => (
                        <Post key={post._id} post={post} />
                    ))}
                </Masonry>
            </>

        )
    )
};

export default Posts;