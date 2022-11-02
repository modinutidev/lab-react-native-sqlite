import { useEffect } from "react";
import {
  adicionaNota,
  buscarNota,
  buscarNotas,
  criaTabela,
  deletarNota,
  editaNota,
} from "./src/services/Notas";

export default function App() {
  useEffect(() => {
    criaTabela();
    novaNota({
      titulo: "JavaScript",
      categoria: "Educação",
      texto: "Estudar promises.",
    });
    novaNota({
      titulo: "JavaScript",
      categoria: "Educação",
      texto: "Estudar promises.",
    });
    modificarNota({
      titulo: "Pagar conta de luz",
      categoria: "Financeiro",
      texto: "Não atrasar.",
      id: 1,
    });
    mostrarNotas();
    mostraNota(1);
    excluirNota(1);
    mostrarNotas();
  }, []);

  async function novaNota(nota) {
    console.log(await adicionaNota(nota));
  }

  async function mostraNota(idNota) {
    console.log(await buscarNota(idNota));
  }

  async function mostrarNotas() {
    console.log(await buscarNotas());
  }

  async function modificarNota(nota) {
    console.log(await editaNota(nota));
  }

  async function excluirNota(idNota) {
    console.log(await deletarNota(idNota));
  }

  return <></>;
}
