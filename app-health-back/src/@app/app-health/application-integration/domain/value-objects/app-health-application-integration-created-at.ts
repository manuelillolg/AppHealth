import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationIntegrationCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationIntegrationCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationIntegrationCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}