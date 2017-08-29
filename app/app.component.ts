import {
    AfterContentInit,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
        <div>

           <div #entry></div>
           <template #tmpl let-name let-location="location">
             {{name}} : {{ location }}
           </template>

        </div>
  `
})
export class AppComponent implements AfterContentInit {

      component: ComponentRef<AuthFormComponent>;

      @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

      @ViewChild('tmpl') tmpl: TemplateRef<any>;

      constructor(private resolver: ComponentFactoryResolver) {


      }

      ngAfterContentInit() {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        this.entry.createEmbeddedView(this.tmpl, {
          $implicit: 'Yudong',
          location: 'UK, England'
        });
      }

}