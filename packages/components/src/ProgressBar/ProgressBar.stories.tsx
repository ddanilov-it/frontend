import { type Meta } from '@storybook/react';

import { ProgressBar } from './ProgressBar';

/**
 * 
Прогресс-бар — это индикатор, который отображает прогресс выполнения задачи.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(%D0%90%D0%9A%D0%A2%D0%A3%D0%90%D0%9B%D0%AC%D0%9D%D0%9E)?type=design&node-id=20283-20&mode=design&t=09p4o3Ud17VJNI8y-0)
 * ### [Guide]()
 */

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
};

export default meta;

export const Example = ({
  currentProgress = 25,
  maxProgress = 100,
}: {
  currentProgress?: number;
  maxProgress?: number;
}) => (
  <ProgressBar currentProgress={currentProgress} maxProgress={maxProgress} />
);
