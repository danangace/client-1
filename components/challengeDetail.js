import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  getChallenge,
  claimChallenge,
  finishChallenge,
  getAllChallenge,
} from "../store/action/challengeAction";
import { useDispatch, useSelector } from "react-redux";
import { withNavigation } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";
import moment from "moment";

function ChallengeDetail({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const challenge = useSelector(state => state.challenge);
  const currentChallenge = useSelector(state => state.challenge.data);
  const token = useSelector(state => state.user.token);

  const getClaimChallenge = id => {
    dispatch(claimChallenge({ id, token }));
    dispatch(getAllChallenge({ token }));
    navigation.goBack();
  };

  const getDoneChallenge = id => {
    dispatch(finishChallenge({ id, token }));
    dispatch(getAllChallenge({ token }));
    navigation.goBack();
  };

  useEffect(() => {
    let id = navigation.state.params.id;
    dispatch(getChallenge({ id, token }));
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {challenge.loading ? (
        <Text>Loading</Text>
      ) : (
        <View
          style={{
            flex: 1,
          }}
        >
          <ImageBackground
            style={{
              flex: 1 / 2,
              resizeMode: "contain",
            }}
            source={{ uri: `${currentChallenge.image}` }}
            blurRadius={5}
          >
            <LinearGradient
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              colors={["transparent", "black"]}
            >
              <Image
                source={{ uri: `${currentChallenge.image}` }}
                style={{
                  width: 200,
                  height: 300,
                  borderRadius: 5,
                  resizeMode: "contain",
                }}
              />
            </LinearGradient>
          </ImageBackground>
          <View
            style={{
              flex: 1 / 2,
              backgroundColor: "black",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 40, fontFamily: "sf-medium", color: "white" }}
            >
              {currentChallenge.title}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontFamily: "sf-light",
                width: "80%",
                textAlign: "center",
              }}
            >
              {currentChallenge.description}
            </Text>
            <View
              style={{
                width: "80%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <View
                style={{
                  width: "50%",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    fontFamily: "sf-semibold",
                  }}
                >
                  Deadline
                </Text>
                <Text
                  style={{ fontSize: 25, color: "yellow", textAlign: "center" }}
                >
                  {moment(currentChallenge.deadline).format("LL")}
                </Text>
              </View>
              <View style={{ width: "50%", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    fontFamily: "sf-semibold",
                  }}
                >
                  Poin
                </Text>
                <Text
                  style={{ fontSize: 25, color: "yellow", textAlign: "center" }}
                >
                  {currentChallenge.points}
                </Text>
              </View>
            </View>
            {currentChallenge.status === "unclaimed" &&
            user.role === "child" ? (
              <TouchableOpacity
                style={{
                  marginTop: 30,
                  backgroundColor: "green",
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 8,
                  },
                  shadowOpacity: 0.46,
                  shadowRadius: 11.14,
                  elevation: 17,
                }}
                onPress={() => getClaimChallenge(currentChallenge._id)}
              >
                <Text
                  style={{
                    color: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    fontFamily: "sf-semibold",
                    letterSpacing: 2,
                  }}
                >
                  Take Challenge
                </Text>
              </TouchableOpacity>
            ) : currentChallenge.status === "claimed" &&
              user.role === "child" ? (
              <TouchableOpacity
                style={{
                  marginTop: 30,
                  backgroundColor: "yellow",
                  borderRadius: 20,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 8,
                  },
                  shadowOpacity: 0.46,
                  shadowRadius: 11.14,
                  elevation: 17,
                }}
                onPress={() => getDoneChallenge(currentChallenge._id)}
              >
                <Text
                  style={{
                    color: "black",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    fontFamily: "sf-semibold",
                    letterSpacing: 2,
                  }}
                >
                  Done
                </Text>
              </TouchableOpacity>
            ) : (
              user.role === "child" && (
                <TouchableOpacity
                  style={{
                    marginTop: 30,
                    backgroundColor: "red",
                    borderRadius: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 8,
                    },
                    shadowOpacity: 0.46,
                    shadowRadius: 11.14,
                    elevation: 17,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      fontFamily: "sf-semibold",
                      letterSpacing: 2,
                    }}
                  >
                    Finished
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>
      )}
    </View>
  );
}

export default withNavigation(ChallengeDetail);
