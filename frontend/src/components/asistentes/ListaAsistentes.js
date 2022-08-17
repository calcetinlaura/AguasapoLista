import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./ListaAsistentes.css";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
  useAsyncDebounce,
} from "react-table";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
//const URI = 'https://aguasapo.es/asistentesConcierto/'
const URI = "http://localhost:8000/concierto/";
const ListaAsistentes = () => {
  const getAsistentes = () => {
    axios.get(URI).then((response) => {
      setData(response.data);
    });
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    getAsistentes();
  }, []);
  //procedimineto para mostrar todos los asistentes
  /*const getAsistentes = async () => {
    const response = await axios.get(URI);
    console.log(response.data);
    setData(response.data);
  }*/

  //procedimineto para borrar asistentes
  const deleteAsistente = async (id) => {
    await axios.delete(`${URI}${id}`);
    getAsistentes();
  };
  /*
   
   //Buscador
   export function GlobalFilter({
     globalFilter,
     setGlobalFilter
   }) {
     const [value, setValue] = useState(globalFilter);
 
     const onChange = useAsyncDebounce((value) => {
       setGlobalFilter(value || undefined);
     }, 200);
     return (
       <div>
         <Label>Search Table: </Label>
         <Input
           value={value || ""}
           onChange={(e) => {
             setValue(e.target.value);
             onChange(e.target.value);
           }}
           placeholder=" Enter value "
           className="w-25"
           style={{
             fontSize: "1.1rem",
             margin: "15px",
             display: "inline",
           }}
         />
       </div>
     );
   }*/

  function Buscador({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const totalPersonasRegistro = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);

    const onFilterChange = useAsyncDebounce(
      (value) => setGlobalFilter(value || undefined),
      5
    );

    const handleInputChange = (e) => {
      setValue(e.target.value);
      onFilterChange(e.target.value);
    };

    return (
      <div className="buscador">
        <input
          value={value || ""}
          onChange={handleInputChange}
          placeholder={`Buscar por nombre entras los ${totalPersonasRegistro} registros`}
        />
      </div>
    );
  }

  /*let totalAdultos = 0;
  const accountData = props.accounts;
 
  if (accountData.length > 0) {
    for (let i = 0; i < accountData.length; i++) {
      marketValSum += accountData[i].marketValue;
    }
  }*/
  const columns = useMemo(
    () => [
      {
        Header: "Grupo",
        accessor: "grupo",
      },
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Adult@s",
        accessor: "entradasAdultos",
        Cell: ({ value }) => (value === 0 ? null : value),
        Footer: (info) => {
          const total = useMemo(
            () =>
              info.rows.reduce(
                (sum, row) => row.values.entradasAdultos + sum,
                0
              ),
            [info.rows]
          );

          return <>{total}</>;
        },
      },
      {
        Header: "Pubert@s",
        accessor: "entradasPubertos",
        Cell: ({ value }) => (value === 0 ? null : value),

        Footer: (info) => {
          const total = useMemo(
            () =>
              info.rows.reduce(
                (sum, row) => row.values.entradasPubertos + sum,
                0
              ),
            [info.rows]
          );

          return <>{total}</>;
        },
      },
      {
        Header: "Peques",
        accessor: "entradasPeques",
        Cell: ({ value }) => (value === 0 ? null : value),
        Footer: (info) => {
          const total = useMemo(
            () =>
              info.rows.reduce(
                (sum, row) => row.values.entradasPeques + sum,
                0
              ),
            [info.rows]
          );

          return <>{total}</>;
        },
      },
      {
        Header: "Total Pago",
        id: "totalPago",
        accessor: (row) => {
          var total;
          row.grupo === "Aguasaper"
            ? (total = null)
            : row.grupo === "Gratis"
            ? (total = null)
            : (total = row.entradasAdultos * 20 + row.entradasPubertos * 12);
          return <>{total}</>;
        },
        Footer: (columns) => {
          /* let totalDInero = 0
           for (let i = 0; i <= columns.entradasAdultos.length; i++) {
             totalDInero += columns.entradasAdultos[i]
           }
           return 'Total: ' + totalDInero*/
        },
        /*  Footer: info => {
            const total = useMemo(
              () => info.rows.reduce((sum, row) => row.values.totalPago + sum, 0),
              [info.rows]
            );
  
            return <>{total}</>;
          }*/
        /*
                footer: () => {
                  var ageSum = 0
                  for (let i = 0; i <= asistentes.length; i++) {
                    alert("caracol");
                    ageSum += asistentes[i].entradasAdultos
                  }
                  return <>{ageSum}</>;
                }
              },*/
      },
      {
        Header: "Cobro",
        accessor: "pago",
        Cell: ({ row, value }) =>
          row.original.grupo === "Aguasaper" ? (
            <span className="celdaGris">""</span>
          ) : row.original.grupo === "Gratis" ? (
            <span className="celdaGris">""</span>
          ) : value === "Pagado" ? (
            <span className="positivo">{value}</span>
          ) : (
            value
          ),
      },
      {
        Header: "Método Pago",
        accessor: "pagoMetodo",
        Cell: ({ row, value }) =>
          row.original.grupo === "Aguasaper" ? (
            <span className="celdaGris">""</span>
          ) : row.original.grupo === "Gratis" ? (
            <span className="celdaGris">""</span>
          ) : (
            value
          ),
      },
      {
        Header: "Persona Pago",
        accessor: "pagoPersona",
        Cell: ({ row, value }) =>
          row.original.grupo === "Aguasaper" ? (
            <span className="celdaGris">""</span>
          ) : row.original.grupo === "Gratis" ? (
            <span className="celdaGris">""</span>
          ) : (
            value
          ),
      },
      {
        Header: "Asistencia",
        accessor: "asistencia",
        Cell: (props) => {
          return props.value === "1" ? (
            <span className="positivo">Dentro</span>
          ) : props.value === "0" ? (
            "No ha llegado"
          ) : (
            "No ha llegado"
          );
        },
      },
      {
        Header: "Actions",
        accessor: (row) => {
          return (
            <div>
              <Link to={`/edit/${row.id}`} className="button is-small is-info">
                <i className="fas fa-edit"></i>
              </Link>
              <span onClick={() => deleteAsistente(row.id)}>
                <i className="fas fa-trash action"></i>
              </span>
            </div>
          );
        },
      },
    ],
    []
  );
  const table = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 100,
        pageIndex: 0,
        sortBy: [
          {
            id: "id",
            desc: false,
          },
        ],
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { globalFilter, pageIndex, pageSize },
  } = table;

  return (
    <div className="privatePages">
      <h3>Lista de asistentes</h3>
      <div className="navTabla">
        <Link to="/add" className="buttonAdd">
          <i className="fas fa-plus"></i>Añadir
        </Link>
        <Buscador
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      {/*TABLA-----------------------*/}
      <table
        className="tablaAsistentes table table-striped table-bordered"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "desc"
                        : "asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((group) => (
            <tr {...group.getFooterGroupProps()}>
              {group.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")}</td>
              ))}
            </tr>
          ))}
          {/*<tfoot>
            <tr>
              <td colSpan={2} className="text-right">
                <strong>TOTAL</strong>
              </td>
              <td className="text-right">
                <strong></strong>
              </td>
              <td className="text-right">
                <strong></strong>
              </td>
              <td className="text-right">
                <strong></strong>
              </td>
              <td className="text-right"></td>
              <td className="text-right"></td>
              <td className="text-right"></td>
              <td className="text-right"></td>
              <td className="text-right"></td>
              <td className="text-right"></td>
              <td className="text-right"></td>
            </tr>
              </tfoot>*/}
        </tfoot>
      </table>
      <div className="pagination">
        <span>
          Página
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>
        </span>
        <div className="controls">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            <BiFirstPage className="page-controller" />
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <MdKeyboardArrowLeft className="page-controller" />
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <MdKeyboardArrowRight className="page-controller" />
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <BiLastPage className="page-controller" />
          </button>
        </div>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 50, 75, 100, 150, 200].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ListaAsistentes;
