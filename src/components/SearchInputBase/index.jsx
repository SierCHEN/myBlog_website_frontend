import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { Paper, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { getBlogsBySearch } from '../../redux/web/action'
// import useStyles from './styles'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const SearchInputBase = () => {
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
        <Paper
            component="form"
            sx={{ m: '2px 4px', display: 'flex', alignItems: 'center' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
            />
            <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handleKeyPress}>
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchInputBase