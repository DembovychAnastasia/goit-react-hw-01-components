import PropTypes from 'prop-types';
import { Transaction,Thead, TheadTr, Th, Td, ExtendedTr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items}) => {
    return (
 <Transaction>
  <Thead>
    <TheadTr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </TheadTr>
  </Thead>

  <tbody>
  {items.map((item, idx) => (
    <ExtendedTr  key={item.id} index={idx}>
      <Td>{item.type}</Td>
      <Td>{item.amount}</Td>
      <Td>{item.currency}</Td>
    </ExtendedTr> ))}

  </tbody>
</Transaction>
 );
  };


  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,

      })
    ).isRequired,
  };
