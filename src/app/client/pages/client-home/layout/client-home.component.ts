import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {B2bNgxLinkThemeEnum, B2bNgxLinkService} from "@b2b/ngx-link";
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from '../../client-profile/services/user/user.service';
import { OffersService } from 'src/app/client/services/offers/offers.service';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'b2b-client-home-old',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientHomeOldComponent {
  @ViewChild('video') video: ElementRef;
  public readonly offers$: Observable<any[]>;
  public readonly offersSkeletonOptions: any;
  public readonly user$: Observable<any>;

  public readonly b2bNgxLinkThemeEnum: typeof B2bNgxLinkThemeEnum;

  constructor(
    private readonly _offersService: OffersService,
    private readonly _usersService: UserService,
    public readonly b2bNgxLinkService: B2bNgxLinkService,
    private readonly translateService: TranslateService,
    private readonly _authService: AuthService
  ) {
    this.offers$ = this.getOffers();
    this.user$ = this._usersService.getUser$();
    this.offersSkeletonOptions = this.getOffersSkeletonOptions();
    this.b2bNgxLinkThemeEnum = B2bNgxLinkThemeEnum;
  }

  public get ruVideo() {
    return this.translateService.currentLang === 'ru';
  }

  public getOffersSkeletonOptions() {
    return [
      {
        count: 10,
        animation: 'progress',
        theme: {
          height: '120px',
        },
      },
    ];
  }

  private getOffers() {
    return this._offersService.getActiveOffers();
  }

  processVideoClick(event: any) {
    const percents = (event.currentTime * 100) / event.duration;

    const breakpoints = [0, 25, 50, 75, 100];

    const differenece = breakpoints.map((breakpoint) =>
      breakpoint > percents ? breakpoint - percents : percents - breakpoint
    );

    const minIndex = differenece.indexOf(Math.min(...differenece.reverse()));

    const percent = breakpoints[breakpoints.length - 1 - minIndex];
  }

  processTitleBtnsClick(name: any, type: any) {}
}
