import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthDeleteApplicationInfrastructureServicesCommand } from './app-health-delete-application-infrastructure-services.command';
import { AppHealthDeleteApplicationInfrastructureServicesService } from './app-health-delete-application-infrastructure-services.service';

@CommandHandler(AppHealthDeleteApplicationInfrastructureServicesCommand)
export class AppHealthDeleteApplicationInfrastructureServicesCommandHandler implements ICommandHandler<AppHealthDeleteApplicationInfrastructureServicesCommand>
{
    constructor(
        private readonly deleteApplicationInfrastructureServicesService: AppHealthDeleteApplicationInfrastructureServicesService,
    ) {}

    async execute(command: AppHealthDeleteApplicationInfrastructureServicesCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteApplicationInfrastructureServicesService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}