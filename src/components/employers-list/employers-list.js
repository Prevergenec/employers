import EmployersListItem from "../employers-list-item/employers-list-item";

import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleIncrease, onToggleCangeColor}) => {

    const elements = data.map(item => {

        const {id, ...itemProps} = item;

        return (
            //<EmployersListItem name={item.name} salary={item.salary + ' $'} />
            <EmployersListItem 
            key={id} 
            data = {data}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleIncrease={() => onToggleIncrease(id)}
            onToggleCangeColor={() => onToggleCangeColor(id)} />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;