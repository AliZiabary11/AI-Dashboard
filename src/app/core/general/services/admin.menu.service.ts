import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AdminMenuService {

    private menuSource = new BehaviorSubject<MenuChangeEvent | null>(null);
    private resetSource = new Subject();

    menuSource$ = this.menuSource.asObservable();
    resetSource$ = this.resetSource.asObservable();

    onMenuStateChange(event: MenuChangeEvent) {
        this.menuSource.next(event);
    }

    reset() {
        this.resetSource.next(true);
    }
}

export interface MenuChangeEvent {
  key: string;
  routeEvent?: boolean;
  item?: any;
}
