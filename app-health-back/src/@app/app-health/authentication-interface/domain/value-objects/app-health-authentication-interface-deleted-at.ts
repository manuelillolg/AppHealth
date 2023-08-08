import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthAuthenticationInterfaceDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'AuthenticationInterfaceDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'AuthenticationInterfaceDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}