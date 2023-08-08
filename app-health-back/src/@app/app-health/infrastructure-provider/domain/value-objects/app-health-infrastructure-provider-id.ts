import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthInfrastructureProviderId extends UuidValueObject
{
    public readonly type: string = 'InfrastructureProviderId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'InfrastructureProviderId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}