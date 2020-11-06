import React from 'react'

import AuxW from '../../hoc/Auxw';

const layout = (props) => {
    return (
    <AuxW>
        <div>Toolbar, Sidedraw, Backdrop</div>
        <main>
            {props.children}
        </main>
    </AuxW>
    );
}

export default layout;
