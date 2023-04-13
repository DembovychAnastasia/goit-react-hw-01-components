import { Profile } from "./Profile/Profile";
import user from "../components/Profile/user.json"

import data from '../components/Statistics/data.json'
import {StatisticsList} from './Statistics/StatistictsList'

import { FriendList } from "./FriendList/FriendList";
import friends from "./FriendList/friends.json"
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Container";


export const App = () => {
  return (
    <Container
      style={{
        // height: '200vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // fontSize: 20,
        // color: '#010101'
      }}
      
    >  
      <Profile items={user}/>   
      <StatisticsList title="Upload stats" items={data} />
      <FriendList items={friends}/>
      <GlobalStyle/>
      
     
       
    </Container>  
  );
};