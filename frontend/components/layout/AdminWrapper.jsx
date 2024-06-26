import Header from '@/components/header/dashboard-header'
import Footer from '@/components/dashboard/vendor-dashboard/common/Footer'
import Sidebar from '@/components/dashboard/vendor-dashboard/common/Sidebar'
import CustomToast from '../toast/toast'

const AdminWrapper = ({children}) => {
    return (
        <>
            <div className="header-margin"></div>
            <Header />
            {/* End dashboard-header */}

            <div className="dashboard">
                <div className="dashboard__sidebar bg-white scroll-bar-1">
                <Sidebar />
                {/* End sidebar */}
                </div>
                {/* End dashboard__sidebar */}

                <div className="dashboard__main">
                    <div className="dashboard__content bg-light-2">
                        {children}
                        <Footer />
                    </div>
                </div>
            </div>
            <CustomToast />
        </>
    )
}

export default AdminWrapper