
import { useState, useEffect } from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import Axios from 'axios';
function App(props) {
  const [email_list,setEmail_list]=useState([]);

  useEffect(()=>{
   
    Axios.get('https://appointment0backend.herokuapp.com/email_s').then((res)=>{
      setEmail_list(res.data);
      console.log("it is useeffect rejected");
      
    }
    )
  },[]);

 
  console.log("below is email list");
 console.log(email_list)
  // const remove_elligibility = (id) =>{
  //   Axios.put("http://localhost:3001/email_sending",{
  //     id:id,
  //     email_send:"Sent",
  //   });
  // }

  const remove_elligibility = (id) =>{
    Axios.put("http://localhost:3001/email_sending",{
      id:id,
      email_send:"Sent",
    });
  }

    const send_gmail=(e)=>{
        e.preventDefault();
        

        emailjs.sendForm('service_re3j227','template_k1q319v',e.target,'pi6zBECU2k6EEbW_I').then(res=>{console.log(res);}).catch(err=>{console.log(err);});
      

    
      }

    return(
      <>
       <nav class="navbar navbar-expand-lg navbar-light bg-primary">

  
<div className="container-fluid">
  <a className="navbar-brand" href="#">PCCOE</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>

      <div>
        {email_list.map((val,key)=>{
          return(

        
        <div className="email_form">
        <form onSubmit={send_gmail}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
          <input type="text" name="name" value={val.userName} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name="email" value={val.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Message(Reason for not approving)</label>
          <input type="text" name="message" className="form-control" id="exampleInputPassword1" />
        </div>
        
        <input type="submit" value="Send Email" onClick={remove_elligibility(val._id)} className="btn btn-primary"/>
        {/* <input type="submit" value="Cancel" onClick={remove_elligibility(res.data[0]._id)} className="btn btn-primary"/> */}
      </form>
      </div>
        );
      })}
      </div>
      <div className="footer_custom">
        <h6 id="footer_text">This website is created for 
        official purpose only
        </h6>
      </div>

      </>
      
    );
  
}
export default App;