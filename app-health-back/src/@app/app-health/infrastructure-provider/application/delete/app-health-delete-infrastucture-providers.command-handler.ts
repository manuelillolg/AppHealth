import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AppHealthDeleteInfrastuctureProvidersCommand } from './app-health-delete-infrastucture-providers.command';
import { AppHealthDeleteInfrastuctureProvidersService } from './app-health-delete-infrastucture-providers.service';

@CommandHandler(AppHealthDeleteInfrastuctureProvidersCommand)
export class AppHealthDeleteInfrastuctureProvidersCommandHandler implements ICommandHandler<AppHealthDeleteInfrastuctureProvidersCommand>
{
    constructor(
        private readonly deleteInfrastuctureProvidersService: AppHealthDeleteInfrastuctureProvidersService,
    ) {}

    async execute(command: AppHealthDeleteInfrastuctureProvidersCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteInfrastuctureProvidersService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}