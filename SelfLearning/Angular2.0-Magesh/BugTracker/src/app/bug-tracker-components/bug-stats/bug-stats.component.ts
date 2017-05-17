import { Component, Input } from '@angular/core';
import { IBug } from '../Model/IBug';

@Component({
    selector : 'bug-stats',
    template : `
        <section class="stats">
			<span class="closed">{{bugs | closedCount}}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
    `
})
 export class BugStatsComponent{
    @Input('data')
	bugs : Array<IBug> = [];
 }