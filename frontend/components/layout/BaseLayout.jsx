import Header from "@/components/header/header-1";
import DefaultFooter from "@/components/footer/default";

const BaseLayout = ({children}) => {
    return(
        <>
            <Header />
                {children}
            <DefaultFooter />
        </>
    )
}

export default BaseLayout;