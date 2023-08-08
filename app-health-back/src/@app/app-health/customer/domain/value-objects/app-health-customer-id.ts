import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthCustomerId extends UuidValueObject
{
    public readonly type: string = 'CustomerId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'CustomerId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}