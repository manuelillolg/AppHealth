import { CQMetadata } from '@aurorajs.dev/core';

export class AppHealthCreateApplicationIntegrationCommand
{
    constructor(
        public readonly payload: {
            id: string;
            name: string;
            description?: string;
            sourceApplicationId: string;
            targetApplicationId: string;
            apiInterfaceTypeId: string;
            interfaceNumbers: number;
            modality: string;
            score: number;
            documentations?: string;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}