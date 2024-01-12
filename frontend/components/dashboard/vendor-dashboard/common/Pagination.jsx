
'use client'

const Pagination = ({previousPage, nextPage, canNextPage, canPreviousPage, state, pageOptions}) => {

  const { pageIndex } = state;
  
  return (
    <div className="border-top-light mt-30 pt-30">
      <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
        <div className="col-auto md:order-1">
          <button className="button -blue-1 size-40 rounded-full border-light" onClick={previousPage} disabled={!canPreviousPage}>
            <i className="icon-chevron-left text-12" />
          </button>
        </div>

        <div className="col-md-auto md:order-3">
          <div className="row x-gap-20 y-gap-20 items-center md:d-none">
            <div className="col-auto">
              Page {pageIndex+1} of {pageOptions.length}
            </div>
          </div>
        </div>

        <div className="col-auto md:order-2">
          <button className="button -blue-1 size-40 rounded-full border-light" onClick={nextPage} disabled={!canNextPage}>
            <i className="icon-chevron-right text-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
