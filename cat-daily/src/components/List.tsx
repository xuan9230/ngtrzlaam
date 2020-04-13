import React from "react";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// TODO: use generic type definition

type GenericObject = {
  id: string;
  [key: string]: any;
};

type VerticalListProps = {
  title: string;
  records: GenericObject[];
  onClick: Function;
  primaryKey: string;
};

export default function VerticalList({
  title,
  records,
  onClick,
  primaryKey
}: VerticalListProps) {
  return (
    <Container>
      <Title variant="h4">{title}</Title>
      <List>
        {records.map(record => (
          <ListItem key={record.id} button onClick={() => onClick(record)}>
            <StyledText primary={record[primaryKey]} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Typography)`
  margin-top: 16px;
`;

const StyledText = styled(ListItemText)`
  text-align: center;
`;
