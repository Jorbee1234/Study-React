import automotivoThumb from "../../assets/categoria/thumbnail/automotivo.png";
import eletronicosThumb from "../../assets/categoria/thumbnail/eletronicos.png";
import escritorioThumb from "../../assets/categoria/thumbnail/escritorio.png";
import jogosThumb from "../../assets/categoria/thumbnail/jogos.png";
import somThumb from "../../assets/categoria/thumbnail/som.png";
import automotivoHeader from "../../assets/categoria/header/automotivo.png";
import eletronicosHeader from "../../assets/categoria/header/eletronicos.png";
import escritorioHeader from "../../assets/categoria/header/escritorio.png";
import jogosHeader from "../../assets/categoria/header/jogos.png";
import somHeader from "../../assets/categoria/header/som.png";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    nome: "Eletrônicos",
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: "eletronicos",
    descricao: "Os melhores e mais atuais dispositivos eletrônicos estão aqui!",
  },
  {
    nome: "Automotivo",
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: "automotivos",
    descricao:
      "Encontre aqui equipamentos para deixar seu carro com a sua cara!",
  },
  {
    nome: "Jogos",
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: "jogos",
    descricao: "Adquira os consoles e jogos mais atuais do mercado !",
  },
  {
    nome: "Escritório",
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: "escritorio",
    descricao: "Tudo para o que escritório ficar incrível!",
  },
  {
    nome: "Som e imagem",
    thumbnail: somThumb,
    header: somHeader,
    id: "som",
    descricao: "Curta suas músicas e seus filmes com a melhor qualidade!",
  },
];

const categoriasSlice = createSlice({
  name: "categorias",
  initialState,
});

export default categoriasSlice.reducer;
