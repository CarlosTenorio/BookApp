import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    constructor() {}

    cloneDeep(object: object): object {
        return JSON.parse(JSON.stringify(object));
    }
}
