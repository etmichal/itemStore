import React from 'react';
import './PopulateCards.css';

class PopulateCards extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        this.props.updateDetails(item);
    }

    listItems(itemList) {
        let itemRendering = [];
        itemList.forEach(item => {
            
            if(item.img === 'default') {
                item.img = './consumable.png';
            }
            
            itemRendering.push( 
                <div key={item.id} className='itemCard cardDesign' onClick={() => this.handleClick(item)}>
                    <div className='itemIcon'>
                        <img className='itemIconImg' src={require(`${item.img}`)} alt={item.name} />
                    </div>
                    <div className='itemText'>
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                        <p>{item.type}</p>
                        <p>{item.summary}</p>
                    </div>
                </div>
            );
        });
        return itemRendering;
    }

    render() {
        return this.listItems(this.props.itemList);
    };
}

export default PopulateCards;