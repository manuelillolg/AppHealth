import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthAuthenticationInterfaceUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'AuthenticationInterfaceUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'AuthenticationInterfaceUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}