import React from "react";

import { ImageBackground, Text, View, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

import { Fontisto } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import BannerImg from "../../assets/banner.png";
import { ListHeader } from "../../components/ListHeader";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Yngredh",
      avatar_url: "https://github.com/yngredh.png",
      status: "online",
    },
    {
      id: "2",
      username: "Davi Henrique",
      avatar_url: "https://github.com/davihenrique05.png",
      status: "offline",
    },
    {
      id: "3",
      username: "Diego",
      avatar_url: "https://github.com/DiegoOlvr.png",
      status: "online",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      ></Header>

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>Criminosos em Ação...</Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
