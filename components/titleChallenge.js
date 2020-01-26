import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch } from "react-redux";
import { setTitleAndDescription } from "../store/action/challengeAction";

function TitleChallenge({ navigation }) {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const setInputDate = (event, inputDate) => {
    setShow(false);
    setDate(inputDate);
  };

  const showDate = () => {
    setShow(true);
  };

  const inputTitle = input => {
    setTitle(input);
  };

  const inputDesc = input => {
    setDesc(input);
  };

  const goNext = () => {
    navigation.navigate("image");
  };

  const clearInput = () => {
    setTitle("");
    setDesc("");
    setDate(new Date());
  };

  const nextSection = () => {
    if (title && desc && date) {
      let payload = { title, desc, date };
      dispatch(setTitleAndDescription(payload));
      clearInput();
      goNext();
    } else {
      alert("harus diisi semua");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <View
        style={{
          marginTop: 10,
          flex: 1,
          width: "100%",
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, fontFamily: "sf-medium" }}>
          Title and Description
        </Text>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="ios-at"
            size={28}
            color="#512DA8"
            style={{ marginRight: 10 }}
          />
          <TextInput
            value={title}
            onChangeText={text => inputTitle(text)}
            style={styles.input}
            placeholder="title"
          />
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <Ionicons
            name="ios-albums"
            size={28}
            color="#512DA8"
            style={{ marginRight: 10, marginTop: 10 }}
          />
          <TextInput
            style={styles.description}
            placeholder="description"
            multiline={true}
            value={desc}
            onChangeText={text => inputDesc(text)}
          />
        </View>
        <View
          style={{
            width: "80%",
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="ios-calendar"
            size={28}
            color="#512DA8"
            style={{ marginRight: 10 }}
          />
          <TouchableOpacity style={styles.date} onPress={showDate}>
            <Text style={styles.next}>Pick Date</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "sf-medium",
              fontSize: 18,
            }}
          >
            {date.toDateString()}
          </Text>
          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={setInputDate}
            />
          )}
        </View>
      </View>
      <View style={{ flex: 1 / 3, width: "80%", alignItems: "flex-end" }}>
        <TouchableOpacity style={styles.submit} onPress={nextSection}>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default withNavigation(TitleChallenge);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    width: "80%",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: "white",
    borderColor: "#512DA8",
    borderRadius: 20,
    borderWidth: 1.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.44,
    shadowRadius: 3,
    elevation: 5,
  },
  description: {
    textAlignVertical: "top",
    borderWidth: 1,
    maxWidth: "80%",
    width: "80%",
    flexWrap: "wrap",
    height: 300,
    paddingTop: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: "white",
    borderColor: "#512DA8",
    borderRadius: 20,
    borderWidth: 1.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.44,
    shadowRadius: 3,
    elevation: 5,
  },
  submit: {
    backgroundColor: "#512DA8",
    width: "30%",
    borderRadius: 100,
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#512DA8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.44,
    shadowRadius: 3,
    elevation: 5,
  },
  date: {
    backgroundColor: "#7CB342",
    width: "40%",
    borderRadius: 100,
    marginRight: 10,
    alignItems: "center",
    shadowColor: "#512DA8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.44,
    shadowRadius: 3,
    elevation: 5,
  },
  next: {
    color: "white",
    paddingVertical: 5,
    fontFamily: "sf-semibold",
    fontSize: 16,
    letterSpacing: 1.5,
  },
});
