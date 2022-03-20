import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    home: {
        position: 'fixed',
        top: 40,
        right: 'auto',
        bottom: 'auto',
        left: 40,
        width: 50,
        height: 50,
    },
    tabBar: {
        position: 'fixed',
        backgroundColor: 'rgba(247, 248, 252, 0.5)',
        backdropFilter: 'blur(10px)',
        minHeight: 30,
        justifyContent: 'center',
        boxShadow: 'none',
    },
    homeIcon: {
        color: '#757575'
    }
}))