const Estudante = ({ nome, curso, universidade, disciplina, digaOi }) => {
  return (
    <div>
      Nome: {nome}
      <br />
      Curso: {curso}
      <br />
      Universidade: {universidade}
      <br />
      Disciplina: {disciplina}
      <br />
      <button type="button" onClick={() => digaOi(nome)}>
        Diga Oi
      </button>
    </div>
  );
};

export default Estudante;
