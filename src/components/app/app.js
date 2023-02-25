import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, colorName: false, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, colorName: true, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, colorName: false, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            // const before = data.splice(0, index);
            // const after = data.splice(index + 1);

            // const newArr = [...before, ...after];

            // return {
            //     data: newArr
            // }

            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    onToggleIncrease = (id) => {
        console.log(`Increase this ${id}`);
    }

    onToggleCangeColor = (id) => {
        console.log(`CangeColor this ${id}`);
    }

    render() {

        return (
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployersList 
                data={this.state.data} 
                onDelete={this.deleteItem} 
                onToggleIncrease={this.onToggleIncrease}
                onToggleCangeColor={this.onToggleCangeColor} />
                <EmployersAddForm />
            </div>
        );
    }
}

export default App;