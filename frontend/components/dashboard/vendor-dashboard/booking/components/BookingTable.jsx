
'use client'

import { useTable, useSortBy, usePagination } from "react-table";
import Pagination from "../../common/Pagination";
import { useMemo } from "react";

const BookingTable = ({column, values}) => {
  /* const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabItems = [
    "All Booking",
    "Completed",
    "Processing",
    "Confirmed",
    "Cancelled",
    "Paid",
    "Unpaid",
    "Partial Payment",
  ];*/


  const columns = useMemo(() =>  column, [])
  const data = useMemo(() => values, [])

  const tableInstance = useTable({
    columns,
    data
  },
    useSortBy,
    usePagination)

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, page, nextPage, previousPage, canNextPage, canPreviousPage, state, pageOptions } = tableInstance

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        {/* <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {tabItems.map((item, index) => (
            <div className="col-auto" key={index}>
              <button
                className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${
                  activeTab === index ? "is-tab-el-active" : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                {item}
              </button>
            </div>
          ))}
        </div> */}
        {/* End tabs */}

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-3 -border-bottom col-12" {...getTableProps()}>
                <thead className="bg-light-2">
                  {
                    headerGroups.map(headerGroup => (
                      <tr key={headerGroup.getHeaderGroupProps().key} {...headerGroup.getHeaderGroupProps()}>
                        <th>S No</th>
                        {headerGroup.headers.map(column => (
                            <th key={column.getHeaderProps().key} 
                              {...column.getHeaderProps(column.getSortByToggleProps())}

                              >{column.render('Header')}</th>
                          )
                        )}
                      </tr>
                    ))
                  }
                </thead>
                <tbody {...getTableBodyProps()}>
                  {
                    page.map((row,index) => {
                      prepareRow(row)
                      return(
                        <tr key={row.getRowProps().key} {...row.getRowProps()}>
                          <td>{index+1}</td>
                          {row.cells.map(cell => {
                            return <td key={cell.getCellProps().key} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                          })}
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination previousPage={previousPage} nextPage={nextPage} canNextPage={canNextPage} canPreviousPage={canPreviousPage} state={state} pageOptions={pageOptions}/>
    </>
  );
};

export default BookingTable;
