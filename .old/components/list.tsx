"use client";

import { Root, View, List, Select, Cell, Panel, Group } from "@vkontakte/vkui";
import React, { useState } from "react";
export default ListData = () => {
  const [draggingList, updateDraggingList] = React.useState([
    "Say",
    "Hello",
    "To",
    "My",
    "Little",
    "Friend",
  ]);

  const onDragFinish = ({ from, to }) => {
    const _list = [...draggingList];
    _list.splice(from, 1);
    _list.splice(to, 0, draggingList[from]);
    updateDraggingList(_list);
  };

  return (
    <View activePanel="list">
      <Panel id="list">
        <PanelHeader>List</PanelHeader>
        <Group>
          <List>
            {draggingList.map((item) => (
              <Cell
                key={item}
                before={<Avatar />}
                draggable
                onDragFinish={onDragFinish}
              >
                {item}
              </Cell>
            ))}
          </List>
        </Group>
      </Panel>
    </View>
  );
};
