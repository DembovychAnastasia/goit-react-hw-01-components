import { Profile } from "./Profile/Profile";
import user from "../components/Profile/user.json"


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >  
      <Profile items={user}/>   
      
     
       
    </div>  
  );
};