import { BooleanValueObject, DataValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationHasLicensing extends BooleanValueObject
{
    public readonly type: string = 'ApplicationHasLicensing';

    constructor(value: boolean, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationHasLicensing',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}