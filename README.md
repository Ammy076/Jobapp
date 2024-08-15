# Jobapp
On opening the app, users should be presented with a bottom navigation UI with “Jobs” and “Bookmarks” as the sections.  The Jobs screen should fetch data from the above API in an infinite scroll approach. Show the title, location, salary and phone data in each card.  Clicking on a Job card should show more details related to it on another screen


1. Project Setup
2. npx react-native init JobApp
cd JobApp

#Install necessary dependencies:

npm install @react-navigation/native @react-navigation/bottom-tabs
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
npm install axios @reduxjs/toolkit react-redux @react-native-async-storage/async-storage


#Install additional dependencies:
npx pod-install ios

