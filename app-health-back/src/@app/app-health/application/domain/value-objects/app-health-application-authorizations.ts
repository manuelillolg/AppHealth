import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationAuthorizations extends UuidValueObject
{
    public readonly type: string = 'ApplicationAuthorizations';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationAuthorizations',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}