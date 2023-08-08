import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthInfrastructureProviderScore extends SmallintValueObject
{
    public readonly type: string = 'InfrastructureProviderScore';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'InfrastructureProviderScore',
            nullable   : false,
            undefinable: false,
            maxLength  : 6,
            unsigned   : true,
        }, validationRules));
    }
}