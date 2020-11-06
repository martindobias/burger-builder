import React from 'react';

import classes from './Layout.module.css';

import AuxW from '../../hoc/Auxw';

const layout = (props) => (
    <AuxW>
        <div>Toolbar, Sidedraw, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </AuxW>
);


export default layout;
