import Header from "components/Header";
import styles from "./Carrinho.module.scss";
import { useSelector, useDispatch } from "react-redux";
import Item from "components/Item";
import { resetarCarrinho } from "store/reducers/carrinho";

export default function Carrinho() {
  const dispatch = useDispatch();
  const { carrinho, total } = useSelector((state) => {
    let total = 0;
    const regexp = new RegExp(state.busca, "i");
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
      total += item.preco * itemNoCarrinho.quantidade;
      if (item.titulo.match(regexp)) {
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade,
        });
      }
      return itens;
    }, []);
    return {
      carrinho: carrinhoReduce,
      total,
    };
  });
  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Produtos que foram adicionados"
      />
      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <Item key={item.id} {...item} carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Total: <strong> R$ {total.toFixed(2)}</strong>
          </span>
        </div>
        <button
          className={styles.finalizar}
          onClick={() => dispatch(resetarCarrinho())}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
