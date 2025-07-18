import Header from "components/Header";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Anuncie.module.scss";
import Button from "components/Button";
import { useForm } from "react-hook-form";
import { cadastrarItem } from "store/reducers/items";
import { useParams } from "react-router-dom";
import Input from "components/Input";

export default function Anuncie() {
  const dispatch = useDispatch();
  const { nomeCategoria = "" } = useParams();
  const categorias = useSelector((state) =>
    state.categorias.map(({ nome, id }) => ({ nome, id }))
  );
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      categoria: nomeCategoria,
    },
  });
  const { errors } = formState;

  function cadastrar(data) {
    dispatch(cadastrarItem(data));
  }
  return (
    <div className={styles.container}>
      <Header titulo="Anuncie aqui!" descricao="Anuncie seu produto!"></Header>
      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <Input
          className={errors.titulo ? styles["input-erro"] : ""}
          {...register("titulo", { required: "O campo titulo é obrigatório" })}
          placeholder="Titulo do produto"
          alt="titulo do produto"
        />
        {errors.titulo && (
          <span className={styles["mensagem-erro"]}>
            {" "}
            {errors.titulo.message}{" "}
          </span>
        )}
        <Input
          className={errors.descricao ? styles["input-erro"] : ""}
          {...register("descricao", {
            required: "O campo descrição é obrigatório",
          })}
          placeholder="Descrição do produto"
          alt="descrição do produto"
        />
        {errors.descricao && (
          <span className={styles["mensagem-erro"]}>
            {" "}
            {errors.descricao.message}{" "}
          </span>
        )}
        <Input
          {...register("foto")}
          placeholder="URL da foto do produto"
          alt="URL da foto do produto"
        />
        <select
          className={errors.categoria ? styles["input-erro"] : ""}
          {...register("categoria", { required: "O campo nome é categoria" })}
          disabled={nomeCategoria}
        >
          <option value="" disabled>
            {" "}
            Selecione a categoria{" "}
          </option>
          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        {errors.categoria && (
          <span className={styles["mensagem-erro"]}>
            {" "}
            {errors.categoria.message}{" "}
          </span>
        )}
        <Input
          className={errors.nome ? styles["input-erro"] : ""}
          {...register("preco", {
            required: "O campo nome é preço",
            valueAsNumber: true,
          })}
          type="number"
          placeholder="Preço do produto"
        />
        {errors.preco && (
          <span className={styles["mensagem-erro"]}>
            {" "}
            {errors.preco.message}{" "}
          </span>
        )}
        <Button type="submit">Cadastrar anuncio</Button>
      </form>
    </div>
  );
}
