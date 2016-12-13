import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native'

import ImagePicker from 'react-native-image-picker'

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      avatarSource: null,
      videoSource: null
    }
  }

  _selectPhotoByAllTapped () {
    var options = imageOptions
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)
      if (response.didCancel) {
        console.log('User cancelled photo picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        var source
        // You can display the image using either:
        // source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        // Or:
        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true}
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true}
        }
        this.setState({
          avatarSource: source
        })
      }
    })
  }

  _selectPhotoByCameraTapped () {
    var options = imageOptions
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response)
      if (response.didCancel) {
        console.log('User cancelled photo camera')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        var source
        // You can display the image using either:
        // source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        // Or:
        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true}
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true}
        }
        this.setState({
          avatarSource: source
        })
      }
    })
  }

  _selectPhotoByAlbumTapped () {
    var options = imageOptions
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response)
      if (response.didCancel) {
        console.log('User cancelled photo album')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        var source
        // You can display the image using either:
        // source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
        // Or:
        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true}
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true}
        }
        this.setState({
          avatarSource: source
        })
      }
    })
  }

  _selectVideoByAllTapped () {
    var options = videoOptions
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)
      if (response.didCancel) {
        console.log('User cancelled video picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        this.setState({
          videoSource: response.uri
        })
      }
    })
  }

  _selectVideoByCameraTapped () {
    var options = videoOptions
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response)
      if (response.didCancel) {
        console.log('User cancelled video camera')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        this.setState({
          videoSource: response.uri
        })
      }
    })
  }

  _selectVideoByAlbumTapped () {
    var options = videoOptions
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response)
      if (response.didCancel) {
        console.log('User cancelled video album')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        this.setState({
          videoSource: response.uri
        })
      }
    })
  }

  render () {
    return (
      <View style={styles.container}>
        { this.state.avatarSource !== null &&
          <Image style={styles.image} source={this.state.avatarSource} />
        }
        { this.state.videoSource !== null &&
          <Text style={styles.text}>{this.state.videoSource}</Text>
        }
        <TouchableOpacity onPress={this._selectPhotoByAllTapped.bind(this)}>
          <View style={[styles.button, styles.buttonContainer]}>
            <Text>Photo All</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._selectPhotoByCameraTapped.bind(this)}>
          <View style={[styles.button, styles.buttonContainer]}>
            <Text>Photo by Camera</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._selectPhotoByAlbumTapped.bind(this)}>
          <View style={[styles.button, styles.buttonContainer]}>
            <Text>Photo by Album</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._selectVideoByAllTapped.bind(this)}>
          <View style={[styles.button, styles.buttonContainer]}>
            <Text>Video All</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._selectVideoByCameraTapped.bind(this)}>
          <View style={[styles.button, styles.buttonContainer]}>
            <Text>Video by Camera</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._selectVideoByAlbumTapped.bind(this)}>
          <View style={[styles.button, styles.buttonContainer]}>
            <Text>Video by Album</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  buttonContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  button: {
    borderRadius: 75,
    width: 150,
    height: 44
  },
  image: {
    width: 100,
    height: 100
  },
  text: {
    margin: 8,
    textAlign: 'center'
  }
})

const imageOptions = {
  quality: 1.0,
  maxWidth: 500,
  maxHeight: 500,
  storageOptions: {
    skipBackup: true
  }
}

const videoOptions = {
  title: 'Video Picker',
  takePhotoButtonTitle: 'Take Video...',
  mediaType: 'video',
  videoQuality: 'medium'
}
