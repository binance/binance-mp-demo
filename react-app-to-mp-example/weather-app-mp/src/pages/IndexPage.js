import React from "react";
import { View, Text, Navigator } from "@binance/bmp-components";

import "./IndexPage.css";

function IndexPage() {
  return (
    <View className="page-index">
      <Text className="h1"> City List </Text>
      <View className="list">
        {/* <Navigator /> is a component like the <a /> element in html,
                which provides props: url to navigate to a certain page.
                The url can use get parameter to pass data to the targe pages.
             */}
        <Navigator url="pages/DetailPage?city=shanghai" className="list-item">
          Shanghai
        </Navigator>
        <Navigator url="pages/DetailPage?city=hongkong" className="list-item">
          Hongkong
        </Navigator>

        <Navigator url="pages/DetailPage?city=beijing" className="list-item">
          Beijing
        </Navigator>
      </View>
    </View>
  );
}

export default IndexPage;
