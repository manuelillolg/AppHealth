import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppHealthDeletedInfrastuctureProvidersEvent } from './app-health-deleted-infrastucture-providers.event';

@EventsHandler(AppHealthDeletedInfrastuctureProvidersEvent)
export class AppHealthDeletedInfrastuctureProvidersEventHandler implements IEventHandler<AppHealthDeletedInfrastuctureProvidersEvent>
{
    handle(event: AppHealthDeletedInfrastuctureProvidersEvent): void
    {
        // console.log('DeletedInfrastuctureProvidersEvent: ', event);
    }
}