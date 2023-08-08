import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthDatabaseVersions extends JsonValueObject
{
    public readonly type: string = 'DatabaseVersions';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'DatabaseVersions',
            nullable   : false,
            undefinable: false,
        }, validationRules));
    }
}