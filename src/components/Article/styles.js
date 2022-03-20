import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    title: {
        textAlign: 'center',
        fontWeight: '600',
        paddingTop: '30px',
        paddingBottom: '10px',
    },
    description: {
        textAlign: 'center',
        color: '#bdbdbd',
        paddingTop: '10px',
        paddingBottom: '30px',
        fontStyle: 'italic',
    },
    avatar:{
        marginTop: '10px',
        marginBottom: '10px',
    },
    createTime:{
        color: '#bdbdbd',
        fontStyle: 'italic',
    },
    circularProgress:{
        color: '#e0e0e0',
        position: 'fixed',
        top: '40%',
        right: '50%',
    },
}))