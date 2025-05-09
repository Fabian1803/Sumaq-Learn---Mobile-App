import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type Proms = {
    href: string;
    value: string;
    route?: boolean;
}

export default function RecoveryNextButton({ href, value, route = false }: Proms) {
    return (
        <Link href={`${route ? '../' : './'}${href}`} asChild>
            <Pressable className="bg-light-fourth rounded-md p-4">
                <Text className="text-center text-light-primary text-[18px]">
                    {value}
                </Text>
            </Pressable>
        </Link>

    )
}