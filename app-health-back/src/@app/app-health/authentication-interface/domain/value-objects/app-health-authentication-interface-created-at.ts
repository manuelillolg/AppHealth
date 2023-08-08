import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthAuthenticationInterfaceCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'AuthenticationInterfaceCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'AuthenticationInterfaceCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}