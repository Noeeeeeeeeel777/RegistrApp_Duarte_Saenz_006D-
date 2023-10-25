import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApicrudService } from '../servicios/apicrud.service';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard  {

  constructor(private apicrud:ApicrudService,
              private router: Router,
              private toastcontroller: ToastController){}

  canActivate():

   |Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if (!this.apicrud.IsLogged())
     {
      this.showToast('Debe iniciar sesión');
      this.router.navigateByUrl("/login");
      return false;
     }
    return true;
  }
  
  async showToast(msg: any){
    const toast=await this.toastcontroller.create({
      message : msg,
      duration: 3000
    });
    toast.present();
  }



}
