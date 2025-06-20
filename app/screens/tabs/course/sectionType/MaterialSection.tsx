import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

export default function MaterialSection() {
    const [pdfUri, setPdfUri] = useState<string | null>(null);
    useEffect(() => {
        const loadPdf = async () => {
            const asset = Asset.fromModule(require('@/assets/pdfs/material.pdf'));
            await asset.downloadAsync();
            setPdfUri(asset.localUri);
        };
        loadPdf();
    }, []);


    return (
        <View className='bg-light-primary p-3 flex-1'>
            <Text className=" text-[22px] font-semibold text-justify text-light-fourth">Tema 1 - Introduccion</Text>
            {pdfUri && (
                <WebView
                    source={{ uri: pdfUri }}
                    style={{
                        marginTop: 10,
                        width: Dimensions.get('window').width - 20,
                        maxHeight: '100%',
                    }}
                    originWhitelist={['*']}
                    javaScriptEnabled
                    domStorageEnabled
                />
            )}
        </View>
    )
}