import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employee = 'John Doe';
  // Implicit public, equivalent toe
  // public employee: string;
  // (public is the default in TypeScript.)
  // Angular.io style guide recommends implicit public.

  // If the value is known at initialization, it is ok to do so here.
  // Later we will see the constructor used to set these properties
  daysWorked = '81';
  company = { name: 'Acme, Inc.' };
  width = 100;
  height = 100;

  bestProject = "Accounting Dashboard";
  totalRankingPoints = 430;
  weekRankingPoints = 25;

  employeeOfTheWeek = {
    name: 'Raul',
    rankingPosition: 1,
    picture: 'https://github.com/ProgramerGuy.png',
    status: 'active',
    position: "Manager",
    initDate: Date.now(),
  };
}
