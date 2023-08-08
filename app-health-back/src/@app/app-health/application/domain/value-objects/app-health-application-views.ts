import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationViews extends UuidValueObject
{
    public readonly type: string = 'ApplicationViews';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationViews',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}