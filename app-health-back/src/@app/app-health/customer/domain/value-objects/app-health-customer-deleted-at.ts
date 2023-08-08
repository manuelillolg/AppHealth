import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthCustomerDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'CustomerDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'CustomerDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}