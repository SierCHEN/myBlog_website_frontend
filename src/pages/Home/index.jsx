import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../redux/web/action";

import MainLayout from "../../layout/mainLayout";
import Posts from "../../components/Posts";

const Home = () => {
    const dispatch = useDispatch();
    const { blogs, isLoading } = useSelector(state => state.web)

    useEffect(() => {
        dispatch(getBlogs())
    }, [])

    return (
        <MainLayout>
            <Posts blogs={blogs} isLoading={isLoading} />
        </MainLayout>
    )
};

export default Home;