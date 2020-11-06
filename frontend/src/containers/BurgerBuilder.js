import React, { Component } from 'react';

import Auxw from '../hoc/Auxw';
import Burger from '../components/Burger/Burger';

class BurgerBuilder extends Component {
    render = () => {
        return (
            <Auxw>
                <Burger />
                <div>Controls</div>
            </Auxw>
        );
    }
}

export default BurgerBuilder;
