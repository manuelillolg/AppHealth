import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationAuthenticationCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationAuthenticationCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationAuthenticationCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}