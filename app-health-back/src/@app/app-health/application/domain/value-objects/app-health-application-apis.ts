import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationApis extends UuidValueObject
{
    public readonly type: string = 'ApplicationApis';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationApis',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}