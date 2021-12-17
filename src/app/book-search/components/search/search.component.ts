import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';
import * as utils from '../../../core/utils/utils';
import { User } from './../../../state/interface/user.interface';
import { QueryObject } from './../../services/book-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() set user(val: User | null) { if (val) this.username = val.username; }
  @Input() set query(val: QueryObject) {
    if (!utils.objectsComnpare<QueryObject>(val, this.searchForm.value as QueryObject))
      this.searchForm.patchValue(val);
  }
  @Output() search: EventEmitter<QueryObject> = new EventEmitter();
  searchForm: FormGroup = new FormGroup({
    intitle: new FormControl(''),
    inauthor: new FormControl(''),
    inpublisher: new FormControl(''),
    subject: new FormControl('')
  });
  subscription: Subscription = new Subscription();
  username = '';

  ngOnInit(): void {
    this.subscription = this.searchForm.valueChanges.pipe(
      debounceTime(400)
    ).subscribe(form => {
      this.search.emit(form);
    });
  }
  ngOnDestroy(): void { this.subscription.unsubscribe(); }
}
