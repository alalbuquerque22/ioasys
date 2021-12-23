import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        width: width,
        height: height,
    },
    logoContent: {
        // marginTop: height * 0.3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    logo: {
        width: width * 0.4,
    },
    title: {
        width: width * .6,
        fontFamily: 'Heebo_200ExtraLight',
        fontSize: width * 0.1,
        color: '#fff'
    },
    formContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxInput: {
        marginTop: width * 0.05,
        width: width * 0.9,
        height: width * 0.2,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.32)',
    },
    label: {
        fontFamily: 'Heebo_300Light',
        color: '#fff',
        fontSize: width * 0.04,
        marginLeft: width * 0.05,
        marginTop: width * 0.02,
    },
    input: {
        marginLeft: width * 0.05,
        marginTop: width * 0.02,

        color: '#fff',
        fontFamily: 'Heebo_400Regular',
    },
    boxButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        top: 0,
        width: width * 0.4,
        height: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: width * 0.3,
        height: width * 0.14,
        backgroundColor: '#fff',
        borderRadius: width * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'Heebo_400Regular',
        fontSize: width * 0.06,
        color: '#B22E6F',
    }
})

export default styles;