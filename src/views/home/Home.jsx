import React from 'react'
import SideBar from '../../components/sideBar/SideBar';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';
import Note from '../../components/note/Note';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (    
    <div className='front h-100 home d-flex justify-content-center'>
      
         <Card  className='card' style={{borderRadius:'40px'}}>
    
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
  )
}

export default Home