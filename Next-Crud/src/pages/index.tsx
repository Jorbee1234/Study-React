import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { cliente, clientes, tabelaVisivel, exibirTabela, novoCliente, clienteSelecionado, clienteExcluido, salvarCliente } = useClientes()

  return (  
    <div className={`
      flex h-screen justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
                    clienteSelecionado={clienteSelecionado} 
                    clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => exibirTabela()}
          />
        )}
      </Layout>
    </div>
  );
}
