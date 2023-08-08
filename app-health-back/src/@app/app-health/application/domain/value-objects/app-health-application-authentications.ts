import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationAuthentications extends UuidValueObject
{
    public readonly type: string = 'ApplicationAuthentications';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationAuthentications',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}