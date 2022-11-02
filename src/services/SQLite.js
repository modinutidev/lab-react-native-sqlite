import * as SQLite from "expo-sqlite";

function abreConexao() {
  const database = SQLite.openDatabase("meubanco.db");
  return database;
}

export const db = abreConexao();
