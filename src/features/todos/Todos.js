import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos, del } from './todosSlice';
import { List, Icon, IconButton, FlexboxGrid } from 'rsuite';
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem';

export default function Todos() {

  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  return (
    <List bordered>
      {todos.map(({ txt, id }) => (
        <FlexboxGrid key={`${txt}-${id}`}>
          <FlexboxGridItem colspan={12}>
            <List.Item bordered>
              {txt}
            </List.Item>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={10}>

          </FlexboxGridItem>
          <FlexboxGridItem colspan={2}>
            <IconButton
              color='red'
              circle
              icon={<Icon icon='minus' />}
              onClick={() => dispatch(del(id))}
            >
            </IconButton>
          </FlexboxGridItem>
        </FlexboxGrid>
      ))}
    </List>
    );
}