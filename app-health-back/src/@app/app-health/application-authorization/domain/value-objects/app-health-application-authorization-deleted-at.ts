import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationAuthorizationDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationAuthorizationDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationAuthorizationDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}