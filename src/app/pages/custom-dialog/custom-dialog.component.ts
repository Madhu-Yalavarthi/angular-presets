import { DOCUMENT } from '@angular/common';
import { ApplicationRef, Component, ComponentFactoryResolver, Inject, Injector, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CustomNotificationComponent } from 'src/app/dialogs/custom-notification/custom-notification.component';
import { NotificationComponent } from 'src/app/dialogs/notification/notification.component';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnInit, OnDestroy {
  sub: Subscription;
  overlayImage: any;
  constructor(private matDialog: MatDialog,
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) document,
    private appRef: ApplicationRef,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  openDialog() {
    this.sub = this.matDialog.open(NotificationComponent, { width: "600px", data: "yo sup!" })
      .afterClosed()
      .subscribe(res => {
        console.log(res);
      })
  }

  openCustomDialog() {
    // render new element to body tags
    if (!this.overlayImage) {
      this.overlayImage = this.renderer.createElement('div');
      this.renderer.addClass(this.overlayImage, 'image-overlay');
      this.renderer.appendChild(document.body, this.overlayImage);
      const factory = this.resolver.resolveComponentFactory(CustomNotificationComponent);
      const compRef = factory.create(this.injector, [], this.overlayImage);
      this.appRef.attachView(compRef.hostView);
    }

  }


}
