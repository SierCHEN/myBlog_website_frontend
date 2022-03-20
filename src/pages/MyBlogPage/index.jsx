import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsByUser } from "../../redux/web/action";
import Alert from '@mui/material/Alert';

import MainLayout from "../../layout/mainLayout";
import Posts from "../../components/Posts";

const MyBlogPage = () => {
    const dispatch = useDispatch();
    const { blogs, isLoading } = useSelector(state => state.web)
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        dispatch(getBlogsByUser(user?.result.name))
    }, [])

    return (
        <MainLayout>
            {user ? (<Posts blogs={blogs} isLoading={isLoading} />
            ) : (
                <Alert severity="error">Plesae sign in to check and edit your blog</Alert>
            )}

        </MainLayout>
    )
}

export default MyBlogPage
