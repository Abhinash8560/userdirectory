
import React,{useState,useEffect,useRef} from 'react'
import './front.css';
import Users from "../page/Users"

const Front = () => {
  return(
    <Users/>
  )
}

function EditData({data,setdata}){
  const idRef=useRef()
const emailRef=useRef()
const first_nameRef=useRef()
const last_nameRef=useRef()
const imageRef=useRef()
function handleid(e){
 const id=e.target.value;
 const updateddata=data.map((d) => d.id == data.id ?{...d,id:id}:d)
 setdata(updateddata)
}
function handleemail(e){
  const email=e.target.value;
  const updateddata=data.map((d) => d.id == data.id ?{...d,email:email}:d)
  setdata(updateddata)
 }
 function handlefirst_name(e){
  const first_name=e.target.value;
  const updateddata=data.map((d) => d.id == data.id ?{...d,first_name:first_name}:d)
  setdata(updateddata)
 }function handlelast_name(e){
  const last_name=e.target.value;
  const updateddata=data.map((d) => d.id == data.id ?{...d,last_name:last_name}:d)
  setdata(updateddata)
 }
 function handleimage(e){
  const image=e.target.value;
  const updateddata=data.map((d) => d.id == data.id ?{...d,image:image}:d)
  setdata(updateddata)
 }
  return (
    <tr>
      <td><input type="text" value={data.id} onChange={handleid} ref={idRef} name="id" placeholder="enter id" /> </td>     
      <td><input type="text" value={data.email} onChange={handleemail} ref={emailRef} name="email" placeholder="enter email" /></td>       
      <td><input type="text" value={data.first_name} onChange={handlefirst_name} ref={first_nameRef} name="first_name" placeholder="enter first_name" /></td>        
      <td><input type="text" value={data.last_name} onChange={handlelast_name} ref={last_nameRef}name="last_name" placeholder="enter last_name" /> </td>    
      <td><input type="file" value={data.image} onChange={handleimage} ref={imageRef} name="image" placeholder="choose image" /> </td>    
      <td> <button type="submit">Update</button></td>
    </tr>
  )
}
function AddFielddata({setdata}){
const idRef=useRef()
const emailRef=useRef()
const first_nameRef=useRef()
const last_nameRef=useRef()
const imageRef=useRef()
function handleValues(e){
  e.preventDefault();
  const id=e.target.elements.id.value;
  const email=e.target.elements.email.value;
  const first_name=e.target.elements.first_name.value;
  const last_name=e.target.elements.last_name.value;
  const image=e.target.elements.image.value;

  const newFormObj= {
   id:id,
   email:email,
   first_name:first_name,
   last_name:last_name,
   image:image
  }
  setdata(prevData => prevData.concat(newFormObj))
  idRef.current.value=""
  emailRef.current.value=""
  first_nameRef.current.value=""
  last_nameRef.current.value=""
  imageRef.current.value=""

}
  return (
    <>
    <form className='addForm' onSubmit={handleValues} >
<input type="text" ref={idRef} name="id" placeholder="enter id" />      
<input type="text" ref={emailRef} name="email" placeholder="enter email" />      
<input type="text" ref={first_nameRef} name="first_name" placeholder="enter first_name" />      
<input type="text" ref={last_nameRef}name="last_name" placeholder="enter last_name" />   
<input type="file" ref={imageRef} name="image" placeholder="choose image" />   
<button style={{backgroundColor:'lightseagreen',boxShadow:'revert'}}>Add</button>
</form>
    </>
  );
}
export default Front;