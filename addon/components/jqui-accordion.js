import Ember from 'ember';
import jquiWidget from 'ember-cli-jqui/mixins/jqui-widget';

export default Ember.Component.extend(jquiWidget, {
    uiType: 'accordion',
    uiOptions: ['active', 'animate', 'collapsible', 'disabled', 'event', 'header', 'heightStyle', 'icons'],
    uiEvents: ['activate', 'beforeActivate', 'create']
});