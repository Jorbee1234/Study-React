import styles from "./Item.module.scss";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { FaCartPlus, FaCheck, FaEdit } from "react-icons/fa";
import { mudarFavorito, mudarItem, deletarItem } from "store/reducers/items";
import { useDispatch, useSelector } from "react-redux";
import { mudarCarrinho, mudarQuantidade } from "store/reducers/carrinho";
import classNames from "classnames";
import { useState } from "react";
import Input from "components/Input";
import { TiDeleteOutline } from "react-icons/ti";

const iconeProps = {
  size: 24,
  color: "#041833",
};

const quantidadeProps = {
  size: 32,
  color: "#1875E8",
};

export default function Item(props) {
  const { titulo, foto, preco, descricao, favorito, id, carrinho, quantidade } =
    props;
  const [modoDeEdicao, setModoDeEdicao] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const dispatch = useDispatch();
  const estaNoCarrinho = useSelector((state) =>
    state.carrinho.some((itemNoCarrinho) => itemNoCarrinho.id === id)
  );

  function resolverFavorito() {
    dispatch(mudarFavorito(id));
  }

  function resolverCarrinho() {
    dispatch(mudarCarrinho(id));
  }

  return (
    <div
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: carrinho,
      })}
    >
      <TiDeleteOutline
        {...iconeProps}
        className={`${styles["item-acoes"]} ${styles["item-deletar"]}`}
        onClick={() => dispatch(deletarItem({ id }))}
        type="button"
      />
      <div className={styles["item-imagem"]}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles["item-descricao"]}>
        <div className={styles["item-titulo"]}>
          {modoDeEdicao ? (
            <Input
              value={novoTitulo}
              onChange={(e) => setNovoTitulo(e.target.value)}
            />
          ) : (
            <h2>{titulo}</h2>
          )}
          <p>{descricao}</p>
        </div>
        <div className={styles["item-info"]}>
          <div className={styles["item-preco"]}>R$ {preco.toFixed(2)}</div>
          <div className={styles["item-acoes"]}>
            {favorito ? (
              <AiFillHeart
                {...iconeProps}
                color="#ff0000"
                className={styles["item-acao"]}
                onClick={resolverFavorito}
              />
            ) : (
              <AiOutlineHeart
                {...iconeProps}
                className={styles["item-acao"]}
                onClick={resolverFavorito}
              />
            )}
            {carrinho ? (
              <div className={styles.quantidade}>
                Quantidade:
                <AiFillMinusCircle
                  {...quantidadeProps}
                  onClick={() => {
                    if (quantidade >= 1) {
                      dispatch(mudarQuantidade({ id, quantidade: -1 }));
                    }
                  }}
                />
                <span>{String(quantidade || 0).padStart(2, "0")}</span>
                <AiFillPlusCircle
                  {...quantidadeProps}
                  onClick={() =>
                    dispatch(mudarQuantidade({ id, quantidade: +1 }))
                  }
                />
              </div>
            ) : (
              <>
                <FaCartPlus
                  {...iconeProps}
                  color={estaNoCarrinho ? "#187E88" : iconeProps.color}
                  className={styles["item-acao"]}
                  onClick={resolverCarrinho}
                />
                {modoDeEdicao ? (
                  <FaCheck
                    {...iconeProps}
                    className={styles["item-acao"]}
                    onClick={() => {
                      setModoDeEdicao(false);
                      dispatch(mudarItem({ id, item: { titulo: novoTitulo } }));
                    }}
                  />
                ) : (
                  <FaEdit
                    {...iconeProps}
                    className={styles["item-acao"]}
                    onClick={() => setModoDeEdicao(true)}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
