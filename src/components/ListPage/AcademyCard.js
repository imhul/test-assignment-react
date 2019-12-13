import React from 'react';
import Moment from 'react-moment';
import { Card, Icon } from 'antd';
import Avatar from '../Avatar';

const { Meta } = Card;

const AcademyCard = (data) => {
  const { academy } = data;
  return (
    <Card
      className="AcademyCard"
      actions={[
        <Icon type="setting" key="setting" />,
        <Icon type="edit" key="edit" />,
        <Icon type="ellipsis" key="ellipsis" />,
      ]}
    >
      <Meta 
        avatar={<Avatar />} 
        title={academy.name}
        description={
          <div>
            <div className="truncate"><strong>id: </strong>{academy.id}</div>
            <div><strong>status: </strong>{academy.status}</div>
            <div><strong>type: </strong>{academy.type}</div>
            <div>
              <strong>created at: </strong>
              <Moment date={academy.created} format='DD.MM.YYYY HH:MM:SS' />
            </div>
            <div>
              <strong>updated at: </strong>
              <Moment date={academy.updated} format='DD.MM.YYYY HH:MM:SS' />
            </div>
          </div>
        }
      />
    </Card>
)};

export default AcademyCard;
  