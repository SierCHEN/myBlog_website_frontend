import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import SearchBar from "material-ui-search-bar"

import { getBlogsBySearch } from '../../redux/web/action'
// import useStyles from './styles'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SearchInput = () => {
    const query = useQuery();
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const classes = useStyles();

    const handleKeyPress = (e) => {
        searchPost()
    }

    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getBlogsBySearch({ search, tags: tags.join(',') }))
            navigate(`/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        } else {
            navigate('/')
        }
    }

    return (
        <>
            <SearchBar
                style={{ backgroundColor: '#fafafa', height: '36px' }}
                value={search}
                onChange={(e) => { setSearch(e) }}
                onRequestSearch={handleKeyPress}
            />
        </>
    )
}

export default SearchInput
