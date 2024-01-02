import { useEffect, useState } from 'react';



export function Editform({ setediting, updateUser, currentuserdata }) {

  const [user, setuser] = useState(currentuserdata);




  useEffect(() =>{

    setuser(currentuserdata)

  },[currentuserdata] )




  const handleChage = (event) => {


    const { name, value } = event.target;

    setuser({ ...user, [name]: value });




  };




  return (

    <div className='editbox' >

      <div>
        <h1 className='text-center text-white ' >EDITUSER</h1>
      </div>

      <form onSubmit={event => {
        event.preventDefault();
        updateUser(user.id,user);



      }}>

        <div className="mb-3">
        <label className='form-label' htmlFor="Name">Name</label><br />
        <input className='form-control' value={user.name} name='name' onChange={handleChage} type="text" id='Name' /><br />

        </div>


        <div className="mb-3">
        <label className='form-lable' htmlFor="email">Email</label><br />
        <input className='form-control' value={user.email} name='email' onChange={handleChage} type="email" id='email' /><br />


        </div>


        <div className="mb-3">
        <label className='form-label' htmlFor="location">Location</label><br />
        <input className='form-control' value={user.location} name='location' onChange={handleChage} type="text" id='Name' /><br />


        </div>
        <div className="mb-2 d-grid">
        <button className='btn  btn-primary' type='submit'>EDITUSER</button>

        </div>
<div className="d-grid">
        <button className='btn btn-success' onClick={(() => setediting(true))} type='submit'>CANCEL</button>

</div>

      </form>


    </div>


  );




}