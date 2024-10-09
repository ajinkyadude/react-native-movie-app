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
import getMovieDetails from '../../api/methods/getMovieDetails';
import ApiConstants from '../../api/ApiConstants';
import DetailsStyles from './Style';
import backIcon from '../../assets/back_arrow.png';
import addWishlist from '../../assets/add_wishlist.png';
import removeWishlist from '../../assets/remove_wishlist.png';
import MovieListItem from '../../components/MovieListItem';
import getSimilarMovies from '../../api/methods/getSimilarMovies';
import MovieCredits from '../../components/movieCredits/MovieCredits';

import { addToWishlist, getWishlist, clearWishlist, removeFromWishlist } from "../../storage/WishlistManager";

const Details = ({route, navigation}) => {
  const {movieId} = route && route.params;
  const {item, reload} = route && route.params;

  const [data, setMovieData] = useState({});
  const [isAdded, setIsAdded] = useState(false);
  const [similarData, setSimilarData] = useState([]);

  const fetchWishlist = async() => {
    const jsonStr = await getWishlist();
    const data = JSON.parse(jsonStr);
    const dataArr = data.map(value => {
      if (value===JSON.stringify(item)) {
        setIsAdded(true);
      } else {
        setIsAdded(false);
      }
    })
  };

  const fetchSimilarMovies = async(movieId) => {
    const resp = await getSimilarMovies(ApiConstants.GET_MOVIE_DETAILS,movieId,ApiConstants.GET_SIMILAR_MOVIES_END);
    if (resp && resp.results.length > 0) {
      setSimilarData(resp.results);
    }
  };

  const fetchMovieDetails = async movieId => {
    const resp = await getMovieDetails(ApiConstants.GET_MOVIE_DETAILS, movieId);
    if (resp) {
      setMovieData(resp);
    }
  };

  const addMovieToWishlist = async(item) => {
    const isAdded = await addToWishlist(JSON.stringify(item));
    setIsAdded(isAdded);
  };

  const removeMovieFromWishlist = async(item) => {
    await removeFromWishlist(JSON.stringify(item));
    setIsAdded(false);
    if (reload) {
      reload();
    }
  };

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(movieId);
      fetchSimilarMovies(movieId);
      fetchWishlist();
    }
  }, [movieId]);
  return (
    <SafeAreaView style={DetailsStyles.body}>
      <StatusBar barStyle={'light-content'} />
      <View style={DetailsStyles.header}>
        <View style={DetailsStyles.backIcon}>
          <TouchableOpacity
            onPress={() => {
              navigation.pop();
            }}>
            <Image source={backIcon} style={DetailsStyles.wishlist} />
          </TouchableOpacity>
        </View>
        <View style={DetailsStyles.titleHeader}>
          <Text style={DetailsStyles.heading}>Movie Details</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <View>
            <ImageBackground
              source={{
                uri: `${ApiConstants.IMAGE_BASE_URL}${data.backdrop_path}`,
              }}
              style={DetailsStyles.imageStyle}>
              <TouchableOpacity onPress={()=>{
                if(isAdded) {
                  removeMovieFromWishlist(item);
                } else {
                  addMovieToWishlist(item);
                }
              }}>
                <View style={DetailsStyles.wishlistTitle}>
                  <Image
                    source={isAdded?removeWishlist:addWishlist}
                    style={DetailsStyles.addToWishlist}
                  />
                  <Text style={{color: 'white'}}>{isAdded? 'Remove From Wishlist':'Add To Wishlist'}</Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
            <Text style={DetailsStyles.movieTitle}>{data.title}</Text>
            <Text style={DetailsStyles.movieTagline}>{data.tagline}</Text>
          </View>
          <View>
            <Text style={DetailsStyles.descriptionTitle}>Description</Text>
            <Text style={DetailsStyles.description}>{data.overview}</Text>

            <MovieCredits movieId={movieId}/>

            <Text style={DetailsStyles.movieTitle}>Release Date</Text>
            <Text style={DetailsStyles.movieTagline}>{data.release_date}</Text>
          </View>

          <MovieListItem navigation={navigation} data={similarData} category={'Similar'}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
