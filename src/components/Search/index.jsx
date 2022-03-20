import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import ChipInput from 'material-ui-chip-input'
import { Box, Button, TextField } from '@material-ui/core'

import { getBlogsBySearch } from '../../redux/web/action'
import useStyles from './styles'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Search = () => {
    const query = useQuery();
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();

    const handleKeyPress = (e) => {
        if (e.target.value === 13) {
            searchPost()
        }
    }

    const handleAdd = (tag) => setTags([...tags, tag])

    const handleDelete = (tagDelete) => setTags(tags.filter((tag) => tag !== tagDelete));

    const searchPost = () => {
        if (search.trim() || tags) {
            console.log(tags)
            dispatch(getBlogsBySearch({ search, tags: tags.join(',') }))
            navigate(`/categories/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        } else {
            navigate('/categories')
        }
    }

    return (
        <div>
            <TextField
                name='search'
                variant='outlined'
                label="Search Blogs"
                className={classes.searchField}
                fullWidth
                size="small"
                onKeyPress={handleKeyPress}
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
            />
            <ChipInput
                style={{ margin: '18px 0' }}
                className={classes.searchField}
                inputStyle={{ maxHeight: '30px' }}
                fullWidth
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags"
                variant='outlined'
            />
            <Box className={classes.searchBtnWrapper}>
                <Button onClick={searchPost} variant="contained" className={classes.searchBtn}>Search</Button>
            </Box>
        </div>
    )
}

export default Search
