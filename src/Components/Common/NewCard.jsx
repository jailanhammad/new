import React from 'react';
import "./Card.css";
import Png from '../../Assets/p.jpg';

const NewCard = () => {
    return ( 

<>

<div className='coloumn'> 

<img src={Png}  className='png' />


<h1 className='buy-text'>
Buying and making a home
</h1>


<p className='text-02'>
Buying a home can be an emotional process, but it&rsquo;s important to approach it logically
</p>

<p>Read more</p>


</div>


</>

     );
}
 
export default NewCard;