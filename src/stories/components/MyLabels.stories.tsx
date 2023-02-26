import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabels } from '../../components/MyLabels';

export default{
  title: 'UI/MyLabels',
  component: MyLabels,
  argTypes:{ // esto es para configurar controles personalizados
    /* size: { control: 'select'},
    color: { control: 'select'},
    fontColor: {control: 'color'} */
  }
} as ComponentMeta<typeof MyLabels>

const Template: ComponentStory<typeof MyLabels> = (args) => <MyLabels {...args}/>;

export const Basic = Template.bind({});
Basic.args = {
  size:  'normal'
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  size:  'normal',
  allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
  size:  'normal',
  color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  size:  'normal',
  color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size:  'h1',
  fontColor: '#cb1ab4'
}