import { Meta, Story } from '@storybook/react/types-6-0';
import { Order } from '../../models/order.model';
import { Card } from './index';
import mock from './mock';

export default {
  title: 'Card',
  component: Card,
  args: mock,
} as Meta;

export const Template: Story<Order> = (args: Order) => {
  return <Card {...args} />;
};
