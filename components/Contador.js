const Contador = () => {
  const [conta, setContador] = React.useState(0);

  const aumentar = () => setContador(conta + 1);
  const disminuir = () => setContador(conta - 1);

  return (
    <div>
      <h1 className={conta < 0 ? "menor" : "mayor"}>Contador : {conta}</h1>
      <hr />
      <button onClick={aumentar}>Aumentar +</button>
      <button onClick={disminuir}>Disminuir +</button>
    </div>
  );
};
