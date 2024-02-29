import Header from '@/components/header/dashboard-header'
import Footer from '@/components/dashboard/vendor-dashboard/common/Footer'
import Sidebar from '@/components/dashboard/vendor-dashboard/common/Sidebar'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const AdminWrapper = ({children}) => {
    const state = useSelector((state) => state.auth.userInfo)
    const router = useRouter()

    if(!state || !state.isAdmin) {
        router.push('/')
    } else {
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
            </>
        )
    }
}

export default AdminWrapper