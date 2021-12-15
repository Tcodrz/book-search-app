import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { debounceTime, Subscription } from 'rxjs';
import { QueryObject } from './../../services/book-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() search: EventEmitter<QueryObject> = new EventEmitter();
  searchForm: FormGroup = new FormGroup({});
  subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private deviceDetactor: DeviceDetectorService
  ) { }
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      intitle: this.fb.control('', []),
      inauthor: this.fb.control('', []) ,
      inpublisher: this.fb.control('', []),
      subject: this.fb.control('', [])
    });

    this.subscription = this.searchForm.valueChanges.pipe(
      debounceTime(400)
    ).subscribe(form => {
      this.search.emit(form);
    });
  }
  ngOnDestroy(): void { this.subscription.unsubscribe(); }
  isMobile(): boolean { return !this.deviceDetactor.isDesktop(); }
}
