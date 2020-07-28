import React from 'react';
import PopulateCards from '../PopluateCards/PopluateCards';
import { consumableList, equipmentList } from '../../data.js';
import InfoCard from '../InfoCard/InfoCard';
import './Items.css';

class Items extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: null,
        }

        this.setItem = this.setItem.bind(this);
    }

    setItem(item) {
        this.setState({item: item});
    }

    render() {
        return (
            <div className='item-selections'>
                <div className='item-list'>
                    <div className='list-header'>
                        <div className='square'></div>
                        <p>Consumable List</p>
                        <div className='square'></div>
                    </div>
                    <PopulateCards itemList={ consumableList } updateDetails={this.setItem}/>
                </div>
                <div className='item-list'>
                <div className='list-header'>
                        <div className='square'></div>
                        <p>Equipment List</p>
                        <div className='square'></div>
                    </div>
                    <PopulateCards itemList={ equipmentList } updateDetails={this.setItem}/>
                </div>
                <InfoCard item={this.state.item}/>
                
            </div>
            
        )
    }
}

export default Items;