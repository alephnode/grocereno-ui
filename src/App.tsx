import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import RecipeList from './components/RecipeList';
import {Layout, Button} from 'antd';
import logo from "./logo.svg";
const {Header, Content, Footer} = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
      <img src={logo} className="App-logo" alt="logo" />
        <div className="logo">grocereno</div>
      </Header>
      <Content className="content-section" style={{padding: '0 50px'}}>
        <div className="site-layout-content">
          <h1>Recipes</h1>
          <RecipeList />
          <Button type="primary">generate grocery list</Button>
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>&copy; 2020 grocereno, inc.</Footer>
    </Layout>
  );
}

export default App;
