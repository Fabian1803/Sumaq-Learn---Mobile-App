import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

export default function DefaultCourse() {
  const [pdfUri, setPdfUri] = useState<string | null>(null);

  useEffect(() => {
    const loadPdf = async () => {
      const asset = Asset.fromModule(require('@/assets/pdfs/pdfPrue.pdf'));
      await asset.downloadAsync();
      setPdfUri(asset.localUri);
    };

    loadPdf();
  }, []);

  return (
    <View className="bg-light-primary p-3 flex-1">
      <Text className="text-3xl font-semibold text-center text-light-fourth">DefaultCourse</Text>
      <Text>Esta es una descripción con un PDF local cargado en WebView.</Text>

      {pdfUri && (
        <WebView
          source={{ uri: pdfUri }}
          style={{
            marginTop: 20,
            width: Dimensions.get('window').width - 20,
            maxHeight: '100%',
          }}
          originWhitelist={['*']}
          javaScriptEnabled
          domStorageEnabled
        />
      )}
    </View>
  );
}
