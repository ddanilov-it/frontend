import { HomeOutlineMd } from '@astral/icons';
import { Story } from '@storybook/react';

import { List } from '../List';
import { ListItem } from '../ListItem';
import { ListItemIcon } from '../ListItemIcon';
import { ListItemText } from '../ListItemText';

import { ListItemSecondaryAction } from './ListItemSecondaryAction';

export default {
  title: 'Components/List/ListItemSecondaryActionItem',
  component: ListItemSecondaryAction,
};

const Template: Story = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem secondaryAction={<HomeOutlineMd color="primary" />}>
        <ListItemIcon>
          <HomeOutlineMd />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
    </List>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
