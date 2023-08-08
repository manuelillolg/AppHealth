import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationInfrastructureServices extends UuidValueObject
{
    public readonly type: string = 'ApplicationInfrastructureServices';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationInfrastructureServices',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}