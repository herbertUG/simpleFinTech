import { View, Text } from "react-native";
import React from "react";
import CustomBadge from "./CustomBadge";
import { router } from "expo-router";

interface LoanCardProps {
  id: number;
  title: string;
  amount: string;
  interest: number;
}

const LoanCard: React.FC<LoanCardProps> = ({ id, title, amount, interest }) => {
  return (
    <View className="w-full justify-between h-[139px] mb-5 rounded-[10px] p-5 bg-secondary border-solid border-[1px] border-gray">
      <Text className="font-rBold text-[20px]">{title}</Text>
      <Text className="font-interBold mt-3 text-[12px]">Maximum Amount:</Text>
      <Text className="font-interBold text-[24px] text-primary">${amount}</Text>

      <View className="flex-row justify-between items-center align-middle w-full">
        <Text className="font-interBold mt-3 text-[12px]">Interest: {interest}%</Text>
        <CustomBadge title="Learn More" handleSelect={() => router.push(`/`)} />
      </View>
    </View>
  );
};

export default LoanCard;
