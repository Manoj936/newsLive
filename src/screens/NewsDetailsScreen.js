import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { WebView } from 'react-native-webview';
export default function NewsDetailsScreen({navigation, route}) {

    const {url} = route.params;

    return <WebView source={{ uri: url}} style={{ flex: 1 }} />;
}