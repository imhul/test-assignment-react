import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Layout } from 'antd';
import '../../assets/scss/index.scss';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import ListPage from '../ListPage';
import AddPage from '../AddPage';

const { Content, Header, Footer, } = Layout;

const Output = ({ history }) => (
  <ConnectedRouter history={history}>
    <Layout className="Output">
        <Header>
            <MainHeader />
        </Header>
        <Content>
            <Switch>
                <Route exact path='/' component={ListPage} />
                <Route exact path='/add' component={AddPage} />
                <Redirect to='/' />
            </Switch>
        </Content>
        <Footer>
            <MainFooter />
        </Footer>
    </Layout>
  </ConnectedRouter>
);

export default Output;
