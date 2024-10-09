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

import LinearGradient from 'react-native-linear-gradient';

import Styles from './MovieCreditsStyle';
import ApiConstants from '../../api/ApiConstants';
import getMovieCredits from '../../api/methods/getMovieCredits';

const MovieCredits = ({navigation, movieId}) => {
  const [credits, setCredits] = useState([]);

  const getMovieCast = async movieId => {
    const resp = await getMovieCredits(ApiConstants.GET_MOVIE_DETAILS, movieId);
    if (resp.cast.length > 0) {
      var data = resp.cast.filter(getActors);
      setCredits(data);
    }
  };

  function getActors(item, index, array) {
    return (item.profile_path);
  }

  useEffect(() => {
    getMovieCast(movieId);
  }, [movieId]);

  return (
    <View>
      <Text style={Styles.categoryTitle}>Movie Cast</Text>
      <View>
        <FlatList
          data={credits}
          horizontal={false}
          numColumns={3}
          renderItem={({item, index}) => {
            return (
              <View style={Styles.movieCard}>
                <TouchableOpacity
                // onPress={() => {
                //   navigation.push('movieDetails', {
                //     movieId: item.id,
                //     item: item,
                //   });
                // }}
                >
                  <ImageBackground
                    imageStyle={{
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                    style={Styles.cardImage}
                    source={{
                      uri: `${ApiConstants.IMAGE_BASE_URL}${item.profile_path}`,
                    }}>
                    <LinearGradient
                      colors={['#000000FF', '#00000000']}
                      start={{x: 1, y: 1}}
                      end={{x: 1, y: 0}}
                      style={Styles.imageTitle}>
                      <Text 
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={{color: 'white', fontSize: 15}}>{item.original_name}</Text>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
                <View>
                  <Text style={Styles.imageCharacter}
                  numberOfLines={2}
                  ellipsizeMode="tail">{item.character}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MovieCredits;
