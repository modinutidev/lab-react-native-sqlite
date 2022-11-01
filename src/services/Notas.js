import { db } from "./SQLite";

export function criaTabela() {
  db.transaction((transaction) => {
    transaction.executeSql(
      "CREATE TABLE IF NOT EXISTS " +
        "Notas " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);"
    );
  });
}

export async function adicionaNota(nota) {
  const { titulo, categoria, texto } = nota;

  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        "INSERT INTO Notas (titulo, categoria, texto) VALUES (?, ?, ?);",
        [titulo, categoria, texto],
        () => {
          resolve("Nota adicionada");
        }
      );
    });
  });
}

export async function buscarNotas() {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        "SELECT * FROM Notas;",
        [],
        (transaction, result) => {
          resolve(result.rows._array);
        }
      );
    });
  });
}
