import { useEffect,useState } from "react";

function AdminDashboard(){

 const [bookings,setBookings]=useState([]);

 useEffect(()=>{

   fetch("http://localhost:5000/bookings")
   .then(res=>res.json())
   .then(data=>setBookings(data));

 },[]);

 return(

  <div className="p-10">

   <h2 className="text-3xl font-bold mb-6">
     Admin Dashboard
   </h2>

   <table className="w-full border">

     <thead>
       <tr className="bg-gray-200">
         <th>Name</th>
         <th>Phone</th>
         <th>Room</th>
         <th>Date</th>
       </tr>
     </thead>

     <tbody>

       {bookings.map(b=>(
         <tr key={b.id}>
           <td>{b.name}</td>
           <td>{b.phone}</td>
           <td>{b.room_type}</td>
           <td>{b.move_in_date}</td>
         </tr>
       ))}

     </tbody>

   </table>

  </div>

 );

}

export default AdminDashboard;