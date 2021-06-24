import React, { ReactNode } from "react";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  const { secondary100, secondary40, heading } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>
      {action && <View>{action}</View>}
    </LinearGradient>
  );
}
