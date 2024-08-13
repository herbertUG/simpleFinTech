import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomBtn from "../components/CustomBtn";
import { router } from "expo-router";
import FormField from "../components/FormField";

interface FormData {
  fullName: string;
  email: string;
  amount: string;
  purpose: string;
}

const ApplyForLoan = () => {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    amount: "",
    purpose: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const submit = async () => {
    if (Object.values(form).some((field) => field.trim() === "")) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!isValidEmail(form.email)) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    const amount = parseFloat(form.amount);
    if (isNaN(amount) || amount <= 0) {
      Alert.alert("Error", "Please enter a valid amount");
      return;
    }

    setIsSubmitting(true);

    try {
      const requestBody = {
        full_name: form.fullName,
        email: form.email,
        loan_amount: amount,
        loan_purpose: form.purpose,
      };

      const response = await fetch(`${apiUrl}/apply-loan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      await response.json();

      Alert.alert("Success", "Loan Application Submitted");
      setForm({
        fullName: "",
        email: "",
        amount: "",
        purpose: "",
      });
      router.replace("/");
    } catch (error) {
      Alert.alert("Error", `Submission failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-main h-full">
      <Text className="font-rBold text-[32px] w-[262px] mb-7 px-4 mt-10 ">
        Apply for a loan
      </Text>

      <ScrollView>
        <View className="w-full justify-center h-full px-4">
          <FormField
            title="Full Name"
            placeholder="Full Name"
            value={form.fullName}
            handleChangeText={(text: string) => setForm({ ...form, fullName: text })}
            otherStyles="mt-2"
          />

          <FormField
            title="Email"
            placeholder="yourname@example.com"
            value={form.email}
            handleChangeText={(text: string) => setForm({ ...form, email: text })}
            otherStyles="mt-2"
            keyboardType="email-address"
          />

          <FormField
            title="Loan Amount"
            placeholder="Amount"
            value={form.amount}
            handleChangeText={(text: string) => setForm({ ...form, amount: text })}
            otherStyles="mt-2"
            keyboardType="numeric"
          />

          <FormField
            title="Loan Purpose"
            placeholder="Purpose"
            value={form.purpose}
            handleChangeText={(text: string) => setForm({ ...form, purpose: text })}
            otherStyles="mt-2"
          />
        </View>
      </ScrollView>

      <View className="w-full justify-center px-4 my-6">
        <CustomBtn
          title={isSubmitting ? "Submitting..." : "Submit"}
          containerStyles="w-full"
          handlePress={submit}
          disabled={isSubmitting}
        />
      </View>
    </SafeAreaView>
  );
};

export default ApplyForLoan;
