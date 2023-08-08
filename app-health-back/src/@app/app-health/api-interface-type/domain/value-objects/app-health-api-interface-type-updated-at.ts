import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApiInterfaceTypeUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApiInterfaceTypeUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApiInterfaceTypeUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}