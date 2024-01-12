import Link from "next/link"
const ActionButton = ({id}) => {
    return (
        <div className="row x-gap-10 y-gap-10 items-center">
            <div className="col-auto">
                <Link className="flex-center bg-light-2 rounded-4 size-35" href='/country/add'>
                <i className="icon-eye text-16 text-light-1" />
                </Link>
            </div>
            <div className="col-auto">
                <Link className="flex-center bg-light-2 rounded-4 size-35" href='/country/add'>
                <i className="icon-edit text-16 text-light-1" />
                </Link>
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