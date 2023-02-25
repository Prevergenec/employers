import { Component } from 'react';

import './employers-list-item.css';

class EmployersListItem extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            increase: false,
            colorName: false
        }
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    onCangeColor = () => {
        this.setState(({colorName}) => ({
            colorName: !colorName
        }))
    }

    render() {
        const {name, salary, onDelete, onToggleIncrease, onToggleCangeColor} = this.props;
        const {increase, colorName} = this.state;

            let classNames = 'list-group-item d-flex justify-content-between';
        
            if (increase) {
                classNames += ' increase';
            }

            if (colorName) {
                classNames += ' like';
            }
        
            return (
                <li className={classNames}>
                    <span className="list-group-item-label" onClick={this.onCangeColor}>{name}</span>
                    <input type="text" className="list-group-item-input" defaultValue={salary + ' $'} />
                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={this.onIncrease} >

                            <i className="fas fa-cookie"></i>
                        </button>
        
                        <button type="button"
                                className="btn-trash btn-sm "
                                onClick={onDelete} >
                            <i className="fas fa-trash"></i>
                        </button>
                        <i className="fas fa-star"></i>
                    </div>
                </li>
            )
    }
}


export default EmployersListItem;