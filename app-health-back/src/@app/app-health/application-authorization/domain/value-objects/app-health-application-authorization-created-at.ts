import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationAuthorizationCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationAuthorizationCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationAuthorizationCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}