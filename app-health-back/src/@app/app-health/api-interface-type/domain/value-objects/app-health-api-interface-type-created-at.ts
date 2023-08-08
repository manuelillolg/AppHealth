import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApiInterfaceTypeCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApiInterfaceTypeCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApiInterfaceTypeCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}