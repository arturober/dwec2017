import { IEvent } from './ievent';
import { SERVER } from './constants';
import { Http } from './http.class';


Http.ajax('GET', `${SERVER}/events`)
    .then((response: {events: IEvent[], ok: boolean}) => {
        if(response.ok) {
            response.events.forEach(e => {
                console.log(e.name + " - " + e.description);
            });
        } else {
            throw "Couldn't get events";
        }
    }).catch((error: string) => console.error(error));