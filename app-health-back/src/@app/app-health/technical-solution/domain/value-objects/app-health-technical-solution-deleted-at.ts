import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthTechnicalSolutionDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'TechnicalSolutionDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'TechnicalSolutionDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}