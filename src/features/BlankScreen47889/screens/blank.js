import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = { CheckBox_21: true }

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: 20,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontStyle: "normal",
        fontWeight: "normal",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 20,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontStyle: "normal",
          fontWeight: "normal",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "100%",
            height: "50%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            backgroundColor: "#ffffff",
            fontStyle: "normal",
            fontWeight: "normal",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <Text
            style={{
              marginLeft: 0,
              marginRight: 0,
              marginTop: 5,
              marginBottom: 5,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 5,
              paddingBottom: 5,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0
            }}
          >
            Task Description
          </Text>
          <View
            style={{
              width: "100%",
              height: "100%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 20,
              color: "#000000",
              backgroundColor: "#ffffff",
              fontStyle: "normal",
              fontWeight: "normal",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              backgroundSize: "auto"
            }}
          >
            <View
              style={{
                width: "50%",
                height: "100%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                backgroundColor: "#ffffff",
                fontStyle: "normal",
                fontWeight: "normal",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            >
              <CheckBox
                text="Task Status"
                disabled={false}
                style={{
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 5,
                  marginBottom: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                  paddingTop: 5,
                  paddingBottom: 5,
                  overflow: "visible",
                  textAlign: "left",
                  verticalAlign: "baseline",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0
                }}
                checked={this.state.CheckBox_21}
                onChange={nextChecked =>
                  this.setState({ CheckBox_21: nextChecked })
                }
              />
            </View>
            <View
              style={{
                width: "50%",
                height: "100%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                textAlign: "left",
                verticalAlign: "baseline",
                fontSize: 20,
                color: "#000000",
                backgroundColor: "#ffffff",
                fontStyle: "normal",
                fontWeight: "normal",
                flexDirection: "column",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "50%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 20,
            color: "#000000",
            backgroundColor: "#ffffff",
            fontStyle: "normal",
            fontWeight: "normal",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        />
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
