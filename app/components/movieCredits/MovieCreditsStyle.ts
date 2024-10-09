import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const CreditStyle = StyleSheet.create ({
    categoryTitle: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 20,
        fontWeight: 'bold'
    },
    movieCard: {
        width: width*0.33,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    cardImage: {
        height: height*0.2,
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'flex-end',
        
    },
    imageTitle: {
        paddingHorizontal: 3, 
        width: '100%',
        marginTop: 7
    },
    imageCharacter: {
        fontSize: 11,
        paddingVertical: 7,
        paddingHorizontal: 3,
        flexWrap: "wrap",
        flexShrink: 1,
        width: '100%',
        color: '#FFFFFFCC',
    },
    categoryTitle: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 20,
        fontWeight: 'bold'
    }
});

export default CreditStyle;
