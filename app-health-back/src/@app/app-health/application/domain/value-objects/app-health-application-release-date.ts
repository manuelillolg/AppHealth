import { DataValueObject, DateValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AppHealthApplicationReleaseDate extends DateValueObject
{
    public readonly type: string = 'ApplicationReleaseDate';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'ApplicationReleaseDate',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}