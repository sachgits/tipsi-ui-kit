import React from 'react'
import register from '../core/utils/register'
import Tags from '../../src/Tags'

register.addExample({
  type: 'components',
  title: '<Tags />',
  description: 'Tags component',
  examples: [{
    title: 'Default',
    description: 'Tags.Item`s as children of Tags',
    render: () => (
      <Tags>
        <Tags.Item name="Most Recent" />
        <Tags.Item name="Price" />
        <Tags.Item name="Red" />
        <Tags.Item name="White" />
        <Tags.Item name="Sparkling" />
        <Tags.Item name="Other" />
        <Tags.Item name="Beer" />
        <Tags.Item name="Spirits" />
      </Tags>
    ),
  }, {
    title: 'Active',
    description: 'Tags.Item Prop: active',
    render: () => (
      <Tags>
        <Tags.Item name="Beef" />
        <Tags.Item name="Cheese" />
        <Tags.Item name="Lamb" active />
        <Tags.Item name="Seafood" />
        <Tags.Item name="Vegitables" active />
        <Tags.Item name="Chiken" />
        <Tags.Item name="Pork" />
        <Tags.Item name="Turkey" />
      </Tags>
    ),
  }, {
    title: 'Title',
    description: 'Tags Prop: title',
    render: () => (
      <Tags title="Fruits">
        <Tags.Item name="Strawberries" />
        <Tags.Item name="Grape" />
        <Tags.Item name="Watermelon" />
        <Tags.Item name="Banana" />
        <Tags.Item name="Orange" />
        <Tags.Item name="Peach" />
        <Tags.Item name="Mango" />
        <Tags.Item name="Pineapple" />
      </Tags>
    ),
  }, {
    title: 'Theme',
    description: 'Tags Prop: theme (light, dark)',
    render: () => (
      <Tags theme="dark">
        <Tags.Item name="Beef" />
        <Tags.Item name="Cheese" />
        <Tags.Item name="Lamb" active />
        <Tags.Item name="Seafood" />
        <Tags.Item name="Vegitables" active />
        <Tags.Item name="Chiken" />
        <Tags.Item name="Pork" />
        <Tags.Item name="Turkey" />
      </Tags>
    ),
  }, {
    title: 'onPress',
    description: 'Tags.Item Prop: onPress',
    render: ({ action }) => ( // eslint-disable-line react/prop-types
      <Tags>
        <Tags.Item name="Beef" onPress={action('onPress: Beef')} />
        <Tags.Item name="Cheese" onPress={action('onPress: Cheese')} />
        <Tags.Item name="Lamb" onPress={action('onPress: Lamb')} />
        <Tags.Item name="Seafood" onPress={action('onPress: Seafood')} />
        <Tags.Item name="Vegitables" onPress={action('onPress: Vegitables')} />
        <Tags.Item name="Chiken" onPress={action('onPress: Chiken')} />
        <Tags.Item name="Pork" onPress={action('onPress: Pork')} />
        <Tags.Item name="Turkey" onPress={action('onPress: Turkey')} />
      </Tags>
    ),
  }],
})
