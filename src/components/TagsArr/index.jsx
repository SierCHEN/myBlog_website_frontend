import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Stack, Chip, Paper, } from '@mui/material'
import { styled } from '@mui/material/styles'
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

import useStyles from './styles'
import { getBlogsBySearch } from '../../redux/web/action'

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const TagsArr = () => {
    const classes = useStyles();
    const [chipData, setChipData] = useState([]);
    const tags = JSON.parse(localStorage.getItem('tags'));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogsBySearch({ tags: chipData.join(',') }))
    }, [chipData])

    const handleChipClick = (e) => {
        Promise.resolve().then(() => {
            setChipData(prevState => [...prevState, e.target.textContent])
            setChipData(prevState => [...new Set(prevState)])
        })
    }

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

    return (
        <>
            <Stack direction="row" spacing={1} className={classes.stack}>
                {
                    tags?.map((item, index) => (
                        <Chip label={item} key={index} style={{ backgroundColor: '#e0e0e0' }} onClick={handleChipClick} />
                    ))
                }
            </Stack>
            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    mb: 4,
                    height: '36px',
                    color: '#f7f8fc'
                }}
                component="ul"
                elevation={0}
            >
                <SavedSearchIcon
                    sx={{ color: '#000000' }}
                    fontSize="large"
                />
                {chipData?.map((data, index) => (
                    <ListItem key={index}>
                        <Chip
                            label={data}
                            onDelete={handleDelete(data)}
                        />
                    </ListItem>
                ))}
            </Paper>
        </>

    )
}

export default TagsArr
