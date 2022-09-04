import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Animation from '../components/Animation';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({err: false, message: ''});
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(20)
  // GET request to get a user
  useEffect(() => {
    // wait for the useRouter hook to asynchronously get the query i
    const fetchUser = async () => {
      
      try{
        setLoading(true);
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=${limit}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "app-id":"6313d37dac3ee806bffc0c82"
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const user = await response.json();
      setUsers(user);
      setTotal(user.total);
      setLoading(false);
    }catch(err)
    {
       setError({err: true, message: err.message});
    }

      
    }

    fetchUser();
  }, [page, limit]);

  const handleClickBack = (e) => {
    
    if(page > 0)
      setPage(() => page - 1);

  }

  
  const handleClickForward = (e) => {
    if(page < total / limit)
        setPage(() => page + 1);

  }
  if(loading) return <p>Loading...</p>
  if(error.err) return<p>Error...</p>
  
  return (
    <Layout pageTitle="Vedras | USER API">
    <h1>Users</h1>
    <div  style={{display: 'flex',
    flexDirection: 'row',
    flexWrap:'wrap'}}>
      {!loading && users.data.map((el,i) => 
           <Animation key={i}>
           <Card {...el} />
           </Animation>
       )}

    </div>
    <div>
    <Pagination aria-label="Page navigation example">
        <PaginationItem>
            <PaginationLink
            first
            href="#"
            onClick={handleClickBack}
            />
        </PaginationItem>
        
        
        {[page].map((el,i) => 
        <PaginationItem key={i}>
        <PaginationLink
           
            href="#"
            active
            >
                {el}
            </PaginationLink>
            
        </PaginationItem>
        )}


        <PaginationItem>
            <PaginationLink
            href="#"
            last
            onClick={handleClickForward}
            />
        </PaginationItem>
</Pagination>


</div>
    </Layout>
  );
}