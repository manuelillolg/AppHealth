import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppHealthDeletedApplicationInfrastructureServicesEvent } from './app-health-deleted-application-infrastructure-services.event';

@EventsHandler(AppHealthDeletedApplicationInfrastructureServicesEvent)
export class AppHealthDeletedApplicationInfrastructureServicesEventHandler implements IEventHandler<AppHealthDeletedApplicationInfrastructureServicesEvent>
{
    handle(event: AppHealthDeletedApplicationInfrastructureServicesEvent): void
    {
        // console.log('DeletedApplicationInfrastructureServicesEvent: ', event);
    }
}