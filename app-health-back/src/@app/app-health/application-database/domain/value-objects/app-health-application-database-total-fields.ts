import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationDatabaseTotalFields extends IntValueObject
{
    public readonly type: string = 'ApplicationDatabaseTotalFields';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationDatabaseTotalFields',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}