import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppHealthUpdatedInfrastuctureProvidersEvent } from './app-health-updated-infrastucture-providers.event';

@EventsHandler(AppHealthUpdatedInfrastuctureProvidersEvent)
export class AppHealthUpdatedInfrastuctureProvidersEventHandler implements IEventHandler<AppHealthUpdatedInfrastuctureProvidersEvent>
{
    handle(event: AppHealthUpdatedInfrastuctureProvidersEvent): void
    {
        // console.log('AppHealthUpdatedInfrastuctureProvidersEvent: ', event);
    }
}