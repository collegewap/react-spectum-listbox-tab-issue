import * as React from 'react';
import { Provider, lightTheme } from '@adobe/react-spectrum';
import { ListBox, Item } from '@adobe/react-spectrum';
import { TabList, TabPanels, Tabs } from '@adobe/react-spectrum';

import List from './List';

export default function App() {
  return (
    <Provider theme={lightTheme} height="100%" colorScheme="light">
      <Tabs aria-label="History of Ancient Rome">
        <TabList>
          <Item key="FoR">Founding of Rome</Item>
          <Item key="MaR">Monarchy and Republic</Item>
        </TabList>
        <TabPanels>
          <Item key="FoR">
            <List />
          </Item>
          <Item key="MaR">Senatus Populusque Romanus.</Item>
        </TabPanels>
      </Tabs>
    </Provider>
  );
}
