import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    header: {
        paddingVertical: 10,
        display: "flex",
        width: "100%",
        height: "12%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 45,
        backgroundColor: '#fff',



    },

    text: {
        fontSize: 15,
    },
    textBold: {
        fontWeight: "bold",
        fontSize: 25,
    },

    buttons: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "6%"
    },

    btn: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 8,
    },



});

export { styles }