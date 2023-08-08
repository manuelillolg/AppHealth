import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationApiId extends UuidValueObject
{
    public readonly type: string = 'ApplicationApiId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationApiId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}