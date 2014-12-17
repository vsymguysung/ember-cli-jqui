import Ember from 'ember';
import jquiWidget from 'ember-cli-jqui/mixins/jqui-widget';

export default Ember.Component.extend(jquiWidget, {
    uiType: 'progressbar',
    uiOptions: ['value', 'max'],
    uiEvents: ['change', 'complete']
});
