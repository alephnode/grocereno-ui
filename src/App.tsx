import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import RecipeList from './components/RecipeList';
import {Layout} from 'antd';

const {Header, Content, Footer} = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">grocereno</div>
      </Header>
      <Content className="content-section" style={{padding: '0 50px'}}>
        <div className="site-layout-content">
          <h1>Recipes</h1>
          <RecipeList />
        </div>
      </Content>
      <Footer style={{textAlign: 'center'}}>&copy; 2020 Grocereno, Inc.</Footer>
    </Layout>
  );
}

export default App;
