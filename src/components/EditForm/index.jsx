import React, { useState, useEffect } from "react";
import { Alert } from "@mui/material";
import { TextField, Button, Typography, CardMedia } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { createBlogs, updateBlog } from "../../redux/web/action";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import useStyles from './styles';


const EditForm = () => {
    const { id } = useParams();
    const [postData, setPostData] = useState({
        title: '',
        description: '',
        tags: '',
        selectedFile: '',
        text: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const blog = JSON.parse(localStorage.getItem('blogs')).find(b => b._id === id);//需要，不然刷新就会没有，因为没有getBlogs或getBlog获取后端数据的操作

    useEffect(() => {
        if (blog) {
            setPostData(prevState => ({ ...prevState, title: blog.title, description: blog.description, tags: blog.tags, selectedFile: blog.selectedFile, text: blog.text }));
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (postData.title === '' || postData.description === '' || postData.tags === '' || postData.selectedFile === '' || postData.text === '') {
            console.log(postData)
            alert('Please finish your blog before submitting')
            navigate(0)
        }
        else {
            if (id) {
                dispatch(updateBlog(id, { ...postData, name: user?.result?.name }));
                navigate(`/`);
            } else {

                dispatch(createBlogs({ ...postData, name: user?.result?.name }));
                navigate('/');
            }
        }

    }

    return (
        user ? (
            <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <TextField
                    required
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    className={classes.textField}
                />
                <TextField
                    required
                    name="description"
                    variant="outlined"
                    label="Description"
                    fullWidth
                    multiline={true}
                    rows="5"
                    value={postData.description}
                    onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                    className={classes.textField}
                />
                <TextField
                    required
                    name="tags"
                    variant="outlined"
                    label="Tags (comma separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                    className={classes.textField}
                />

                <Typography variant="body2" display="block" gutterBottom className={classes.fileText}>Choose the cover photo of your article</Typography>
                <div>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                    {
                        postData.selectedFile ? (
                            <CardMedia
                                component="img"
                                src={postData.selectedFile}
                                className={classes.fileSelect}
                            />
                        ) : (
                            <></>
                        )
                    }
                </div>

                <div className={classes.CKEditor}>
                    <Typography variant="h6" display="block" gutterBottom align="center" className={classes.fileText}>Content</Typography>
                    <CKEditor
                        editor={ClassicEditor}
                        data={blog ? blog.text : postData.text}
                        onChange={(e, editor) => {
                            const data = editor.getData();
                            setPostData({ ...postData, text: data })
                        }}
                        onReady={(editor) => {
                            editor.editing.view.change((writer) => {
                                writer.setStyle(
                                    "height",
                                    "540px",
                                    editor.editing.view.document.getRoot()
                                )
                            });
                        }}
                    />
                </div>
                <Button variant="contained" type="submit" fullWidth className={classes.btnSubmit}>Submit</Button>
            </form >
        ) : (
            <Alert severity="error">Please Sign In to create your own blogs and like or comment other's blogs.</Alert>
        )

    )
};

export default EditForm;
