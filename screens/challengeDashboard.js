import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import { withNavigation } from "react-navigation";
import Picture from "../assets";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

function ChallengeDashboard({ navigation }) {
  const [challenge, setChallenge] = useState(["a", "a", "a", "a", "a"]);

  const addChallenge = () => {
    navigation.navigate("add challenge");
  };

  const history = () => {
    navigation.navigate("history challenge");
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyTop}>
        <View style={styles.historyBtn}>
          <TouchableOpacity style={styles.touchHistoryBtn} onPress={history}>
            <View style={styles.addChallengeBtn}>
              <MaterialCommunityIcons
                name="history"
                size={40}
                color="white"
                style={styles.historyIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Image
          source={Picture.challange1}
          style={{ width: "100%", resizeMode: "contain", flex: 1, transform:[{ translateY: 10 }] }}
        />
      </View>
      <View style={styles.bodyBottom}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={challenge}
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
                index === challenge.length -1 ? (
                  <View style={styles.containerCardOne}>
                  <View style={styles.card}>
                    <View style={styles.cardMid}>
                      <Text style={styles.fontCardName}>
                        MENCUCI SEPATU HARI
                      </Text>
                      <Text style={styles.fontCardBirth}>
                        mau kah kamu memcuci sepatu hari ini ?
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: 200,
                        flexDirection: "row",
                      }}
                    >
                      <Image source={Picture.ps2} style={styles.image} />
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: "#ceccfc", width: 295, borderBottomRightRadius: 20, borderBottomLeftRadius: 20}} >
                    <View style={{ justifyContent: 'flex-end' , flexDirection: 'row', alignItems: 'center', marginRight: 10}} >
                      <MaterialCommunityIcons name="medal" size={20} color="black" style={{ marginRight: 2 }} />
                      <Text style={styles.deadline}>
                        1000 Point
                      </Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end' , flexDirection: 'row', alignItems: 'center',}} >
                      <MaterialCommunityIcons name="calendar-clock" size={20} color="black" style={{ marginRight: 2 }} />
                      <Text style={styles.deadline}>
                        22 january 2019
                      </Text>
                    </View>
                  </View>
                </View>
                ) : (
                  <View style={styles.containerCard}>
                  <View style={styles.card}>
                    <View style={styles.cardMid}>
                      <Text style={styles.fontCardName}>
                        MENCUCI SEPATU HARI
                      </Text>
                      <Text style={styles.fontCardBirth}>
                        mau kah kamu memcuci sepatu hari ini ?
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: 200,
                        flexDirection: "row",
                      }}
                    >
                      <Image source={Picture.ps2} style={styles.image} />
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: "#ceccfc", width: 295, borderBottomRightRadius: 20, borderBottomLeftRadius: 20}} >
                    <View style={{ justifyContent: 'flex-end' , flexDirection: 'row', alignItems: 'center', marginRight: 10}} >
                      <MaterialCommunityIcons name="medal" size={20} color="black" style={{ marginRight: 2 }} />
                      <Text style={styles.deadline}>
                        1000 Point
                      </Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end' , flexDirection: 'row', alignItems: 'center',}} >
                      <MaterialCommunityIcons name="calendar-clock" size={20} color="black" style={{ marginRight: 2 }} />
                      <Text style={styles.deadline}>
                        22 january 2019
                      </Text>
                    </View>
                  </View>
                </View>
                )
            )}
            keyExtractor={(item, index) => String(index)}
          />
        </SafeAreaView>
      </View>
      <View style={styles.famsBtn}>
        <TouchableOpacity style={styles.touchFamsBtn} onPress={addChallenge}>
          <View style={styles.addChallengeBtn}>
            <Ionicons
              name="ios-add"
              size={60}
              color="white"
              style={styles.plusIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default withNavigation(ChallengeDashboard);

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  plusIcon: {
    top: -2,
  },
  deadline:{
    fontFamily: "sf-light",
    fontSize: 12,
  },
  flatlist: {
    marginTop: 50,
  },
  historyIcon: {
    top: 3,
    right: 1.5
  },
  touchHistoryBtn: {
    height: 50,
    backgroundColor: "#4999CA",
    width: 50,
    borderRadius: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  historyBtn: {
    justifyContent: "center",
    position: "absolute",
    bottom: 160,
    right: 30,
    zIndex: 70
  },
  touchFamsBtn: {
    height: 50,
    backgroundColor: "#4999CA",
    width: 50,
    borderRadius: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  famsBtn: {
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  addChallengeBtn: {
    justifyContent: "center",
    alignItems: "center",
  },
  bodyTop: {
    backgroundColor: "white",
    flex: 1 / 2,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bodyBottom: {
    backgroundColor: "#F7CA3F",
    flex: 1,
    width: 600,
    marginTop: -50,
    borderTopRightRadius: 350,
    borderTopLeftRadius: 350,
  },
  containerCardOne: {
    marginBottom: 80,
    marginTop: 10,
    alignItems: "center",
  },
  containerCard: {
    marginTop: 10,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ceccfc",
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  cardMid: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    maxWidth: 150,
    marginRight: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    resizeMode: 'cover'
  },
  circle: {
    backgroundColor: "white",
    height: 60,
    width: 60,
    borderRadius: 100,
    marginRight: 4,
  },
  fontCardName: {
    fontFamily: "sf-semibold",
    fontSize: 18,
  },
  fontCardBirth: {
    fontFamily: "sf-light",
    fontSize: 12,
    marginTop: -12,
  },
  fontCardPoint: {
    fontFamily: "sf-semibold",
    fontSize: 30,
    paddingLeft: 5,
  },
});
