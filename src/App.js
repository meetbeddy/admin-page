import { Route, Switch } from "react-router-dom";
import "./App.css";
import SideNav from "./components/sidenav/SideNav";
import LandingPage from "./components/landingpage/LandingPage";
import OrderDisplay from "./components/order display/OrderDisplay";
import CustomerService from "./components/customerservice/CustomerService";
import UserMonitor from "./components/usermonitor/UserMonitor";
import LogisticCompanies from "./components/logistic/LogisticCompanies";
import AuditDisplay from "./components/audit/AuditDisplay";
import InventoryDisplay from "./components/inventory/InventoryDisplay";
import SrMonitorDisplay from "./components/salesrep/SrMonitorDisplay";
import Dashboard from "./components/dashboard/Dashboard";
import Messages from "./components/customerservice/Messages";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Switch>
        <Route exact path="/landingpage" component={LandingPage} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/orders-display" component={OrderDisplay} />
        <Route exact path="/customer-service" component={CustomerService} />
        <Route exact path="/user-monitoring" component={UserMonitor} />
        <Route exact path="/logistic-companies" component={LogisticCompanies} />
        <Route exact path="/audit" component={AuditDisplay} />
        <Route exact path="/inventory" component={InventoryDisplay} />
        <Route exact path="/SR-display" component={SrMonitorDisplay} />
        <Route exact path="/messages" component={Messages} />
      </Switch>
    </div>
  );
}

export default App;
