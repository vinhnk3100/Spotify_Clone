import React from 'react';
import { Card } from 'antd';

export default function CardList({ album }) {
  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  return (
    <Card title='Card Title'>
      <Card.Grid style={gridStyle}>{album.label}</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
    </Card>
  );
}
