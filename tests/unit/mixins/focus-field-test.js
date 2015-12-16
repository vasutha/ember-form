import Ember from 'ember';
import FocusFieldMixin from '../../../mixins/focus-field';
import { module, test } from 'qunit';

module('Unit | Mixin | focus field');

// Replace this with your real tests.
test('it works', function(assert) {
  let FocusFieldObject = Ember.Object.extend(FocusFieldMixin);
  let subject = FocusFieldObject.create();
  assert.ok(subject);
});
