import * as api from '../../utils/axios';
import * as TYPES from '../types';

export const getBlogs = () => async (dispatch) => {
    try {
        dispatch({ type: TYPES.START_LOADING })
        const { data } = await api.fetchBlogs();
        dispatch({
            type: TYPES.FETCH_ALL,
            payload: data
        });
        dispatch({ type: TYPES.END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

export const getBlog = (id) => async (dispatch) => {
    try {
        dispatch({ type: TYPES.START_LOADING })
        const { data } = await api.fetchBlog(id);
        dispatch({
            type: TYPES.FETCH_BLOG,
            payload: data
        });
        dispatch({ type: TYPES.END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

export const getBlogsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: TYPES.START_LOADING })
        const { data: { data } } = await api.fetchBlogsBySearch(searchQuery);
        dispatch({
            type: TYPES.FETCH_BY_SEARCH,
            payload: data
        });
        dispatch({ type: TYPES.END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

export const getBlogsByUser = (name) => async (dispatch) => {
    try {
        dispatch({ type: TYPES.START_LOADING })
        const { data: { data } } = await api.fetchBlogsByUser(name);
        dispatch({
            type: TYPES.FETCH_BY_USER,
            payload: data
        });
        dispatch({ type: TYPES.END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

export const createBlogs = (blog) => async (dispatch) => {
    try {
        dispatch({ type: TYPES.START_LOADING })
        const { data } = await api.createBlog(blog);
        dispatch({
            type: TYPES.CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateBlog = (id, blog) => async (dispatch) => {
    try {
        const { data } = await api.updateBlog(id, blog);
        dispatch({
            type: TYPES.UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteBlog = (id) => async (dispatch) => {
    try {
        await api.deleteBlog(id);
        dispatch({
            type: TYPES.DELETE,
            payload: id
        })
    } catch (error) {

    }
}

export const likeBlog = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeBlog(id);
        dispatch({
            type: TYPES.LIKE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const getTags = () => async (dispatch) => {
    try {
        dispatch({ type: TYPES.START_LOADING })
        const { data } = await api.fetchBlogs();

        let arr = []
        data.map((item) => {
            while (item.tags.length !== 0) {
                arr.push(item.tags.pop())
            }
        })
        const tagsArray = [...new Set(arr)]

        dispatch({
            type: TYPES.FETCH_TAGS,
            payload: tagsArray
        });
        
        dispatch({ type: TYPES.END_LOADING })
    } catch (error) {
        console.log(error);
    }
}

