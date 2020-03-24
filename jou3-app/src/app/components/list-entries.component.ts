import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListEntry } from 'src/app/models';

import { EntriesAdapter } from './../redux/entries/adapter';

@Component({
  selector: "jou-list-entries",
  template: `
    <div class="list-entry" *ngFor="let entry of entries$ | async; index as i">
      <jou-checkbox class="checkbox"></jou-checkbox>
      <div class="entry-right">
        <div class="date-time-heart">
          <div class="date-time">
            <label class="date">{{ entry.date }}</label>
            <label class="time">• {{ entry.time }}</label>
          </div>

          <jou-svg-icon
            class="heart-icon"
            [name]="'heart'"
            [width]="23"
            [height]="21"
            [fill]="getIconFill(entry, i)"
            (clicked)="onClick($event, entry)"
            (mouseEntered)="onMouseEnter($event, i)"
            (mouseExited)="onMouseExit($event, i)"
          ></jou-svg-icon>
        </div>

        <div class="title-entry">
          <label class="title">{{ entry.title }}</label>
          <p class="entry">{{ entry.entry }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        height: 100vh;
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .list-entry {
        display: flex;
        align-items: center;
        padding: 1rem;
        height: 6rem;
      }

      .list-entry:nth-child(odd) {
        background-color: var(--jou-pink-2);
      }

      .list-entry:nth-child(even) {
        background-color: var(--jou-pink-4);
      }

      .entry-right {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .checkbox {
        margin-right: 1rem;
      }

      .date-time-heart {
        display: flex;
        justify-content: space-between;
        margin-right: 1rem;
      }

      .date-time {
        margin-bottom: 0.5rem;
        font-size: 1rem;
        color: var(--jou-pink-8);
      }

      .date {
        margin-right: 0.5rem;
      }

      .title-entry {
        margin-left: 0.5rem;
      }

      .title {
        font-size: 1.125rem;
        word-break: break-word;
        color: var(--jou-pink-9);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      .entry {
        font-size: 1rem;
        word-break: break-word;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .heart-icon:hover {
        cursor: pointer;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListEntriesComponent implements OnInit {
  entries$: Observable<ListEntry[]>;
  currentIndex = -1;

  constructor(private entriesAdapter: EntriesAdapter) {}

  ngOnInit() {
    this.entries$ = this.entriesAdapter.getEntries();
  }

  getIconFill(entry, i) {
    return this.currentIndex === i || entry.favorite
      ? "var(--jou-pink-9"
      : "none";
  }

  onClick($event, entry) {
    entry.favorite = !entry.favorite;
  }

  onMouseEnter($event, i) {
    this.currentIndex = i;
  }

  onMouseExit($event, i) {
    this.currentIndex = -1;
  }
}
