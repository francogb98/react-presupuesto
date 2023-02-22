import Gasto from "./Gasto";

function ListadoGastos({
  gastos,
  gastoEditar,
  setGastoEditar,
  eliminarGasto,
  gastosFiltrados,
  filtro,
}) {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? "Gastos"
              : "No hay Gastos en esta categoria aun"}
          </h2>

          {gastosFiltrados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              gastoEditar={gastoEditar}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastosFiltrados.length ? "Gastos" : "No hay Gastos aun"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              gastoEditar={gastoEditar}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default ListadoGastos;
