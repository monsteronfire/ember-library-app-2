import Ember from 'ember';

export default Ember.Controller.extend({
  message: '',
  useremail: '',

  isFilled: Ember.computed.gte('message', 5),

  isValid: Ember.computed.and('message', 'useremail'),

  canSave: Ember.computed.and('message', 'useremail')
});
