import "./App.css"
import "./assets/css/styles.css"
import { Provider } from "react-redux"
import store from "./App/Redux/store"
import Home from "./App/Screens/Home/Home"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Detail from "./App/Screens/Detail/Detail"
import SignUp from "./App/Screens/SignUp/SignUp"
import Login from "./App/Screens/Login/Login"
import Profile from "./App/Screens/Profile/Profile"
import MyInvestments from "./App/Screens/MyInvestments/MyInvestments"
import Create from "./App/Screens/Create/Create"
const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#01172d",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#0fca98",
    },
  },
})

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/myinvestments" component={MyInvestments} />
            <Route exact path="/create" component={Create} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
