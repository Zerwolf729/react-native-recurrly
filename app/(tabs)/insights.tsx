import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useMemo, useState } from "react";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import dayjs from "dayjs";
import SubscriptionCard from "@/components/SubscriptionCard";
import { useSubscriptionStore } from "@/lib/subscriptionStore";
import { useRouter } from "expo-router";

const SafeAreaView = styled(RNSafeAreaView);

export default function Insights() {
  const router = useRouter();
  const { subscriptions } = useSubscriptionStore();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const totalExpenses = useMemo(() => {
    return subscriptions.reduce((acc, sub) => acc + sub.price, 0);
  }, [subscriptions]);

  const currentMonth = dayjs().format("MMMM YYYY");

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className="mb-5">
          <Text className="text-2xl font-sans-bold text-primary">
            Monthly Insights
          </Text>
        </View>

        <View className="mb-5 rounded-3xl bg-card p-5 border border-border">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-sans-bold text-primary">
              Upcoming
            </Text>
            <Text className="list-action-text">View all</Text>
          </View>

          <View className="flex-row justify-between items-end h-40">
            {[20, 35, 25, 45, 30, 22, 28].map((val, index) => (
              <View key={index} className="items-center">
                <View
                  style={{ height: val * 2 }}
                  className={`w-3 rounded-full ${
                    index === 3 ? "bg-accent" : "bg-primary"
                  }`}
                />
                <Text className="text-xs text-muted-foreground mt-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View className="mb-5 rounded-3xl bg-card p-5 border border-border">
          <Text className="text-lg font-sans-semibold text-muted-foreground">
            Expenses
          </Text>

          <View className="flex-row justify-between items-center mt-2">
            <Text className="text-2xl font-sans-bold text-primary">
              -${totalExpenses.toFixed(2)}
            </Text>
            <Text className="text-sm font-sans-semibold text-success">
              +12%
            </Text>
          </View>

          <Text className="text-sm text-muted-foreground mt-1">
            {currentMonth}
          </Text>
        </View>

        <View className="mb-5">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-sans-bold text-primary">History</Text>
            <Pressable onPress={() => router.push("/(tabs)/subscriptions")}>
              <Text className="list-action-text">View all</Text>
            </Pressable>
          </View>

          {subscriptions.map((item) => (
            <View key={item.id} className="mb-4">
              <SubscriptionCard
                {...item}
                expanded={expandedId === item.id}
                onPress={() =>
                  setExpandedId((prev) => (prev === item.id ? null : item.id))
                }
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
