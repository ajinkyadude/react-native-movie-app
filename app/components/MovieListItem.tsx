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

import HomeStyles from '../screens/home/Style';
import ApiConstants from '../api/ApiConstants';

const MovieListItem = ({category, data, navigation}) => {
  return (
    <View>
      <Text style={HomeStyles.categoryTitle}>{category} Movies</Text>
      <View>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={({item, index}) => {
            return (
              <View style={HomeStyles.movieCard}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('movieDetails', {
                      movieId: item.id,
                      item: item,
                    });
                  }}>
                  <ImageBackground
                    imageStyle={{borderRadius: 10}}
                    style={HomeStyles.cardImage}
                    source={{
                      uri: `${ApiConstants.IMAGE_BASE_URL}${item.poster_path}`,
                    }}></ImageBackground>
                </TouchableOpacity>
                <View style={HomeStyles.imageTitle}>
                  <Text style={{color: 'white'}}>{item.title}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MovieListItem;
