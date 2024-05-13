import { useEffect, useRef } from "react";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { AppState, AppStateStatus } from "react-native";
import { MMKV } from "react-native-mmkv";

const storage = new MMKV({ id: "inactivity-storage" });

export const UserInactivityProvider = ({ children }: any) => {
  const appState = useRef(AppState.currentState);
  const router = useRouter();
  const isSignedIn = useAuth();

  useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );
    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = async (nextAppState: AppStateStatus) => {
    console.log(nextAppState);
  };

  return children;
};
