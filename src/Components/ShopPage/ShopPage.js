import React from 'react';
import Items from '../Items/Items';
import './ShopPage.css'

class ShopPage extends React.Component {

    render() {
        return (
        <div>
            <header className='title'>
                <h1>Store Name</h1>
                <p>Welcome to the item store! We've got some powerful items for you.</p>
            </header>
            <main>
                <Items />
            </main>
        </div>
        
        
        );
    }
}

export default ShopPage;