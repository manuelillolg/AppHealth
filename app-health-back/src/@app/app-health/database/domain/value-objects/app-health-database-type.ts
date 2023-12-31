import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthDatabaseType extends EnumValueObject
{
    public readonly type: string = 'DatabaseType';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'DatabaseType',
            nullable   : false,
            undefinable: false,
            enumOptions: ['RELATIONAL','NO_SQL','KEY_VALUE','GRAPH'],
        }, validationRules));
    }
}