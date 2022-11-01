import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { adicionaNota, buscarNotas, criaTabela } from "./src/services/Notas";

async function novaNota() {
  const novaNota = {
    titulo: "Primeira nota",
    categoria: "Educação",
    texto: "Estudar JavaScript",
  };

  console.log(await adicionaNota(novaNota));
}

async function mostrarNotas() {
  console.log(await buscarNotas());
}

export default function App() {
  useEffect(() => {
    criaTabela();
    novaNota();
    mostrarNotas();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! ok</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
