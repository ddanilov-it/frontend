import { Story } from '@storybook/react';
import { SyntheticEvent, useState } from 'react';

import { Typography } from '../Typography';
import { Paper } from '../Paper';
import { Box } from '@mui/material';
import { Tab } from '../Tab';
import { Tabs } from './Tabs';
import { ExampleTemplate } from '../docs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

type TabPanelProps = {
  children: JSX.Element | JSX.Element[];
  value: number;
  index: number;
}

function CustomTabPanel({children, value, index} : TabPanelProps) {
  return (<div> {(value==index) && children} </div>)
};

export const TabsShowcase: Story = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleChange1 = (_event: SyntheticEvent, newValue: number) => {
    setValue1(newValue);
  };

  const handleChange2 = (_event: SyntheticEvent, newValue: number) => {
    setValue2(newValue);
  };

  return (
    <ExampleTemplate>
      <Typography variant="h3">Tabs</Typography>
      <Typography style={{ width: 772, margin: '60px 0px 16px' }} color="grey" colorIntensity="800" paragraph>
        Вкладки упрощают просмотр и переключение между разделами в рамках одной страницы. 
      </Typography>
      <Typography style={{ width: 772, margin: '0px 0px 60px' }} color="grey" colorIntensity="800" paragraph>
        Данный компонент может быть использован, когда необходимо организовать и обеспечить навигацию между 
        связанными между собой группами контента, которые находятся на одном уровне иерархии страницы. 
      </Typography>
      <ExampleTemplate.Case title="Отображение компонента" 
      descriptionList={[
        'Tabs',
        'Данный компонент используется в интерфейсе для переключения между разными группами контента в рамках одной страницы.',
       ]}
       fullWidth={true}>
        <Tabs style={{margin: '0px 32px'}} value={value1} onChange={handleChange1} centered>
          <Tab label="Вкладка 1" />
          <Tab label="Вкладка 2" />
          <Tab label="Вкладка 3" />
          <Tab label="Вкладка 4" />
          <Tab label="Вкладка 5" />
          <Tab label="Вкладка 6" disabled />
        </Tabs>
      </ExampleTemplate.Case>
      <Paper style={{ width: 468, margin: '60px 0px 0px' }}>
        <Box padding='24px 24px'>
          <Typography variant="h4">Заголовок окна</Typography>
          <Tabs value={value2} onChange={handleChange2} style={{margin: '0px 0px 16px'}}>
            <Tab label="Вкладка 1" />
            <Tab label="Вкладка 2" />
          </Tabs>
          <CustomTabPanel value={value2} index={0}>
            <span>Заглушка примера текста страницы, который несёт очень важный смысл для пользователя 
              и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.</span>
          </CustomTabPanel>
          <CustomTabPanel value={value2} index={1}>
            <span>Заглушка примера текста страницы, который тоже несёт очень важный смысл для пользователя 
              и предлагает ему варианты выбора действий с контентом и в рамках работы приложения.</span>
          </CustomTabPanel>
        </Box>
      </Paper>
    </ExampleTemplate>
  );
};

TabsShowcase.parameters = { options: { showPanel: false } };
