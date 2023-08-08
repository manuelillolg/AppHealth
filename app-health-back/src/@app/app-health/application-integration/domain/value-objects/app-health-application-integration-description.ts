import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationIntegrationDescription extends StringValueObject
{
    public readonly type: string = 'ApplicationIntegrationDescription';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationIntegrationDescription',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}