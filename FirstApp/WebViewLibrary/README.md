
# react-native-web-view-library

## Getting started

`$ npm install react-native-web-view-library --save`

### Mostly automatic installation

`$ react-native link react-native-web-view-library`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-web-view-library` and add `RNWebViewLibrary.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNWebViewLibrary.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNWebViewLibraryPackage;` to the imports at the top of the file
  - Add `new RNWebViewLibraryPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-web-view-library'
  	project(':react-native-web-view-library').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-web-view-library/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-web-view-library')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNWebViewLibrary.sln` in `node_modules/react-native-web-view-library/windows/RNWebViewLibrary.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Web.View.Library.RNWebViewLibrary;` to the usings at the top of the file
  - Add `new RNWebViewLibraryPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNWebViewLibrary from 'react-native-web-view-library';

// TODO: What to do with the module?
RNWebViewLibrary;
```
  