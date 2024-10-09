import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const WishlistStyles = StyleSheet.create({
    body: {
      backgroundColor: '#000000',
      width: '100%',
      height: '100%',
      paddingBottom: 50,
    },
    header: {
      width: '100%',
      height: 50,
      backgroundColor: '#333333',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 20,
    },
    backIcon: {
      width: '15%',
      height: '100%',
      backgroundColor: '#333333',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
    },
    titleHeader: {
      width: '85%',
      height: '100%',
      backgroundColor: '#333333',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    heading: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    wishlist: {
      height: width * 0.06,
      width: width * 0.06,
    },
    movieTitle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      paddingTop: 10,
      paddingHorizontal: 16,
    },
    movieTagline: {
      color: 'white',
      fontSize: 14,
      paddingHorizontal: 16,
    },
    wishlistTitle: {
      flexDirection: 'row',
      backgroundColor: 'rgba(0,0,0,0.2)',
      paddingHorizontal: 10,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageStyle: {
      width: '100%',
      height: 180,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    addToWishlist: {
      height: 15, 
      width: 15,
      marginRight: 10,
    },
    descriptionTitle: {
      color: 'white',
      paddingHorizontal: 16,
      paddingVertical: 20,
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      color: 'white',
      paddingHorizontal: 16,
      paddingBottom: 8,
    },
    itemCard: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        width: '60%',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        flexShrink: 1,
        flexWrap: 'wrap',
        paddingHorizontal: 10,
    },
    banner: {
        width: '100%',

    },
    tagline: {
        color: 'white',
        fontSize: 12,
        paddingHorizontal: 10,
        width: '60%',
        marginTop: 5,
        textAlign: 'justify',
    }
  });
  export default WishlistStyles;