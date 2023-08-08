import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppHealthCreatedInfrastuctureProvidersEvent } from './app-health-created-infrastucture-providers.event';

@EventsHandler(AppHealthCreatedInfrastuctureProvidersEvent)
export class AppHealthCreatedInfrastuctureProvidersEventHandler implements IEventHandler<AppHealthCreatedInfrastuctureProvidersEvent>
{
    handle(event: AppHealthCreatedInfrastuctureProvidersEvent): void
    {
        // console.log('CreatedInfrastuctureProvidersEvent: ', event);
    }
}