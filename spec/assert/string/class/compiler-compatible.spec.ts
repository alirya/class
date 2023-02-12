import InstanceParameters from '../../../../dist/validator/instance.js';
import InstanceParametersMessage from '../../../../dist/assert/string/instance.js';


it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('boolean', function() {

    InstanceParameters.Parameters(Map, InstanceParametersMessage.Parameters);

});
