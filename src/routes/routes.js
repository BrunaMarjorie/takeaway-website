import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import pages
import Menu from '../pages/menu/menuList';
import Homepage from '../pages/homepage/homepage';
import SignIn from '../pages/signIn/signIn';
import SignUp from '../pages/signUp/signUp';
import ForgotPassword from '../pages/forgotPassword/forgot';
import Logout from '../pages/logout';
import Takeaway from '../pages/takeaway/takeaway';
import Delivery from '../pages/delivery/delivery';
import Booking from '../pages/booking/booking';
import StaffPage from '../pages/staff/staff';
import Invoice from '../services/printer/print';
import PrivateRoute from './privateRoutes';



const Routes = () => {

    return (
        <Router>
            <Switch>
                {/* set paths  */}
                <Route path="/menu" exact component={Menu} />
                <PrivateRoute path="/staffpage" exact component={StaffPage} />
                <PrivateRoute path="/booking" exact component={Booking} />
                <PrivateRoute path="/takeout" exact component={Takeaway} />
                <PrivateRoute path="/delivery" exact component={Delivery} />
                <Route path="/login" exact component={SignIn} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/register" exact component={SignUp} />
                <PrivateRoute path="/invoice" exact component={Invoice} />
                <Route path="/forgotpassword" exact component={ForgotPassword} />
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>
    )
}


export default Routes;

