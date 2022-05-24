import { Route, Switch } from '@modern-js/runtime/router';
import { Helmet } from '@modern-js/runtime/head';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import TopicList from './pages/topicList';
import UserList from './pages/userList';
import Center from './pages/center';
import Index from './pages/bulletins';
import Admin from './pages/admin';
import Question from './pages/addQuestion';

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
        <Route path="/register" exact={true}>
          <Helmet>
            <title>用户注册</title>
          </Helmet>
          <Register />
        </Route>
        <Route path="/topicList" exact={true}>
          <Helmet>
            <title>题目排行</title>
          </Helmet>
          <TopicList />
        </Route>
        <Route path="/userList" exact={true}>
          <Helmet>
            <title>用户榜单</title>
          </Helmet>
          <UserList />
        </Route>
        <Route path="/center" exact={true}>
          <Helmet>
            <title>个人中心</title>
          </Helmet>
          <Center />
        </Route>
        <Route path="/bulletins" exact={true}>
          <Helmet>
            <title>公告栏</title>
          </Helmet>
          <Index />
        </Route>
        <Route path="/admin" exact={true}>
          <Helmet>
            <title>数据</title>
          </Helmet>
          <Admin />
        </Route>
        <Route path="/addQuestion" exact={true}>
          <Helmet>
            <title>题目</title>
          </Helmet>
          <Question />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
