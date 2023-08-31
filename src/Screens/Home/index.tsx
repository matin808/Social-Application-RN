import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeading from '../../Components/Heading';

const Home = () => {
  const [posts, setPosts] = useState(); // Initialize posts as an empty array

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    setPosts(json);
  };

  useEffect(() => {
    getData();
    console.log(posts);
  }, []);

  return (
    <SafeAreaView style={styles.HomeContainer}>
      {/* <Text style={{fontSize: 40}}>{posts?.length}</Text> */}
      <View style={styles.HeadingContainer}>
        <CustomHeading style={styles.CustomHeadingStyle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: '#191a23',
  },

  HeadingContainer: {
    marginTop: 20,
    marginLeft: 20,
  },

  CustomHeadingStyle: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
  },
});

export default Home;
