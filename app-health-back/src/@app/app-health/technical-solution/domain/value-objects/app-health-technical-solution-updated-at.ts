import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthTechnicalSolutionUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'TechnicalSolutionUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'TechnicalSolutionUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}