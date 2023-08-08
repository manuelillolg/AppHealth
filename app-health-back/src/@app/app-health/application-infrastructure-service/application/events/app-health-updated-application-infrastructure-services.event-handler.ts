import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppHealthUpdatedApplicationInfrastructureServicesEvent } from './app-health-updated-application-infrastructure-services.event';

@EventsHandler(AppHealthUpdatedApplicationInfrastructureServicesEvent)
export class AppHealthUpdatedApplicationInfrastructureServicesEventHandler implements IEventHandler<AppHealthUpdatedApplicationInfrastructureServicesEvent>
{
    handle(event: AppHealthUpdatedApplicationInfrastructureServicesEvent): void
    {
        // console.log('AppHealthUpdatedApplicationInfrastructureServicesEvent: ', event);
    }
}