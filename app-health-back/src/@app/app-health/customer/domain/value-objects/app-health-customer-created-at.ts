import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthCustomerCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'CustomerCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'CustomerCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}