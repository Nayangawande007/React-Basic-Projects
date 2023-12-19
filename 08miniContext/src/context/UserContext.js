import React from 'react'

const UserContext = React.createContext()

export default UserContext;


//ye niche wala code provider ka hai
/* <UserContext>
<Login/>
<Card>
    <Date/>
</Card>

</UserContext> */

//ye sentax ham iss liye lete hai kyu ki <Login/> <Card> <Date/></Card> ye sare components 
//<UserContex/> ke through sari states ka access le sake.
