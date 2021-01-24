import {
    StyleSheet
} from 'react-native';

const StyleFirst = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    header: {
        flex: 2,
    },
    footer: {
        flex: 1,

    },
    linear: {
        backgroundColor: "yellow",
        borderRadius: 8,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    content: {
        margin: 16
    },
    text: {
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '500',
        color: '#FFFFFF'

    }
})
export default StyleFirst;