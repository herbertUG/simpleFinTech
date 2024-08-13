import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const CustomBadge = ({handleSelect, title}:{title:string}) => {
  return (
    <TouchableOpacity
      onPress={handleSelect}
      activeOpacity={0.7}
      className={`border-solid border-[1px] text-primary border-primary rounded-xl flex-row items-center h-[21px] px-5`}
    >
      <Text className="ml-2 font-rBold text-primary">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBadge