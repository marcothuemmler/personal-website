import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _isScreenSmall: boolean = false;

  constructor() {
    this._isScreenSmall = window.matchMedia('(max-width: 1024px)').matches;

    window.addEventListener('resize', this.onResize.bind(this));
  }

  get isOpen(): Observable<boolean> {
    return this._isOpen.asObservable();
  }

  toggle(): void {
    if (this._isScreenSmall || this._isOpen.value) {
      this._isOpen.next(!this._isOpen.value);
    }
  }

  private onResize(): void {
    this._isScreenSmall = window.matchMedia('(max-width: 1024px)').matches;
  }
}
