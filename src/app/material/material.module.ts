import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSortModule} from '@angular/material/sort';


const MaterialComponents=[
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatListModule,
  MatTabsModule,
  MatDialogModule,
  MatTableModule,
  MatDatepickerModule,
  MatProgressBarModule,
  MatDividerModule,
  MatGridListModule,
  MatTooltipModule,
  MatExpansionModule,
  MatSortModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  MatFormFieldModule
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
