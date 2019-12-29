import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import store from "./src/store/store"
import HomeContainer from "./src/components/Home/HomeContainer"
import {NativeRouter, Route, nativeHistory} from "react-router-native";
import HotelContainer from "./src/components/Hotel/HotelContainer";
import HotelRoomContainer from "./src/components/HotelRoom/HotelRoomContainer";
import AuthPageContainer from "./src/components/AuthPage/AuthPageContainer";
import UserContainer from "./src/components/User/UserContainer";

export default function App() {
    return (
      <NativeRouter history={nativeHistory}>
          <Provider store={store}>
            <View style={styles.app}>
                <Route exact path="/" component={HomeContainer} />
                <Route exact path="/login" component={AuthPageContainer} />
                <Route exact path='/hotel/:id' component={HotelContainer} />
                <Route path='/hotel/:id/hotelrooms/:id' component={HotelRoomContainer} />
                <Route path="/user" component={UserContainer}/>
            </View>
          </Provider>
      </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app: {
    backgroundColor: '#000',
    flex: 1
  }
});
