import Card from "./Card";
import "./Intervalo.css";
import React from "react";
import { connect } from "react-redux";
import { setMax, setMin } from "../store/storeConfig"; // <- usando a action correta

const intervalo = (props) => {
  return (
    <Card title="Intervalo de números" red>
      <div className="Intervalo">
        <span>
          <strong>Minimo:</strong>
          <input
            type="number"
            value={props.min}
            onChange={(e) => props.alteraMinimo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={props.max}
            onChange={(e) => props.alteraMaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alteraMinimo: (novoMinimo) => dispatch(setMin(novoMinimo)),
    alteraMaximo: (novoMaximo) => dispatch(setMax(novoMaximo)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(intervalo);
