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
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            colorName: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, increase: !old.increase};
            const newArr = [...data.slice(0, index),newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
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
    
                <Employ
                ersList 
                data={this.state.data} 
                onDelete={this.deleteItem} 
                onToggleIncrease={this.onToggleIncrease}
                onToggleCangeColor={this.onToggleCangeColor} />
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;