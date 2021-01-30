import React from 'react';
import Invoice from './invoice';


export class ComponentToPrint extends React.PureComponent {
    
    render() {
        //call Invoice component to be printed
        return <Invoice/>;
    }
}