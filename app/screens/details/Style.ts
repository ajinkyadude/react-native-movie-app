import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const DetailsStyles = StyleSheet.create({
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
    paddingHorizontal: 20,
  },
  backIcon: {
    width: '15%',
    height: '100%',
    backgroundColor: '#333333',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    //paddingHorizontal: 20,
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
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  }
});
export default DetailsStyles;
