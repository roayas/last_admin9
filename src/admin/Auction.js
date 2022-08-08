import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
// import './auction.css';
import './dash.css';
import {Link } from 'react-router-dom';



function Auction(props) {
  const [aution, setAution] = useState([]);

  const postId=sessionStorage.getItem('postId');


  useEffect(()=>{
    getauction();
}, [aution]);

    function getauction(){
    axios.get(`http://localhost/last_admin9/API/adminauction.php`)
      // console.log(aa)
      .then((res) => {
        //  console.log(res)
        const info = res.data;
        setAution(info);
      });
  }

  const deleteAuction=(postId)=>{
    axios.delete(`http://localhost/last_admin9/API/deleteauction.php?id=`+postId)
    .then(function(res){
      console.log(res.data);
      const info = res.data;
        getauction(info);
    })
  }

    return(
        <>
  <header className='ad-header'>
  <div className='ad-img-logo'>
  <img src='https://media.discordapp.net/attachments/1002099207177523221/1004446034447056906/Untitled-221.png' alt='' width={'60px'}/><span className='title-epic'>Epic Antiques</span></div>
  <div className='ad-img-logo'>Admin Dashboard</div>
  <div className='ad-name'>admin@mail.com</div>
</header>

<section className='ad-sec'>
  <nav className='ad-nav'>
    <br/>
    <ul>
    <li  >
      <Link to="/dashboard" className="ad-aa ">
          Dashboard
          </Link>
       </li>
      <li className='activee'>
      <Link to="#" className="ad-aa">
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
    <h1>Products</h1>
    <br />
    <main className="content">
  <div className="mb-5">
<Link to="/AddAuctionAdmin" className="bttn btn-add"><h2><span>Add</span></h2> </Link>
</div>

<table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">image</th>
              <th scope="col">Description</th>
              <th scope="col">Minimam Price</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Is Accept</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            
            {aution?.map((info) =>
            <>
            <tr className='' key={info}>
            
              <td>{info.id}</td>
              <td >{info.name}</td>
              <td ><img src={'img/'+info.img} style={{width:'100px', height:'100px'}}/></td>
              <td >{info.description}</td>
              <td >{info.min_price}</td>
              <td >{info.start_date}</td>
              <td >{info.end_date}</td>
              <td >{info.is_acc}</td>
              <td>
              <button className="bttn" style={{background:'#b88b68ec'}} 
              onClick={(e)=>{e.preventDefault();
                sessionStorage.setItem('postId',info.id);
                sessionStorage.setItem('name',info.name); 
                sessionStorage.setItem('des',info.description); 
                sessionStorage.setItem('price',info.min_price); 
                sessionStorage.setItem('start',info.start_date); 
                sessionStorage.setItem('end',info.end_date); 
                sessionStorage.setItem('img',info.img);             
                window.location=`/EditAuctionAdmin/${info.id}/edit`}}>Edit</button>

               <button className="bttn btn-delete" style={{background:'#b88b68ec'}} onClick={()=>deleteAuction(info.id)} >Delete</button> 
               </td>
            </tr>
            </>
       )}
            
          </tbody>
        </table>
      </main>

  </article>
 </section>



</>


        );
    }


export default Auction;