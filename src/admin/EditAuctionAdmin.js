import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link , useParams} from 'react-router-dom';
// import './addAuc.css';

function EditAuctionAdmin() {
  const postId=sessionStorage.getItem('postId');
  const namee=sessionStorage.getItem('name');
  const dess=sessionStorage.getItem('des');
  const pricee=sessionStorage.getItem('price');
  const startt=sessionStorage.getItem('start');
  const endd=sessionStorage.getItem('end');
  const imge=sessionStorage.getItem('img')


        const[isSubmit,setSubmit]=useState([]);
        const [name, setName] = useState(namee);
        const [des, setDes] = useState(dess);
        const [img, setImg] = useState(imge);
        const [price, setPrice] = useState(pricee);
        const [start, setStart] = useState(startt);
        const [end, setEnd] = useState(endd);
        const [isacc, setIsacc] = useState('');
        
      ;
        // const [input, setInputs] = useState([]);
    
    
        const nameHandel = (e)=>{setName(e.target.value)}
        const desHandel = (e)=>{setDes(e.target.value)}
        const imgHandel = (e)=>{setImg(e.target.value)}
        const priceHandel = (e)=>{setPrice(e.target.value)}
        const startHandel = (e)=>{setStart(e.target.value)}
        const endHandel = (e)=>{setEnd(e.target.value)}
        const isaccHandel = (e)=>{setIsacc(e.target.value)}

        // const {postId}=useParams();
        useEffect(()=>{
            // getauction();
            // console.log(postId, name,img, des, price, start, end);
        }, [postId, name,img, des, price, start, end, isacc]);
        // }


        const handleSubmit =(e)=>{
            e.preventDefault();
            axios.post('http://localhost/last_admin9/API/editauction.php?id='+postId+'&name='+name+'&des='+des+'&price='+price+'&start='+start+'&end='+end+'&isacc='+isacc)
            
            .then((data) => {
                console.log("success!");
                setSubmit(!isSubmit)
            })
            .catch((error) => {
                console.error(error);
            });
            // console.log(inputs);
        }
            // console.log(postId, name,img, des, price, start, end);
   
    return(
        <>
 <header className='ad-header'>
  <div className='ad-img-logo'>
  <img src='https://media.discordapp.net/attachments/1002099207177523221/1004446034447056906/Untitled-221.png' alt='' width={'60px'}/><span className='title-epic'>Epic Antiques</span></div>
  <div className='ad-img-logo'>Admin Dashboard</div>
  <div className='ad-name'>admin@mail.com</div>
</header>

<section className='ad-sec ad-sec-edit'>
  <nav className='ad-nav  ad-nav-edit'>
    <br/>
    <ul>
    <li  >
      <Link to="/dashboard" className="ad-aa ">
          Dashboard
          </Link>
       </li>
      <li className='activee'>
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
    <br />
    <div class="alert alert-success" role="alert" style={{ display:isSubmit?"none":"block"}}>
    Edit successfully!
</div>
    {/* <div className='text-center message' style={{ display:isSubmit?"none":"block"}}>
              <p>Edit successfully</p>
    </div> */}

    <div className="containerr">
  <div className="title">
      <h4> Edit Products </h4>
  </div>
<div className="d-flex">
  <form action="" method="" className='formm' onSubmit={handleSubmit}>
      <span className="name">Products Name <span className="required" >*</span></span>
      <input type="text" name="name" required onChange={nameHandel} defaultValue={namee}/>

      <span className="des">Description <span className="required" >*</span></span>
      <input type="text" name="des" required onChange={desHandel} defaultValue={dess}/>

      {/* <span>Select image: <span className="required">*</span></span>
      <input type="file" id="img" name="img" accept="image/*" className='img' required onChange={imgHandel}/> */}

      <span>Price <span className="required">*</span></span>
      <input type="number" name="price" required onChange={priceHandel} defaultValue={pricee}/> 

      <span>Date start <span className="required">*</span></span>
      <input type="date" name="start"  required onChange={startHandel} defaultValue={startt}/> 

      <span>End Date  <span className="required">*</span></span>
      <input type="date" name="end"  required onChange={endHandel} defaultValue={endd}/> 

 <span>Is Accept  <span className="required">*</span></span>
 <input type="number" name="isacc" min={0} max={1} required onChange={isaccHandel} /> 
    <button type="submit">Confirm add </button>
  </form>
  </div>
 </div>

  </article>
</section>

<footer className='ad-foo'>
  <p> All Rights Reserved, 2022 &copy;</p>
</footer>
 </>       
        );
        
      }
export default EditAuctionAdmin;