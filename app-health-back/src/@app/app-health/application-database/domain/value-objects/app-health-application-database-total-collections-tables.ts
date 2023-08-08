import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationDatabaseTotalCollectionsTables extends IntValueObject
{
    public readonly type: string = 'ApplicationDatabaseTotalCollectionsTables';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationDatabaseTotalCollectionsTables',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}