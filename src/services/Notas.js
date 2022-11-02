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
          resolve("Nota adicionada!");
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

export async function buscarNota(idNota) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        "SELECT * FROM Notas WHERE id=?;",
        [idNota],
        (transaction, result) => {
          resolve(result.rows._array);
        }
      );
    });
  });
}

export async function editaNota(nota) {
  const { titulo, categoria, texto, id } = nota;

  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        "UPDATE Notas SET titulo=?, categoria=?, texto=? WHERE id=?;",
        [titulo, categoria, texto, id],
        () => {
          resolve("Nota atualizada com sucesso!");
        }
      );
    });
  });
}

export async function deletarNota(idNota) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("DELETE FROM Notas WHERE id=?;", [idNota], () => {
        resolve("Nota deletada!");
      });
    });
  });
}
