import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TagsArr from '../../components/TagsArr'
import MainLayout from '../../layout/mainLayout'
import Posts from '../../components/Posts'

import { getTags } from '../../redux/web/action'

const CategoriesPage = () => {
    const { blogs, isLoading } = useSelector(state => state.web)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTags())
    }, [])

    return (
        <MainLayout>
            <TagsArr />
            <Posts blogs={blogs} isLoading={isLoading} />
        </MainLayout>
    )
}

export default CategoriesPage
