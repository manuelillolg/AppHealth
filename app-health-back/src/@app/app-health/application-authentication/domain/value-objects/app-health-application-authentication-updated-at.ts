import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationAuthenticationUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationAuthenticationUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationAuthenticationUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}