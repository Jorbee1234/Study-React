import './App.css';
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div className="App">

      <h1>Fundamentos React</h1>

      <div className="Cards">
      <Card titulo= "#013 - MegaSena" color="#5cd187">
        <Mega></Mega>
      </Card>

      <Card titulo= "#012 - Contador" color="#2c424f">
        <Contador numeroInicial={10}></Contador>
      </Card>

      <Card titulo= "#011 - Componente controlado" color="#663a2f">
        <Input></Input>
      </Card>

      <Card titulo= "#010 - Comunicação indireta" color="#f2df63">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo= "#09 - Comunicação direta" color="#fc03b1">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo= "#08 - Par ou Impar" color="#b9f542">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{nome:'Jorbe'}}></UsuarioInfo>
        <UsuarioInfo usuario={{}}></UsuarioInfo>
      </Card>

      <Card titulo= "#07 - Desafio de Repetição" color="#FF432E">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo= "#06 - Repetição" color="#054F77">
        <ListaAlunos></ListaAlunos>
      </Card>


      <Card titulo= "#05 - Componentes com filhos" color="#FFA500">
        <Familia sobrenome="Junior">
          <FamiliaMembro nome="Jorbe" />
          <FamiliaMembro nome="Bruna" />
          <FamiliaMembro nome="Daniel" />
        </Familia>
      </Card>

      <Card titulo = "#04 - Desafio aleatório" color="#090">
        <Aleatorio min={10} max={60}/>
      </Card>

      <Card titulo = "#03 - Fragmento" color="#e94c6f">
        <Fragmento></Fragmento>
      </Card>

      <Card titulo = "#02 - Com parametro" color="#E8B71A">
      <ComParametro
        titulo="Segundo componente"
        subtitulo="Jorbe"
        nota={9}
      ></ComParametro>
      </Card>

      <Card titulo = "#01 - Primeiro" color="#588C73">
      <Primeiro></Primeiro>
      </Card>
      </div>
      
    </div>
  );
};
