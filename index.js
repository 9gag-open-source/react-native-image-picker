'use strict'

const { NativeModules } = require('react-native');
const { ImagePickerManager } = NativeModules;
const DEFAULT_OPTIONS = {
  title: 'Select a Photo',
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo…',
  chooseFromLibraryButtonTitle: 'Choose from Library…',
  quality: 1.0,
  allowsEditing: false
};

module.exports = {
  ...ImagePickerManager,
  showImagePicker: function showImagePicker(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    return ImagePickerManager.showImagePicker({...DEFAULT_OPTIONS, ...options}, callback)
  },
  launchImageLibrary: function launchImageLibrary(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    return ImagePickerManager.launchImageLibrary({...DEFAULT_OPTIONS, ...options}, callback)
  },
  launchCamera: function launchCamera(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    return ImagePickerManager.launchCamera({...DEFAULT_OPTIONS, ...options}, callback)
  }
}
