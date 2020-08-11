import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import ChapterButton from '../styles/ChapterButton';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import VideoScreen from './Chapter/VideoScreen';
import CodeCoach from './Chapter/CodeCoach';
import CustomCode from './Chapter/CustomCode';
import Quiz from './Chapter/Quiz';

class KitInfo extends Component {
  static navigationOptions = {
    title: '키트 정보',
  };
  render() {
    var chapterStep = 2;
    var {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        {/* <View style={styles.headerView}>
          <TouchableOpacity style={styles.backButtonStyle}>
            <Text onPress={() => this.props.navigation.goBack()}>뒤로가기</Text>
          </TouchableOpacity>
        </View> */}
        {/* <View style={styles.titleView}>
          <Text style={styles.titleStyle}>키트 정보</Text>
        </View> */}
        <View style={styles.contentView}>
          <View style={styles.ChapterButtonStyle}>
            <ChapterButton
              buttonColor={'#3AE5D1'}
              title={'조립영상'}
              onPress={() => navigate('VideoScreen')}
              disabled={chapterStep < 1}
            />
            <ChapterButton
              buttonColor={'#3AE5D1'}
              title={'코드설명'}
              onPress={() => navigate('CodeCoach')}
              disabled={chapterStep < 2}
            />
          </View>
          <View style={styles.ChapterButtonStyle}>
            <ChapterButton
              buttonColor={'#3AE5D1'}
              title={'커스터마이징'}
              onPress={() => navigate('CustomCode')}
              disabled={chapterStep < 3}
            />
            <ChapterButton
              buttonColor={'#3AE5D1'}
              title={'퀴즈'}
              onPress={() => navigate('Quiz')}
              disabled={chapterStep < 4}
            />
          </View>
        </View>
        <View style={styles.footerView} />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    KitInfo,
    VideoScreen,
    CodeCoach,
    CustomCode,
    Quiz,
  },
  {
    defaultNavigationOptions: () => ({
      headerShown: true,
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#FFF',
      },
      headerBackTitle: ' ',
    }),
    initialRouteName: 'KitInfo',
  },
);
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'white',
  },
  headerView: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  contentView: {
    flex: 1,
    alignContent: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  footerView: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  titleStyle: {
    fontSize: 50,
    fontFamily: 'NanumSquareRoundB',
  },
  backButtonStyle: {
    position: 'absolute',
    left: 10,
    top: '50%',
  },
  ChapterButtonStyle: {
    width: '80%',
    height: 190,
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
