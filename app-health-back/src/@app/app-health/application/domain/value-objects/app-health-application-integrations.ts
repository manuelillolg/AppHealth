import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationIntegrations extends UuidValueObject
{
    public readonly type: string = 'ApplicationIntegrations';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationIntegrations',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}