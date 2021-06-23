import React, { ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';
import { StyledValueCard } from './style';

interface ValueCardProps {
  title: string;
  icon: ReactNode;
  value: string;
  loading: boolean;
}

const ValueCard: React.FC<ValueCardProps> = ({
  title,
  icon,
  value,
  loading,
}) => {
  return (
    <StyledValueCard>
      <div className="container">
        <h1>{title}</h1>
        <span className="value">
          {loading ? <Skeleton height={25} /> : value}
        </span>
      </div>
      <div className="icon">{icon}</div>
    </StyledValueCard>
  );
};

export default ValueCard;
