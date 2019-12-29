import { StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingBottom: 20,
        paddingTop: 20
    },
    description: {
        textAlignVertical: 'center',
        textAlign: 'justify',
        fontSize: 20,
        marginBottom: 20
    },
    card: {
        width: '90%',
        marginLeft: '5%',
        marginTop: 10,
        backgroundColor: '#000'
    }
});
export default HomeStyles;