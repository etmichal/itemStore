import React from 'react';
import './InfoCard.css';


//A card that displays detailed item info
class InfoCard extends React.Component {

    //closes info panel on mobile version
    closeInfo(e) {
        const overlay = document.querySelector('.empty');
        const closeButton = document.querySelector('#close-button').firstChild;
        if (e.target === overlay || e.target === closeButton) {
            overlay.style.display = "none";
        }
    }

    render() {
        if (this.props.item === null) {
            return (
                <div className='empty'></div>
            );
            //If mobile, include X button to close window
            
        } else if (window.innerWidth <= 935) {
            return (
                <div className='empty' onClick={(e) => this.closeInfo(e)}>
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
                        <div id="close-button">
                            <span>&Chi;</span>
                        </div>
                    </div>
                </div>
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