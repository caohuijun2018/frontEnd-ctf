import { Route, Switch } from '@modern-js/runtime/router';
import { Helmet } from '@modern-js/runtime/head';
import Login from './pages/login';
import Home from './pages/home';

function App() {
  return (
    <div className="container lg mx-auto">
      <Switch>
        <Route path="/" exact={true}>
          <Helmet>
            <title>首页</title>
          </Helmet>
          <Home />
        </Route>
        <Route path="/login" exact={true}>
          <Helmet>
            <title>用户登陆</title>
          </Helmet>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
