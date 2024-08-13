import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const FormField = ({
  title,
  placeholder,
  value,
  handleChangeText,
  otherStyles
}) => {
  return (
    <View className={` ${otherStyles}`}>
      <Text className="font-interBold text-[16px]">{title}</Text>
      <View className="w-full h-12 rounded-[8px] items-center border-gray border">
        <TextInput
          className="flex-1 text-base ml-3 w-full"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor="#B1B1B1"
        />
      </View>
    </View>
  );
};

export default FormField;
