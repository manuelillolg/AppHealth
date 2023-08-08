import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApiInterfaceTypeName extends StringValueObject
{
    public readonly type: string = 'ApiInterfaceTypeName';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'ApiInterfaceTypeName',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}