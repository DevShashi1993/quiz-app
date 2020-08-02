import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

const Layout = (props) => (
    <>
        <NavMenu/>
        <Container>
            {props.children}
        </Container>
    </>
);

export default Layout;
