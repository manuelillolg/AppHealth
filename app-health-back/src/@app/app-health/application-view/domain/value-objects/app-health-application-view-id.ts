import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationViewId extends UuidValueObject
{
    public readonly type: string = 'ApplicationViewId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationViewId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}