import { useSelector, useDispatch } from "react-redux";
import styles from "./Busca.module.scss";
import { mudarBusca, resetarBusca } from "store/reducers/busca";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Busca() {
  const busca = useSelector((state) => state.busca);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch]);
  return (
    <div className={styles.busca}>
      <input
        className={styles.input}
        placeholder="Procure aqui:"
        value={busca}
        onChange={(evento) => dispatch(mudarBusca(evento.target.value))}
      />
    </div>
  );
}
