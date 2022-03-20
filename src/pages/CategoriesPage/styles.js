import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    searchField: {
        backgroundColor: '#ffffff',
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        }
    },
    searchBtnWrapper: {
        marginBottom:'72px',
        marginTop:'9px',
        display: "flex",
        justifyContent: 'flex-end',
    },
    searchBtn: {
        width: '180px',
        color: "#8bc34a",
        backgroundColor: "#e0e0e0",
        '&:hover':{
            color: "#f1f8e9",
            backgroundColor:"#8bc34a"
        }
    },
}))