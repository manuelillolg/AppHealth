import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationViewCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'ApplicationViewCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationViewCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}