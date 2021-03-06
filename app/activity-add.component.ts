import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from './activity.model';

@Component ({
  selector: "add-activity",
  template:`
  <div *ngIf="childSelectedActivity===null" class="row">
    <h3>Add Activity:</h3>
    <div class="form-group col-xs-8">
      <label>Activity Description: </label>
      <input #newActivity class="form-control">
    </div>
    <div class="form-group col-xs-4">
      <label>How many minutes?: </label>
      <input #newDuration class="form-control" type="number">
    </div>
    <div class="form-group col-xs-12">
    <button (click)="
      addClicked(newActivity.value, newDuration.value);
      newActivity.value='';
      newDuration.value=0;
    " class="btn form-control">Add Activity</button>
    </div>
  </div>
  `
})

export class AddActivityComponent {
  @Input() childSelectedActivity: Activity;
  @Output() addActivitySender = new EventEmitter();
  addClicked(activity: string, duration: number){
    if((activity!=='')&&(duration>0)) {
      var newActivityToAdd: Activity = new Activity(activity, duration);
      this.addActivitySender.emit(newActivityToAdd);
    } else {
      alert("Be sure to enter a description of your activity and the number of minutes you did it!");
    }
  }
}
