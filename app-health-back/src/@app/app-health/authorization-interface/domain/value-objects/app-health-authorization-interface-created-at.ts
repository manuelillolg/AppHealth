import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthAuthorizationInterfaceCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'AuthorizationInterfaceCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'AuthorizationInterfaceCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}