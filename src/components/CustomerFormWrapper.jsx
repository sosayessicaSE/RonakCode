import { useParams, useNavigate } from "react-router-dom";
import CustomerForm from "./CustomerForm";

function CustomerFormWrapper() {
    let params = useParams()
    let navigate = useNavigate()
    // <Link> is good for static destinations / pages. => Navbar or a footer
    // useNavigate is good for dynamic destinations. Where the info might change based on a parameter, or conditional logic. ==> Authentication. Navigate here is authenticated or else here if not.

    return <CustomerForm params={params} navigate={navigate} />

}

export default CustomerFormWrapper