import { icons } from "@/constants/icons";

export const getSubscriptionIconKey = (name: string): keyof typeof icons => {
  const lower = name.toLowerCase();

  if (lower.includes("spotify")) return "spotify";
  if (lower.includes("figma")) return "figma";
  if (lower.includes("github")) return "github";
  if (lower.includes("notion")) return "notion";
  if (lower.includes("chatgpt") || lower.includes("openai")) return "openai";
  if (lower.includes("claude")) return "claude";
  if (lower.includes("canva")) return "canva";
  if (lower.includes("adobe")) return "adobe";
  if (lower.includes("medium")) return "medium";
  if (lower.includes("dropbox")) return "dropbox";

  return "wallet";
};
