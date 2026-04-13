import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const signUp = () => {
  return (
    <View>
      <Text>Sign Up</Text>
      <Link href="/(auth)/sign-up">
        Sign In
      </Link>
    </View>
  )
}

export default signUp