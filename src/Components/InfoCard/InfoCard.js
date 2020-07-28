import React from 'react';
import './InfoCard.css';

class InfoCard extends React.Component {

    render() {
        if (this.props.item === null) {
            return (
                <div className='empty'></div>
            );
        } else {
            return (
                <div className='empty'>
                    <div className='item-details cardDesign'>
                        <div className='descHeader'>
                            <h2>{this.props.item.name}</h2>
                            <p>{this.props.item.price}</p>
                        </div>
                        <div className='descHeader'>
                            <p id='item-type'>{this.props.item.type}</p>
                            <p>Requires Attunment</p>
                        </div>
                        <p className='description'>Description</p>
                        <p>{this.props.item.description}</p>
                        <p className='description'>Effect</p>
                        <p>{this.props.item.effect}</p>
                    </div>
                </div>

            );
        }
    }

}

export default InfoCard;