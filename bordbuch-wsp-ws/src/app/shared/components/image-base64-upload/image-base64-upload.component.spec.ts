import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBase64UploadComponent } from './image-base64-upload.component';

describe('ImageBase64UploadComponent', () => {
  let component: ImageBase64UploadComponent;
  let fixture: ComponentFixture<ImageBase64UploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBase64UploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBase64UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
