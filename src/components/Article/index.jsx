import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Container, CardMedia, Avatar, Typography, Grid, Divider, CircularProgress } from "@mui/material";
import { Button } from "@material-ui/core";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import moment from 'moment';
import parser from 'html-react-parser';
import useStyles from './styles';
import { deleteBlog, likeBlog, getBlog } from "../../redux/web/action";

import img from '../../assets/cardImg_1.jpg';



const Article = () => {
    const { id } = useParams();
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { blog, isLoading } = useSelector(state => state.web);
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        dispatch(getBlog(id));
    }, [])

    if (!blog) return null;

    if (isLoading) {
        return <CircularProgress className={classes.circularProgress} />
    }

    const handleLikeClick = () => {
        dispatch(likeBlog(id));
        navigate(0)
    }

    const handleEditClick = () => {
        navigate(`/write/${id}`);
    }

    const handleDeleteClick = () => {
        dispatch(deleteBlog(id));
        navigate('/');
    }

    const Likes = () => {
        if (blog.likes.length > 0) {
            return blog.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <>
                        <FavoriteIcon sx={{ fontSize: 30 }} />
                        <Typography>
                            &nbsp;{blog.likes.length > 2 ? `You and ${blog.likes.length - 1} others` : `${blog.likes.length} like${blog.likes.length > 1 ? 's' : ''}`}
                        </Typography>
                    </>
                ) : (
                    <><FavoriteBorderIcon sx={{ fontSize: 30 }} />
                        <Typography>
                            &nbsp;{blog.likes.length} {blog.likes.length === 1 ? 'Like' : 'Likes'}
                        </Typography>
                    </>
                );
        }
        return (<>
            <FavoriteBorderIcon sx={{ fontSize: 30 }} />
            <Typography>
                &nbsp;Like
            </Typography>
        </>);
    };

    return (
        <>
            <CardMedia
                component="img"
                src={blog.selectedFile ? blog.selectedFile : img}
            />
            <Container maxWidth="sm" >
                <Typography variant="h3" gutterBottom component="div" className={classes.title}>
                    {blog.title}
                </Typography>
                <Typography variant="subtitle2" gutterBottom component="div" className={classes.description}>
                    {blog.description}
                </Typography>
                <Grid container justifyContent="flex-start" alignItems="center">
                    <Avatar sx={{ width: 48, height: 48, mr: 1 }} className={classes.avatar}>{blog.name.charAt(0)}</Avatar>
                    <Typography sx={{ fontWeight: 600, color: '#9e9e9e' }}>{blog.name}</Typography>
                </Grid>
                <Typography component='span' variant='body1' display="block" sx={{ mt: 6, mb: 6, lineHeight: 1.8, fontFamily: 'Segoe UI' }}>
                   {parser(blog.text)}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mb: 3 }} className={classes.createTime}>
                    {moment(blog.createdAt).fromNow()}
                </Typography>
                <Divider />
                <Grid container justifyContent="space-between" alignItems="center" sx={{ my: 3 }}>
                    <Grid item>
                        <Button disabled={!user?.result} color="primary" onClick={handleLikeClick}>
                            <Likes />
                        </Button>
                    </Grid>
                    <Grid item>
                        {(user?.result?.googleId === blog?.creator || user?.result?._id === blog?.creator) && (
                            <>
                                <Button onClick={handleEditClick}>
                                    <AutoFixHighIcon sx={{ fontSize: 30, color: '#558b2f' }} />
                                </Button>
                                <Button onClick={handleDeleteClick}>
                                    <DeleteIcon sx={{ fontSize: 30, color: '#558b2f' }} />
                                </Button>
                            </>
                        )}

                    </Grid>
                </Grid>
            </Container >
        </>
    )
};

export default Article;