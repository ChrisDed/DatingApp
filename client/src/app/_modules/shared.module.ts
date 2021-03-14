import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    }),
	TabsModule.forRoot(),
	NgxGalleryModule,
	NgxSpinnerModule,
	FileUploadModule,
	BsDatepickerModule.forRoot(),
	PaginationModule.forRoot(),
	ButtonsModule.forRoot()
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    BrowserAnimationsModule,
	TabsModule,
	NgxGalleryModule,
	NgxSpinnerModule,
	FileUploadModule,
	BsDatepickerModule,
	PaginationModule,
	ButtonsModule
  ]
})
export class SharedModule { }
