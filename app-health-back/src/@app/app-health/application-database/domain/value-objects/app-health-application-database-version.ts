import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationDatabaseVersion extends StringValueObject
{
    public readonly type: string = 'ApplicationDatabaseVersion';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationDatabaseVersion',
            nullable   : false,
            undefinable: false,
            maxLength  : 20,
        }, validationRules));
    }
}