import { BooleanValueObject, DataValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationHasTenants extends BooleanValueObject
{
    public readonly type: string = 'ApplicationHasTenants';

    constructor(value: boolean, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationHasTenants',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}