import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationDatabases extends UuidValueObject
{
    public readonly type: string = 'ApplicationDatabases';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationDatabases',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}