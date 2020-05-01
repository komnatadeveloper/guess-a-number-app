import React from 'react';
import { 
  Dimensions, 
  ScrollView, 
  View,
  StyleSheet, 
  Text, 
  SafeAreaView, 
  Image 
} from 'react-native'

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors'
import MainButton from '../components/MainButton';


const GameOverScreen = props => {

  return( 
    // <SafeAreaView>
      <ScrollView>    
        <View style={styles.screen}>
          <TitleText>The Game is Over!</TitleText>
          <View
            style={styles.imageContainer}
          >
            <Image
              // source={require('../assets/success.png')}
              source={{ uri:'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg'}}
              // fadeDuration={2500}
              // source={{ uri: 'https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg'}}
              style={styles.image}
              resizeMode='cover'
            />
          </View>
          <View style={styles.resultContainer} >
            <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.guessRounds}</Text> rounds to guess te number <Text style={styles.highlight}>{props.userNumber}</Text> </BodyText>
          </View>
          <MainButton 
            onPress={props.configureNewGameHandler}
          >
            NEW GAME
          </MainButton>
        </View>
      </ScrollView>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create( {
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },  
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: 200
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400
      ? 16
      : 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
})


export default GameOverScreen;