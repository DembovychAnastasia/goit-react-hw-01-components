// import {Statistics} from "./Statistics"
import PropTypes from 'prop-types';
import { Statistics, Title, StatList, 
  StatItem, Label, Percentage} from './Statistics.styled';

export const StatisticsList = ({ items, title }) => {
    return (
        <Statistics>
           {title && <Title>{title}</Title>}
            {/* <h2 className="title"> Upload stats</h2> */}
      <StatList>
        {items.map(item => (
          <StatItem key={item.id}>
          <Label>{item.label}</Label>
         <Percentage>{item.percentage}</Percentage>
          </StatItem>
        ))}
      </StatList>
      </Statistics>
    );
  };

  StatisticsList.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };



