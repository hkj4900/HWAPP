import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Linking} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class RegisterKitScreen extends Component {
  onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.headerView}>
          <TouchableOpacity style={styles.backButtonStyle}>
            <Text onPress={() => this.props.navigation.goBack()}>뒤로가기</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.titleView}>
          <Text style={styles.titleStyle}>키트 등록하기</Text>
        </View>
        <View style={styles.contentView}>
          <TextInput style={styles.textForm} placeholder={'시리얼 번호 입력'} />
        </View>
        <View style={styles.QRView}>
          <QRCodeScanner
            onRead={this.onSuccess}
            flashMode={RNCamera.Constants.FlashMode.None}
          />
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    RegisterKitScreen,
  },
  {
    defaultNavigationOptions: () => ({
      headerShown: true,
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#FFF',
      },
    }),
    initialRouteName: 'RegisterKitScreen',
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
    backgroundColor: '#9aa9ff',
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6ca1a',
  },
  QRView: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1ad657',
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
});

// import React, {Component} from 'react';

// import {StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import {RNCamera} from 'react-native-camera';

// export default class ScanScreen extends Component {
//   onSuccess = (e) => {
//     Linking.openURL(e.data).catch((err) =>
//       console.error('An error occured', err),
//     );
//   };

//   render() {
//     return (
//       <QRCodeScanner
//         onRead={this.onSuccess}
//         flashMode={RNCamera.Constants.FlashMode.torch}
//         topContent={
//           <Text style={styles.centerText}>
//             Go to{' '}
//             <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
//             your computer and scan the QR code.
//           </Text>
//         }
//         bottomContent={
//           <TouchableOpacity style={styles.buttonTouchable}>
//             <Text style={styles.buttonText}>OK. Got it!</Text>
//           </TouchableOpacity>
//         }
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777',
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000',
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)',
//   },
//   buttonTouchable: {
//     padding: 16,
//   },
// });