import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthInfrastructureProviderName extends StringValueObject
{
    public readonly type: string = 'InfrastructureProviderName';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'InfrastructureProviderName',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}