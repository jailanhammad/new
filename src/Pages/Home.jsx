import React from 'react';
import './Home.css';
import hero from '../Assets/hero.png';
import Header from '../Components/Layout/Header';
import Card from '../Components/Common/Card';
import NewCard from '../Components/Common/NewCard';

 const Home = () => {
    return ( 
        <>
        
        <div>

<Header />


        </div>
        

        <div className='hero-div'>

<img src={hero} className='hero'/>

<div className='hero-div-2'>

<h1 className='cib-text'>CIB</h1>
<p className='slogan'>
Delivering value to our clients, our <br /> community and our shareholders
</p>

<button className='btn'>
    Discover more
</button>

</div>



        </div>

       





<div className='row'>

<h1 className='row-text'>Apply Online</h1>
<h1 className='row-text'>News</h1>
<h1 className='row-text'>Blog Articles</h1>
<h1 className='row-text'>CIB International</h1>
<h1 className='row-text'>Sustainable Finance</h1>
<h1 className='row-text'>Awards</h1>


</div>


<div className='apply-div'>

    <h1 className='apply-text'>APPLY ONLINE</h1>
    <p className='slogan-2'>
    Apply online now for cards and loans with ease!
    </p>

<div className='row-1'>




<Card />
<Card />
<Card />


</div>

</div>


<div className='learning'>


    <p className='slogan-2'>
    Learning Center
    </p>

    <h1 className='apply-text-2'>Learn more about banking and your finances</h1>


<div className='roww'>

<NewCard />
<NewCard />
<NewCard />

</div>



</div>







        
        </>




      );
 }
  
 export default Home;