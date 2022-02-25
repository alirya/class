import InstanceParameters from "../../../../dist/validator/instance-parameters";
import InstanceParametersMessage from "../../../../dist/assert/string/instance-parameters";


it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('boolean', function() {

    InstanceParameters(Map, InstanceParametersMessage)

});
