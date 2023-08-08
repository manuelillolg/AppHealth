import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthAuthorizationInterfaceUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'AuthorizationInterfaceUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'AuthorizationInterfaceUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}