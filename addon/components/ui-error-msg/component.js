import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'span',
  classNames: ['error'],
  error: Ember.computed('errors.@each', {
    get: function() {
      console.log('ERRORS :: ', this.get('errors'));
      return this.get('errors.firstObject');
    }
  })
});
