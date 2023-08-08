import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApiInterfaceTypeDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'ApiInterfaceTypeDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApiInterfaceTypeDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}