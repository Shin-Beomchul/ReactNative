---
title: reactNative
date: 2018-10-26 10:23:24
tags:React-Native
---
# 결론 부터 갑니다.React-Native 후기.
   - 아이디어나 패러다임은 최고!, 네이티브 컴포넌트로 빌드 되다니!
   - 이미 ReactJS로 개발 되어 있다면 좋은 결정이 될수도. 
   - 각 플랫폼 특성및 기능을 사용하려면 NativeModule을 사용해야 하는데. 이게 각 플랫폼의 특성과 개발 할 줄 알아야함. Java의 Jni와 유사한 원리
   - 쉽고 간단한 Rest Api / Listing / Show  board기반 정도의 앱이라면 아주 간단하게 느껴질 수 있다. 간단한 앱을 개발 하는 정도라면 good
   - 샘플 한번 돌려보고 오 괜찮네? 쉽네 두개 크로스플랫폼 할만하네? 착각 하지말것.  
   - ReactNative는 모바일을 개발하는 하나의 "방법" 정도 일뿐.
   - 코드이중화와 플랫폼별 개발에 따라서 코드 복잡도가 심각하게 증가 할 수 있다.
   - WebView Base App 만들거면 코르도바 사용할것. (링크)
  
      
# 대충 이해하고 갑니다. 흐름
 1. ReactJS(config)  -- 브릿지 -- 네이티브 컴포넌트 
    :ReactJS가 브릿지를 통해 네이티브 컴포넌트들을 위치 시키고 조작하고, 배치 시킴. 
    모바일 개발자라면 한번쯤 상상해 봤을 시나리오. 
    모든 config를 원격지에서 가지고 있으면 앱로딩 시점에 config에 따라 네이티브 컴포넌트를 배치 시키면 배포 없이 개발 가능하지 않을까? 라는 상상을 신입때 했었는데 세상에 실제로 일어났습니다.
    예. 실제로 CodePush라는 기능으로 원격에서 배포없이 가능해요.
    


# 앱 설치/ 실행 까지 3줄이면 가능은 합니다만..

설치
sudo npm install -g react-native-cli


생성
react-native init godBeomProject


빌드
react-native run-ios --simulator="iPhone 6s"

* 밥로스 아저씨 처럼 3줄만 적으면 쉽게 될것 같지만 안됩니다ㅋ.
  여러 이유에 의해서 그래서 기록해뒀어요. 


# 위과정을 수행하면서 겪은 상황별 에러 대처 방법.

error 1 : run할때 mkdir해야 하는데 하이시에라에서 권한 오류
  EACCES: permission denied, mkdir : ../../../react-native/node_modules 
  #1.solution
~~~
  /Users/god/Dev/github/React-Native-Hello/NavPrject/node_modules/react-native/
~~~
  

error 2 : watchman설치 요구.
   error 1 해결 후 run ->  
   Loading dependency graph...(node:5604) UnhandledPromiseRejectionWarning: Error: `fsevents` unavailable (this watcher can only be used on Darwin)
    solution
    
~~~
    brew install watchman
~~~
후 엑스코드 커맨드 라인툴 설치.
~~~
xcode-select --install
~~~



error3 : .watchmanconfig 루트에 추가해야함.
~~~
   sudo touch .watchmanconfig
~~~
  


error 4 : 프로젝스 init 시 Command failed: npm install --save --save-exact react-native
~~~
: npm cache clean 후 재시도
~~~


android error : adb cannot found  = adb 환경 변수 설정
~~~
export PATH="/Users/god/Library/Android/sdk/platform-tools":$PATH

// or

echo "export PATH=\$PATH:/Users/${USER}/Library/Android/sdk/platform-tools/" >> ~/.bash_profile && source ~/.bash_profile
~~~


가상머신 실행
http://yuddomack.tistory.com/entry/1React-Native-%EC%84%A4%EC%B9%98%EC%99%80-%EC%8B%A4%ED%96%89hello-world


reactNative 배포
https://bomjjack.github.io/programming/2018/01/06/rn-android-app-release/




# 기타 꿀팁
#  노드 ,npm 업데이트 
 https://velopert.com/1351
 
 #  하이시에라 권한 상승
~~~
 sudo chown -R $(whoami) $(brew --prefix)/*
~~~
# 클린 개발 맥
https://www.theteams.kr/teams/35/post/67342

# Android Studio 빌드하는데 accessDenied 난다
~~~
sudo chmod -R 777 {yourProjectFolder}
~~~

# 인스타 페이크앱 개발경험
http://slides.com/rotoshine/try-react-native-to-web-developer#/28

# 아.. 할꺼 다해봤는데 안된다 = 에뮬레이터 변경 시도
react-native run-ios --simulator="iPhone 6s"

# NativeModule(누군가 개발해놓은 모듈)설치
~~~
yarn add react-native-android-fullscreen-webview-video
or
npm install react-native-android-fullscreen-webview-video --save
~~~

다운받은 모듈 내 프로젝트에 적용
~~~
 프로젝트 root디렉토리$:  react-native link
~~~

# 의존 라이브러리 제거
~~~
react-native unlink lib-name-example
npm uninstall --save lib-name-example
~~~

# androidStudio에서 특정 파일을 제거할 권한이 없어서 빌드가 안된다.
 
~~~
{ProjectRoot}$-> sudo ./gradlew clean
~~~
