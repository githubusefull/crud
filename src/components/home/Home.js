import {useState, useEffect} from 'react';
import axios from 'axios';
import {BsTrash} from 'react-icons/bs';
import {BiEdit} from 'react-icons/bi';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Home.css';
function Home() {
    const [show, setShow] = useState(false);
    const [updateRegister, setUpdateRegister] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [registers, setRegisters] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/allregister")
        .then((res) => {
            console.log(res);
            setRegisters(res.data);
        })
    }, [])

    const deletePost =(id) => {
        axios.delete(`http://localhost:8000/delete/${id}`)
        .then((res) => console.log(res))
        .catch((errr) => console.log(errr));
        window.location.reload();
      }
      const updatePost =(register)=> {
    setUpdateRegister(register);
      }
      const handleChange = (e) => {
        const {name, value} = e.target;
        setUpdateRegister((prev) => {
      return {
        ...prev,
        [name]:value,
      }
    })
}
const saveRegisterUpdate = () => {
    axios.put(`http://localhost:8000/update/${updateRegister._id}`, updateRegister)
    .then((res) => console.log(res))
    .catch((errr) => console.log(errr));
    handleClose();

    window.location.reload();
}
  return (
    <div className='container'>
      <div>
        <table id="customers">
          
  <tr>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Password</th>
    <th>Edite</th>

  </tr>
  
  {registers.map(register => (
  <tr>
    <td key={register._id}>
      {register.name}
      </td>
    <td>{register.phone}</td>
    <td>{register.email}</td>
    <td>{register.password}</td>
    <td>
   
   
          
      <span><BsTrash className='icon-edite2' onClick={() => deletePost(register._id)}/></span>
      <span><BiEdit className='icon-edite1' 
      onClick={() => updatePost(register)}
       data-bs-toggle="modal"
       data-bs-target="#exampleModal"/></span>

        </td>

  </tr>

  ))}

    </table>

    </div>
   
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
<div className='modal-body'>
<div className='modal-content'>

   <div className='modal-card'>

    <h4 className='text-start my-2'> Update</h4>

          <Form>

<Row className="mb-5">
<Form.Group as={Col} md="6" >
  <Form.Label className='text'>Name</Form.Label>
  <Form.Control
    value={updateRegister.name ? updateRegister.name:""}
    onChange={handleChange}
    type="text"
    placeholder="Name"
    name="name"
    id='input-form'
    />
</Form.Group>
<Form.Group as={Col} md="6" >
  <Form.Label className='text'>Phone</Form.Label>
  <Form.Control
   value={updateRegister.phone ? updateRegister.phone:""}
   onChange={handleChange}
    type="number"
    placeholder="Phone"
    name="phone"
    id='input-form'
  />
</Form.Group>
<Form.Group as={Col} md="12"  className='my-3'>
  <Form.Label className='text'>Email</Form.Label>
  <Form.Control
   value={updateRegister.email ? updateRegister.email:""}
   onChange={handleChange}
    type="email"
    placeholder="Email"
    name="email"
    id='input-form'
  />
</Form.Group>


 

<Form.Group as={Col} md="12" >
  <Form.Label className='text'>Password</Form.Label>
  <Form.Control
   value={updateRegister.password ? updateRegister.password:""}
   onChange={handleChange}
    type="password"
    placeholder="Password"
    name="password"
    id='input-form'
  />
</Form.Group>

</Row>  
<Button variant="dark" onClick={saveRegisterUpdate}  className='update text-center' id="update">
Update
</Button>
<Button variant="dark"   data-bs-dismiss="modal" aria-label="Close" className='text-center' id="close" >
Close
</Button>
</Form>
</div>



          </div>
          
        </div>
     </div>
    </div>
    </div>

 
 )
}
export default Home