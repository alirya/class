import InstanceParameters from '../../../../dist/validator/instance';
import InstanceParametersMessage from '../../../../dist/assert/string/instance';


it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('boolean', function() {

    InstanceParameters.Parameters(Map, InstanceParametersMessage.Parameters);

});
