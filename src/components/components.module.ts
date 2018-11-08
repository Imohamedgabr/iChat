import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { IonicModule } from 'ionic-angular';
import { RegisterFormComponent } from './register-form/register-form.component';


@NgModule({
	declarations: [LoginFormComponent,
    RegisterFormComponent],
	imports: [IonicModule],
	exports: [LoginFormComponent,
    RegisterFormComponent]
})
export class ComponentsModule {}
