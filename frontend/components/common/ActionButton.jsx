
const ActionButton = ({id, openModal}) => {
    return (
        <div className="row x-gap-10 y-gap-10 items-center">
            <div className="col-auto">
                <button className="flex-center bg-light-2 rounded-4 size-35" onClick={() => openModal("View", id)}>
                <i className="icon-eye text-16 text-light-1" />
                </button>
            </div>
            <div className="col-auto">
                <button className="flex-center bg-light-2 rounded-4 size-35" onClick={() => openModal("Edit", id)}>
                <i className="icon-edit text-16 text-light-1" />
                </button>
            </div>
            <div className="col-auto">
                <button className="flex-center bg-light-2 rounded-4 size-35">
                <i className="icon-trash-2 text-16 text-light-1" />
                </button>
            </div>
        </div>
    )
}

export default ActionButton