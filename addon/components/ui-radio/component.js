import Ember from 'ember';
import layout from './template';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  layout: layout,
  tagName: "label",
  classNames: ['center-block'],
  checked: false,
  updateChecked: function() {
    this.set('checked', this.get('parentView.value') === this.get('value'));
  }.on('init').observes('parentView.value'),
  labelText: computed('parentView.optionLabelPath', 'content', {
    get: function() {
      // TODO: identical code can be moved into a util
      if(this.get('parentView.optionLabelPath')) {
        return this.get(this.get('parentView.optionLabelPath'));
      } else {
        return null;
      }
    }
  }),
  value: computed('parentView.optionValuePath', 'content', {
    get: function() {
      // TODO: identical code can be moved into a util
      if(this.get('parentView.optionValuePath')) {
        return this.get(this.get('parentView.optionValuePath'));
      } else {
        return null;
      }
    }
  }),
  change: function() {
    this.set('parentView.value', this.get('value'));
  }
});
