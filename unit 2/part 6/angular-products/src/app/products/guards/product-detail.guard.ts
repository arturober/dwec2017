import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private router: Router) {}

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const id = +route.params['id'];
        if (isNaN(id) || id < 1) {
            console.error('Invalid product id!');
            this.router.navigate(['/products']); // Go to products page instead
            return false; // Can't activate products detail
        }
        return true;
    }
}
