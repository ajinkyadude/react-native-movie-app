import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';

import getMovieList from '../../api/methods/getMovieList';
import getTrendingList from '../../api/methods/getUpcomingMovieList';
import ApiConstants from '../../api/ApiConstants';
import WishlistStyles from './Style';
import wishlist from '../../assets/wishlist.png';
import backIcon from '../../assets/back_arrow.png';
import {
  addToWishlist,
  getWishlist,
  clearWishlist,
} from '../../storage/WishlistManager';

const Wishlist = ({route, navigation}) => {
  const [wishlistData, setWishlistData] = useState([]);
  
  const fetchWishlistData = async () => {
    const jsonStr = await getWishlist();
    const data = JSON.parse(jsonStr);
    const dataArr = data.map(item => {
      return JSON.parse(item);
    });
    if (dataArr.length > 0) {
      setWishlistData(dataArr);
    }
  };

  function reloadData() {
    fetchWishlistData();
  }

  useEffect(() => {
    fetchWishlistData();
  }, []);
  return (
    <SafeAreaView style={WishlistStyles.body}>
      <View>
        <StatusBar barStyle={'light-content'} />
        <View style={WishlistStyles.header}>
          <View style={WishlistStyles.backIcon}>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <Image source={backIcon} style={WishlistStyles.wishlist} />
            </TouchableOpacity>
          </View>
          <View style={WishlistStyles.titleHeader}>
            <Text style={WishlistStyles.heading}>Wishlist</Text>
          </View>
        </View>
        <FlatList
          data={wishlistData}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => {
                navigation.push('movieDetails',{
                  movieId: item.id,
                  item: item,
                  reload: reloadData
                });
              }}>
                <View style={WishlistStyles.itemCard}>
                  <Image
                    source={{
                      uri: `${ApiConstants.IMAGE_BASE_URL}${item.backdrop_path}`,
                    }}
                    style={{height: 90, width: 140}}
                  />
                  <View style={WishlistStyles.banner}>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={WishlistStyles.title}>
                      {item.title}
                    </Text>
                    <Text
                      numberOfLines={3}
                      ellipsizeMode="tail"
                      style={WishlistStyles.tagline}>
                      {item.overview}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Wishlist;
