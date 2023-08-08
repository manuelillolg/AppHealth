import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationAuthorizationUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationAuthorizationUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationAuthorizationUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}