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
import HomeStyles from './Style';
import wishlist from '../../assets/wishlist.png';
import MovieListItem from '../../components/MovieListItem';

const {height, width} = Dimensions.get('window');

const Home = ({route, navigation}) => {
  const [trendingData, setTrendingData] = useState([]);
  const [actionData, setActionData] = useState([]);
  const [adventureData, setAdventureData] = useState([]);
  const [comedyData, setComedyData] = useState([]);
  const fetchTrendingData = async () => {
    const resp = await getTrendingList(ApiConstants.GET_UPCOMING_LIST);
    if (resp.results.length > 0) {
      setTrendingData(resp.results);
    }
  };

  const fetchActionData = async id => {
    const resp = await getMovieList(ApiConstants.GET_LIST_BY_GENRE, id);
    if (resp.results.length > 0) {
      if (id === 28) {
        setActionData(resp.results);
      } else if (id === 12) {
        setAdventureData(resp.results);
      } else {
        setComedyData(resp.results);
      }
    }
  };
  useEffect(() => {
    fetchTrendingData();
    fetchActionData(28);
    fetchActionData(12);
    fetchActionData(35);
  }, []);
  return (
    <SafeAreaView style={HomeStyles.body}>
      <StatusBar barStyle={'light-content'} />
      <View style={HomeStyles.header}>
        <Text style={HomeStyles.heading}>Movie App</Text>
        <TouchableOpacity onPress={() => {
          navigation.push('wishlist');
        }}>
          <Image source={wishlist} style={HomeStyles.wishlist} />
        </TouchableOpacity>
      </View>
      <View style={{paddingBottom: 60}}>
        <ScrollView>
          <View>
            <Text style={HomeStyles.categoryTitle}>Upcoming Movies</Text>
            <View>
              <FlatList
                data={trendingData}
                horizontal={true}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.push('movieDetails', {
                          movieId: item.id,
                          item: item,
                        });
                      }}>
                      <View style={HomeStyles.trendingMovieCard}>
                        <ImageBackground
                          imageStyle={{borderRadius: 10}}
                          style={HomeStyles.trendingCardImage}
                          source={{
                            uri: `${ApiConstants.IMAGE_BASE_URL}${item.backdrop_path}`,
                          }}>
                          <View style={HomeStyles.trendingImageTitle}>
                            <Text style={{color: 'white'}}>{item.title}</Text>
                          </View>
                        </ImageBackground>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>

          <MovieListItem navigation={navigation} data={actionData} category={'Action'} />

          <MovieListItem navigation={navigation} data={adventureData} category={'Adventure'} />

          <MovieListItem navigation={navigation} data={comedyData} category={'Comedy'}/>
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
