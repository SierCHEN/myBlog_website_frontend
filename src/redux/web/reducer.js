import * as TYPES from '../types'

const defaultState = {
    isLoading: true,
    blogs: [],
    blog: null,
    tags: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case TYPES.START_LOADING:
            return { ...state, isLoading: true };
        case TYPES.END_LOADING:
            return { ...state, isLoading: false };
        case TYPES.FETCH_ALL:
            localStorage.setItem('blogs', JSON.stringify(action?.payload))
            return { ...state, blogs: action.payload };
        case TYPES.FETCH_BLOG:
            return { ...state, blog: action.payload };
        case TYPES.FETCH_BY_USER:
            return { ...state, blogs: action.payload };
        case TYPES.FETCH_BY_SEARCH:
            return { ...state, blogs: action.payload };
        case TYPES.CREATE:
            return { ...state, blogs: action.payload };
        case TYPES.UPDATE:
            return { ...state, blogs: state.blogs.map((item) => item._id === action.payload._id ? action.payload : item) };
        case TYPES.LIKE:
            return { ...state, blogs: state.blogs.map((item) => item._id === action.payload._id ? action.payload : item) };
        case TYPES.DELETE:
            return { ...state, blogs: state.blogs.filter((item) => item._id !== action.payload) };
        case TYPES.FETCH_TAGS:
            localStorage.setItem('tags', JSON.stringify(action.payload))
            return { ...state, tags: action.payload };
        default:
            return state;
    }
}