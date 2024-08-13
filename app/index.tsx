import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoanCard from "../components/LoanCard";
import CustomBtn from "../components/CustomBtn";
import { router } from "expo-router";
import { gql, useQuery } from "@apollo/client";

// GraphQL query
const LOANS_QUERY = gql`
  query loans {
    loanProducts {
      id
      name
      interestRate
      maximumAmount
    }
  }
`;

interface LoanProduct {
  id: string;
  name: string;
  interestRate: number;
  maximumAmount: number;
}

interface LoansData {
  loanProducts: LoanProduct[];
}

const Index: React.FC = () => {
  const { data, loading, error } = useQuery<LoansData>(LOANS_QUERY);

  if (loading) {
    return (
      <SafeAreaView className="bg-main h-full">
        <Text className="font-rBold text-[32px] w-[262px] mb-7 px-4 my-6">
          Loading...
        </Text>
      </SafeAreaView>
    );
  }

  if (error) {
    console.error("Error fetching loans:", error);
    return (
      <SafeAreaView className="bg-main h-full">
        <Text className="font-rBold text-[32px] w-[262px] mb-7 px-4 my-6">
          Error: {error.message}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-main h-full">
      <Text className="font-rExtraBold text-[32px] w-[262px] mb-7 px-4 my-6">
        Loan Application Dashboard
      </Text>

      <ScrollView>
        <View className="w-full justify-center h-full px-4 space-y-5">
          {data?.loanProducts.map((loan) => (
            <LoanCard
              key={loan.id}
              title={loan.name}
              amount={loan.maximumAmount}
              interest={loan.interestRate}
            />
          ))}
        </View>
      </ScrollView>

      <View className="w-full justify-center px-4 my-6">
        <CustomBtn
          title="Apply for a Loan"
          containerStyles="w-full"
          handlePress={() => router.push("/applyForLoan")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
