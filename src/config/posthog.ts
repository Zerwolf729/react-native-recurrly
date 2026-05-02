import PostHog from "posthog-react-native";

const posthogKey = process.env.EXPO_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.EXPO_PUBLIC_POSTHOG_HOST;

if (!posthogKey) {
  console.warn(
    "[PostHog] EXPO_PUBLIC_POSTHOG_KEY is not set — analytics disabled.",
  );
}

export const posthog = new PostHog(posthogKey ?? "disabled", {
  host: posthogHost,
  disabled: !posthogKey,
});
