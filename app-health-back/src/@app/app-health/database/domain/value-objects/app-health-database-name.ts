import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthDatabaseName extends StringValueObject
{
    public readonly type: string = 'DatabaseName';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'DatabaseName',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}