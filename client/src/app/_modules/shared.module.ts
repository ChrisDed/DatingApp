import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';

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
	FileUploadModule
  ],
  exports: [
    BsDropdownModule,
    ToastrModule,
    BrowserAnimationsModule,
	TabsModule,
	NgxGalleryModule,
	NgxSpinnerModule,
	FileUploadModule
  ]
})
export class SharedModule { }
