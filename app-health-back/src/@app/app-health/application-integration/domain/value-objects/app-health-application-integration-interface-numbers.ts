import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationIntegrationInterfaceNumbers extends IntValueObject
{
    public readonly type: string = 'ApplicationIntegrationInterfaceNumbers';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationIntegrationInterfaceNumbers',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}