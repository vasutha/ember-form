import Ember from 'ember';
import layout from './template';

const { computed } = Ember;

export default Ember.Component.extend({
  layout: layout,
  init: function() {
    if(this.get('parentView.forAttribute')) {
      this.set('elementId', this.get('parentView.forAttribute'));
    }
    if(!this.get('optionValuePath')) {
      this.set('optionValuePath', 'content.value');
    }
    if(!this.get('optionLabelPath')) {
      this.set('optionLabelPath', 'content.label');
    }

    this._super();
  },
  optionsClass: 'radio-group-item',
  tagName: 'div',
  classNames: ['form-group'],
  
  hasBlock: computed.bool('template').readOnly()
});
