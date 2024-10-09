import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const HomeStyles = StyleSheet.create ({
    body: {
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#333333',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    heading: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    wishlist: {
        height: width*0.06,
        width: width*0.06,
    },
    trendingMovieCard: {
        height: height*0.22,
        width: width*0.95,
        borderRadius: 20,
        paddingHorizontal: 10
    },
    trendingCardImage: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'flex-end',
        
    },
    trendingImageTitle: {
        backgroundColor: 'rgba(0,0,0,0.2)', 
        paddingHorizontal: 10, 
        width: '100%',
        height: 20
    },
    categoryTitle: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 20,
        fontWeight: 'bold'
    },

    movieCard: {
        
        width: width*0.4,
        borderRadius: 20,
        paddingHorizontal: 10
    },
    cardImage: {
        height: height*0.26,
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'flex-end',
        
    },
    imageTitle: {
        backgroundColor: 'rgba(0,0,0,0.2)', 
        paddingHorizontal: 10, 
        width: '100%',
        marginTop: 7
    },
    categoryTitle: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 20,
        fontWeight: 'bold'
    }
});

export default HomeStyles;