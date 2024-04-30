import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SimpleCarousel, Banner } from 'react-native-simple-banner-carousel';

export default function Slider() {
  return (
    <View style={styles.container}>
      <View style={{
        paddingVertical: 12,
        width: '100%',
        backgroundColor: '#fff',
      }}>
        <SimpleCarousel 
          data={[{
              title: 'Hokkaido',
            //   source: require('./assets/images/sapporo.jpg'),
            },
            {
              title: 'Tokyo',
            //   source: require('./assets/images/tokyo.jpg'),
            },
            {
              title: 'Osaka',
            //   source: require('./assets/images/osaka.jpg'),
            },
            {
              title: 'Kyoto',
            //   source: require('./assets/images/kyoto.jpg'),
            },
            {
              title: 'Shimane',
            //   source: require('./assets/images/shimane.jpg'),
            }
          ]}
          renderItem={(props, i, width) => {
            return (
              <Banner id={`${props.title}_${i}`} source={props.source} width={width} onPress={(id) => console.log(`${id} was tapped.`)} />
            )
          }} 
        />
      </View>
      <StatusBar translucent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});