import Ember from 'ember';
import layout from './template';

// EMBER::TODO:
// Tweak the architecture to rails like helper

export default Ember.Component.extend({
  layout: layout,
  attributeBindings: ['role'],
  classNames: ['ui-form'],
  tagName: 'form',
  'for': null,
  startValidate: false,

  submit: function(e) {
    e.preventDefault();
    this.send('validate');
  },
  closeModal: 'closeModal',
  actions: {
    validate: function (callBackAction) {
      var _this = this,
          formModel = _this.get('for');

      callBackAction = callBackAction || 'save';

      Ember.set(_this, callBackAction, callBackAction);

      _this.set('startValidate', true);

      formModel.validate()
        .then(function() {
          _this.sendAction(callBackAction);
        }).catch(function() {
          _this.sendAction('onValidationFailed');
          // any validations fail
        });
    },
    cancel: function (callBackAction) {
      var _this = this;

      callBackAction = callBackAction || 'cancel';

      Ember.set(_this, callBackAction, callBackAction);

      _this.sendAction(callBackAction);
    }
  }
});
