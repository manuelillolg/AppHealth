import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthCustomerUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'CustomerUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'CustomerUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}