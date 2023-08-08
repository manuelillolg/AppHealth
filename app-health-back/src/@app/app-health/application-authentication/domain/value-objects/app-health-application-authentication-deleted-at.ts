import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationAuthenticationDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationAuthenticationDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationAuthenticationDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}