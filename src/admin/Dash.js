import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './dash.css';
import {Link } from 'react-router-dom';

function Dashboard() {

  const [aution, setAution] = useState('');
 
    useEffect(() => {
      axios.get(`http://localhost/last_admin9/API/count.php`)
      .then((res) => {
        const info = res.data;
        setAution(info);
})    }, []);
    return(
        <>
  <header className='ad-header'>
  <div className='ad-img-logo'>
    <img src='https://media.discordapp.net/attachments/1002099207177523221/1004446034447056906/Untitled-221.png' alt='' width={'60px'}/>
    <span className='title-epic'>Epic Antiques</span></div>
  <div className='ad-img-logo'>Admin Dashboard</div>
  <div className=''>admin@mail.com</div>
</header>

<section className='ad-sec'>
  <nav className='ad-nav'>
    <br/>
    <ul>
    <li className='activee' >
      <Link to="" className="ad-aa ">
          Dashboard
          </Link>
       </li>
      <li>
      <Link to="/auction" className="ad-aa">
          Products
          </Link>
       </li>
      <li>
      <Link to="/userA" className="ad-aa">
            Users
          </Link>
        </li>
      {/* <li>
      <Link to="/commentAdmin" className="ad-aa">
            Comments
          </Link>
        </li> */}
      <li>
      <Link to="/" className="ad-aa">
            Logout
          </Link>
        </li>
    </ul>
  </nav>
  <article className='ad-artic'>
    {/* <h1></h1> */}
    <br /><br /><br /><br />
    <br /><br /><br />
    <div className='boddy'>
{/* <div className='prodd'><img className='icons' src='/img/clock.png'/></div> */}
<div className="cardd auc">
  <br/>
  <div className="contentt dd">Total <br/> Products
  <h3 className="h3-count">{aution[0]}</h3>
  </div>
</div>

{/* <div className='usersss'><img className='icons' src='/img/user.png'/></div> */}
<div className="cardd user ">
  <br/>
  <div className="contentt dd"> Total <br/> Users
  <h3 className="h3-count">{aution[1]}</h3>
</div></div>

{/* <div className="cardd comment"> */}
{/* <div className='comm'></div> */}
  {/* <div className="contentt dd">Total<br/> Comments
  <h3 className="h3-count">{aution[2]}</h3>
</div> */}
{/* </div> */}
</div>

  </article>
</section>

<footer className='ad-foo'>
  <p> All Rights Reserved, 2022 &copy;</p>
</footer>

</>


        );
    }


export default Dashboard;