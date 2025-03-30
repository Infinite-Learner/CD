import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { pokeType, TableType } from "../Interfaces/poke.api-ditto";
import { useLocation } from "react-router";
import { ReactNode, useEffect, useState } from "react";
import "../css/table.css"

export const TankStack_table = () => {
  const location = useLocation(); /*  */
  const table_data: TableType[] = location.state.initialData;
  const ColumnHelper = createColumnHelper<TableType>();
  const [globalFilter, setGlobalFilter] = useState<any>("");
  const[sorting,setSorting] = useState<any>([]);
  const [pokes, setPokes] = useState<any>([]);
  console.log(table_data);
  useEffect(() => {
    setPokes(table_data as ReactNode);
  }, []);
  const columns = Object.keys(table_data[0]).map((e) =>
    ColumnHelper.accessor(e as keyof TableType, {
      id: e,
      cell: (info: any) => (
        <span className="table_cell" key={`cell_${e}`}>
          {info.getValue()}
        </span>
      ),
      header: () => (
        <span className="head_cell" key={`header_${e}`}>
          {e.toUpperCase()}
        </span>
      ),
    })
  );

  const createTable = useReactTable({
    data: pokes,
    columns,
    state:{
      sorting,
      globalFilter
    },
    initialState:{
      pagination:{
        pageSize:Math.ceil(table_data.length/4)
      }
    },
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel:getPaginationRowModel(),
    onSortingChange:setSorting,
    getSortedRowModel:getSortedRowModel(),
    getFilteredRowModel:getFilteredRowModel()
  });
  const table = (
    <>
      {createTable.getHeaderGroups().map((headerGroup) =>(
         <tr key = {headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <th key={header.id}> 
              <div {...{
                className:header.column.getCanSort()?"sortable":"",onClick:header.column.getToggleSortingHandler(),
              }}>
                {flexRender(
                  header.column.columnDef.header,header.getContext()
                )}
              </div>
          </th>
        )
        )}
         </tr>
        ))}
    </>
  );
  return (
    <>
    <div className="search-box">
      <input type="text" value={globalFilter??""} onChange={(e)=>setGlobalFilter(e.target.value)} 
      placeholder="Search..."/>

    </div>
      <table>
        <thead key={"thead"}>
          {table}
        </thead>
        <tbody key={"tbody"}>
          {createTable.getRowModel().rows.map((row) => (
            <tr key={row.id} className={row.id} onClick={(e)=>console.log(e.currentTarget.innerText.split("\t"))}>
              {row.getVisibleCells().map((cell) => {
                // console.log(flexRender(cell.column.columnDef.cell, cell.getContext())?.props?.row?.original);
               return (
                <td key={cell.id} className={row.id}>
                  {(flexRender(cell.column.columnDef.cell, cell.getContext()))}
                </td>
              )
              }
              )}
              
            </tr>))}
        </tbody>
      </table>
      <div className="pagemodel">
      <span>Items per page
      </span>
      <select name="
      " id="" value={createTable.getState().pagination.pageSize} onChange={(e)=>{
      createTable.setPageSize(parseInt(e.target.value))}}>
      {[5,10,15,table_data.length].map((pageSize)=>(
      <option key={pageSize} value={pageSize}>
        {pageSize}
      </option>
      ))
      }
      </select>
      </div>
    <div className="pageNav">
      <button onClick={()=>createTable.setPageIndex(0)} disabled={!createTable.getCanPreviousPage()}>
        {"<<"}
      </button>
      <button
      onClick={()=>createTable.previousPage()} disabled={!createTable.getCanPreviousPage()}>
        {"<"}
      </button>
        <input min={1} max={createTable.getPageCount()} type="number"  value={createTable.getState().pagination.pageIndex+1} onChange={(e)=>{
          const page = e.target.value?parseInt(e.target.value)-1:0;
          createTable.setPageIndex(page)
        }}/>
        <span> of {createTable.getPageCount()}</span>
        <button onClick={()=>createTable.setPageIndex(createTable.getPageCount()-1)} disabled={!createTable.getCanNextPage()}>
        {">>"}
      </button>
      <button
      onClick={()=>createTable.nextPage()} disabled={!createTable.getCanNextPage()}>
        {">"}
      </button>
    </div>
    </>
  );0
};
