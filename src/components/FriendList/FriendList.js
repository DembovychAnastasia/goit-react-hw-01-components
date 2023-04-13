
import PropTypes from 'prop-types';
import { Friends, FriendsItem, Status, Avatar} from './FriedsList.styled';


export const FriendList = ({ items }) => {
    return (
        <Friends>
        {items.map(item => (
          <FriendsItem key={item.id}>
           
            <Status status={item.isOnline}></Status>
            < Avatar className="avatar" src={item.avatar} alt={item.name} width="48" />
             <p className="name"> {item.name}</p>
          </FriendsItem>
        ))}
      </Friends>
    );
  };
  FriendList.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired, 
        isOnline: PropTypes.bool.isRequired, 
      })
    ).isRequired,
  };