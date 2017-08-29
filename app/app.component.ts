import { resolve } from 'path';
import { privateEncrypt } from 'crypto';
import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <div #entry></div>
</div>
  `
})
export class AppComponent implements AfterContentInit {
  
  @ViewChild('entry', {read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private  resolver: ComponentFactoryResolver ){
    

  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    const auhtFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(auhtFormFactory);


    
  }


  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user,);
  }

}