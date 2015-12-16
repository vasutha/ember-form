import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'label',
  attributeBindings: ['for'],
  classNames: ['control-label']
});
