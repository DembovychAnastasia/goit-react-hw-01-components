import { Profile } from "./Profile/Profile";
import user from "../components/Profile/user.json"

import data from '../components/Statistics/data.json'
import {StatisticsList} from './Statistics/StatistictsList'

import { FriendList } from "./FriendList/FriendList";
import friends from "./FriendList/friends.json"
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Container";

import { TransactionHistory } from "./Transactions/TransactionHistory";
import transactions from "./Transactions/transactions.json"


export const App = () => {
  return (
    <Container>  
      <Profile items={user}/>   
      <StatisticsList title="Upload stats" items={data} />
      <FriendList items={friends}/>
      <GlobalStyle/>
      <TransactionHistory items={transactions} />  
    </Container>  
  );
};