import * as React from 'react';
import {Card, CardBody, CardTitle, Button,  Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
// import User from '../pages/user';

const formatDate = (date) => 
{
    // let d = date.parse(date);
    let newDate = new Date(date);

    return newDate.toLocaleDateString();
}

export default function MediaCard({id, title, firstName, lastName, picture}) {

    const [modal, setModal] = React.useState(false);
    const [newid, setId] = React.useState(id);
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    // GET request to get a user
    React.useEffect(() => {
      // wait for the useRouter hook to asynchronously get the query i
      const fetchUser = async () => {
        
        try{
          setLoading(true);
          const response = await fetch(`https://dummyapi.io/data/v1/user/${newid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "app-id":"6313d37dac3ee806bffc0c82"
          },
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const user1 = await response.json();

        setUser({ ...user1,dateOfBirth: formatDate(user1.dateOfBirth),registerDate: formatDate(user1.registerDate)});
        setLoading(false);
      }
      catch(err)
      {
          console.log(err.message);
      }
  
        
      }
  
      fetchUser();

      
    }, [newid]);
  


    const toggle = () =>{
         setId(id);
         setModal(!modal);
    }


if(loading) return <p>Loading...</p>
return (
    <Card
  style={{
    width: '18rem',
     
  }}
>
  <img
    alt="Sample"
    src={picture}
    layout="fill"
  />
  <CardBody>
    <CardTitle tag="h5">
      {title} {firstName} {lastName}
    </CardTitle>
    <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>{user.title + " " + user.firstName + " " + user.lastName}</ModalHeader>
        <ModalBody style={{display:'flex', flexDirection:'column'}}>
            <img src={user.picture} alt={'user'} />     
            <span>{user.dateOfBirth}</span>
            <span>{user.gender}</span>
            <span>{user.phone}</span>
            <span>{user.registerDate}</span>

        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
  </CardBody>
</Card>
  );
}
