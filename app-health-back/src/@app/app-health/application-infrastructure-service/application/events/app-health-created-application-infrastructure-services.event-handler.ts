import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppHealthCreatedApplicationInfrastructureServicesEvent } from './app-health-created-application-infrastructure-services.event';

@EventsHandler(AppHealthCreatedApplicationInfrastructureServicesEvent)
export class AppHealthCreatedApplicationInfrastructureServicesEventHandler implements IEventHandler<AppHealthCreatedApplicationInfrastructureServicesEvent>
{
    handle(event: AppHealthCreatedApplicationInfrastructureServicesEvent): void
    {
        // console.log('CreatedApplicationInfrastructureServicesEvent: ', event);
    }
}