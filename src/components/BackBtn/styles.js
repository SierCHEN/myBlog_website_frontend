import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    back: {
        position: 'fixed',
        top: 40,
        right: 'auto',
        bottom: 'auto',
        left: 40,
        width: 50,
        height: 50,
        color: '#f7f8fc',
        backgroundColor: '#3f51b5'
    },
    tabBar: {
        position: 'fixed',
        backgroundColor: 'rgba(247, 248, 252, 0.5)',
        backdropFilter: 'blur(10px)',
        minHeight: 30,
        justifyContent: 'center',
        boxShadow: 'none',
    },
    backIcon: {
        color: '#000000'
    },
    home: {
        position: 'fixed',
        top: 110,
        right: 'auto',
        bottom: 'auto',
        left: 40,
        width: 50,
        height: 50,
        color: '#f7f8fc',
        backgroundColor: '#3f51b5'
    },
    homeIcon: {
        marginLeft: '15px',
        color: '#000000'
    }
}))