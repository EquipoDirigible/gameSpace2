import React from 'react';
import './newProductButtom.css'

function NewProductButtom(){
return (<button className='newProductButtom'>
        <img src='./src/assets/icons/addProduct.png' alt="addIcon" className='addIcon'/>
            <h1>New Product</h1>
        </button>);
};

export default NewProductButtom;