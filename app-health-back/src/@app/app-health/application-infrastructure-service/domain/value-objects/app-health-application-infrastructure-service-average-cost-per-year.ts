import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationInfrastructureServiceAverageCostPerYear extends IntValueObject
{
    public readonly type: string = 'ApplicationInfrastructureServiceAverageCostPerYear';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationInfrastructureServiceAverageCostPerYear',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}