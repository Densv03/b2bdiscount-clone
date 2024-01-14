import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layout/client.component';
import { DefaultRoleGuard } from '../auth/guards/defaultRole/deafult-role.guard';
import { AuthGuard } from '../auth/guards/auth/auth.guard';
import { ChatGuard } from '../auth/guards/chat/chat.guard';
import { CompanyInformationGuard } from '../auth/guards/companyInformation/company-information.guard';
import { BuyerGuard } from '../auth/guards/buyer/buyer.guard';
import { LanguageGuard } from '../core/guards/language.guard';
import { UserResolver } from 'src/app/core/resolvers/user.resolver';

const routes: Routes = [
	{
		path: '',
		resolve: {
			data: UserResolver,
		},
		component: ClientComponent,
		// canActivate: [RegistrationSecondStepGuard],
		canActivateChild: [LanguageGuard],
		children: [
			{
				path: '',
				canActivate: [DefaultRoleGuard],
				loadChildren: () =>
					import('../client/pages/client-main/client-main.module').then(
						(m) => m.ClientMainModule
					),
			},
			// {
			// 	path: "",
			// 	canActivate: [DefaultRoleGuard],
			// 	loadChildren: () => import("./pages/client-home/client-home-old.module").then((m) => m.ClientHomeOldModule),
			// 	data: {
			// 		meta: {
			// 			title: "Globy - Buy and Sell B2B Cargo with Discount!",
			// 			description: "Globy - Buy and Sell B2B Cargo with Discount!",
			// 		},
			// 	},
			// },
			{
				path: 'market-promotion',
				loadChildren: () =>
					import(
						'./pages/client-market-promotion/client-market-promotion.module'
					).then((m) => m.ClientMarketPromotionModule),
			},
			{
				path: 'market-promotion/:lang',
				loadChildren: () =>
					import(
						'./pages/client-market-promotion/client-market-promotion.module'
					).then((m) => m.ClientMarketPromotionModule),
			},
			{
				path: 'market-promo',
				loadChildren: () =>
					import('./pages/client-market-promo/client-market-promo.module').then(
						(m) => m.ClientMarketPromoModule
					),
			},
			{
				path: 'market-promo/:lang',
				loadChildren: () =>
					import('./pages/client-market-promo/client-market-promo.module').then(
						(m) => m.ClientMarketPromoModule
					),
			},
			// {
			// 	path: "quiz",
			// 	loadChildren: () => import("./pages/client-quiz/client-quiz.module").then((m) => m.ClientQuizModule),
			// 	data: {
			// 		meta: {
			// 			title: "Globy - Buy and Sell B2B Cargo with Discount!",
			// 			description: "Globy - Quiz!",
			// 		},
			// 	},
			// },
			// {
			// 	path: "sean.quiz",
			// 	loadChildren: () => import("./pages/client-quiz/client-quiz.module").then((m) => m.ClientQuizModule),
			// 	data: {
			// 		meta: {
			// 			title: "Globy - Buy and Sell B2B Cargo with Discount!",
			// 			description: "Globy - Quiz!",
			// 		},
			// 	},
			// },
			{
				path: 'email-confirmation',
				loadChildren: () =>
					import(
						'./pages/client-email-confirmation/client-email-confirmation.module'
					).then((m) => m.ClientEmailConfirmationModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Email Confirmation',
					},
				},
			},
			{
				path: 'how-it-works',
				canActivate: [DefaultRoleGuard],
				loadChildren: () =>
					import('./pages/client-how-it-works/client-how-it-works.module').then(
						(m) => m.ClientHowItWorksModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - How it works',
					},
				},
			},
			{
				path: 'promo_rus',
				loadChildren: () =>
					import(
						'./pages/client-how-it-works-2/client-how-it-works-2.module'
					).then((m) => m.ClientHowItWorks2Module),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Promo Rus',
					},
				},
			},
			{
				path: 'promo_ukr',
				loadChildren: () =>
					import(
						'./pages/client-how-it-works-3/client-how-it-works-3.module'
					).then((m) => m.ClientHowItWorks3Module),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Promo Ukr',
					},
				},
			},
			{
				path: 'promo_eng',
				loadChildren: () =>
					import('./pages/client-promo-eng/client-promo-eng.module').then(
						(m) => m.ClientPromoEngModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Promo Eng',
					},
				},
			},
			{
				path: 'promo_tr',
				loadChildren: () =>
					import('./pages/client-promo-tr/client-promo-tr.module').then(
						(m) => m.ClientPromoTrModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Promo Tr',
					},
				},
			},
			{
				path: 'promo_esp',
				loadChildren: () =>
					import('./pages/client-promo-esp/client-promo-esp.module').then(
						(m) => m.ClientPromoEspModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Promo Tr',
					},
				},
			},
			{
				path: 'promo_fr',
				loadChildren: () =>
					import('./pages/client-promo-fr/client-promo-fr.module').then(
						(m) => m.ClientPromoFrModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Promo Tr',
					},
				},
			},
			{
				path: 'promo_vt',
				loadChildren: () =>
					import('./pages/client-promo-vt/client-promo-vt.module').then(
						(m) => m.ClientPromoVtModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Promo Tr',
					},
				},
			},
			{
				path: 'promo_pt',
				loadChildren: () =>
					import('./pages/client-promo-pt/client-promo-pt.module').then(
						(m) => m.ClientPromoPtModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Promo Tr',
					},
				},
			},
			{
				path: 'promo_in',
				loadChildren: () =>
					import('./pages/client-promo-in/client-promo-in.module').then(
						(m) => m.ClientPromoInModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Promo Tr',
					},
				},
			},
			{
				path: 'promo_ar',
				loadChildren: () =>
					import('./pages/client-promo-ar/client-promo-ar.module').then(
						(m) => m.ClientPromoArModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Promo Tr',
					},
				},
			},
			{
				path: 'privacy-policy',
				loadChildren: () =>
					import(
						'./pages/client-privacy-policy/client-privacy-policy.module'
					).then((m) => m.ClientPrivacyPolicyModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Privacy Policy',
					},
				},
			},
			{
				path: 'terms-and-conditions',
				loadChildren: () =>
					import(
						'./pages/client-terms-and-conditions/client-terms-and-conditions.module'
					).then((m) => m.ClientTermsAndConditionsModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Terms And Conditions',
					},
				},
			},
			{
				path: 'contact-us',
				canActivate: [DefaultRoleGuard],
				loadChildren: () =>
					import('./pages/client-contact-us/client-contact-us.module').then(
						(m) => m.ClientContactUsModule
					),
				data: {
					meta: {
						title: 'B2B Contact - contact us to know more information',
						description: 'Globy - Contact Us',
					},
				},
			},
			{
				path: 'cookie-policy',
				loadChildren: () =>
					import(
						'./pages/client-cookie-policy/client-cookie-policy.module'
					).then((m) => m.ClientCookiePolicyModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Cookie Policy',
					},
				},
			},
			{
				path: 'legal-help',
				canActivate: [AuthGuard],
				loadChildren: () =>
					import('./pages/client-legal-help/client-legal-help.module').then(
						(m) => m.ClientLegalHelpModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Legal Help',
					},
				},
			},
			{
				path: 'chats/:id',
				canActivate: [ChatGuard],
				loadChildren: () =>
					import('./pages/client-chat/client-chat.module').then(
						(m) => m.ClientChatModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Chat',
					},
				},
			},
			{
				path: 'unclaimed-cargo',
				canActivate: [AuthGuard],
				loadChildren: () =>
					import(
						'./pages/client-unclaimed-cargo/client-unclaimed-cargo.module'
					).then((m) => m.ClientUnclaimedCargoModule),
			},
			{
				path: 'offers/:id',
				canActivate: [DefaultRoleGuard],
				// canActivate: [AuthGuard],
				loadChildren: () =>
					import('./pages/client-offer/client-offer.module').then(
						(m) => m.ClientOfferModule
					),
			},
			{
				path: 'annual-payment',
				canActivate: [AuthGuard],
				loadChildren: () =>
					import(
						'./pages/client-annual-payment/client-annual-payment.module'
					).then((m) => m.ClientAnnualPaymentModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Payment Details',
					},
				},
			},
			{
				path: 'tradebid-billing/:quotes',
				canActivate: [AuthGuard],
				loadChildren: () =>
					import(
						'./pages/client-tradebid-billing/client-tradebid-billing.module'
					).then((m) => m.ClientTradebidBillingModule),
			},
			// // {
			// // 	path: "buy-offer-39",
			// // 	canActivate: [AuthGuard],
			// // 	loadChildren: () =>
			// // 		import("./pages/client-annual-payment/client-annual-payment.module").then((m) => m.ClientAnnualPaymentModule),
			// // 	data: {
			// // 		meta: {
			// // 			title: "Globy - Buy and Sell B2B Cargo with Discount!",
			// // 			description: "Globy - Payment Details",
			// // 		},
			// // 	},
			// // },
			// // {
			// // 	path: "pricing",
			// // 	loadChildren: () => import("./pages/client-pricing/client-pricing.module").then((m) => m.ClientPricingModule),
			// // 	data: {
			// // 		meta: {
			// // 			title: "Globy - Buy and Sell B2B Cargo with Discount!",
			// // 			description: "Globy - Pricing",
			// // 		},
			// // 	},
			// // },
			// // {
			// // 	path: "trade-wiki",
			// // 	canActivate: [DefaultRoleGuard],
			// // 	loadChildren: () =>
			// // 		import("./pages/client-trading-wiki/client-trading-wiki.module").then((m) => m.ClientTradingWikiModule),
			// // 	data: {
			// // 		meta: {
			// // 			title: "Globy - Buy and Sell B2B Cargo with Discount!",
			// // 			description: "Globy - Trade Wiki",
			// // 		},
			// // 	},
			// // },
			// // {
			// // 	path: "trade-wiki/:id",
			// // 	canActivate: [DefaultRoleGuard],
			// // 	loadChildren: () =>
			// // 		import("./pages/client-trading-wiki-article/client-trading-wiki-article.module").then(
			// // 			(m) => m.ClientTradingWikiArticleModule
			// // 		),
			// // 	data: {
			// // 		meta: {
			// // 			title: "Globy - Buy and Sell B2B Cargo with Discount!",
			// // 			description: "Globy - Trading Wiki",
			// // 		},
			// // 	},
			// // },
			{
				path: 'blog',
				canActivate: [DefaultRoleGuard],
				loadChildren: () =>
					import('./pages/client-blog/client-blog.module').then(
						(m) => m.ClientBlogModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Trading Wiki',
					},
				},
			},
			{
				path: 'blog/:id',
				canActivate: [DefaultRoleGuard],
				loadChildren: () =>
					import('./pages/client-blog-article/client-blog-article.module').then(
						(m) => m.ClientBlogWikiArticleModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Trading Wiki',
					},
				},
			},
			{
				path: 'profile',
				canActivate: [AuthGuard],
				loadChildren: () =>
					import('./pages/client-profile/client-profile.module').then(
						(m) => m.ClientProfileModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Profile',
					},
				},
			},
			{
				path: 'offer',
				canActivate: [AuthGuard, CompanyInformationGuard, BuyerGuard],
				loadChildren: () =>
					import(
						'./pages/client-profile/pages/client-profile-add-offer/client-profile-add-offer.module'
					).then((m) => m.ClientProfileAddOfferModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Add Offer',
					},
				},
			},
			{
				path: 'reset-password/:id',
				canActivate: [DefaultRoleGuard],
				loadChildren: () =>
					import(
						'./pages/client-reset-password/client-reset-password.module'
					).then((m) => m.ClientResetPasswordModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Reset Password',
					},
				},
			},
			{
				path: 'google-registration-complete',
				loadChildren: () =>
					import(
						'./pages/client-google-complete/client-google-complete.module'
					).then((m) => m.ClientGoogleCompleteModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Reset Password',
					},
				},
			},
			{
				path: 'linkedin-registration-complete',
				loadChildren: () =>
					import(
						'./pages/client-google-complete/client-google-complete.module'
					).then((m) => m.ClientGoogleCompleteModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Reset Password',
					},
				},
			},
			{
				path: 'registration-complete',
				loadChildren: () =>
					import(
						'./pages/client-registration-complete/client-registration-complete.module'
					).then((m) => m.ClientRegistrationCompleteModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Reset Password',
					},
				},
			},
			{
				path: 'account-not-registered',
				loadChildren: () =>
					import(
						'./pages/client-account-not-registered/client-account-not-registered-complete.module'
					).then((m) => m.ClientAccountNotRegistereModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Reset Password',
					},
				},
			},
			{
				path: 'email-verify',
				loadChildren: () =>
					import('./pages/client-email-verify/client-email-verify.module').then(
						(m) => m.ClientEmailVerifyModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Reset Password',
					},
				},
			},
			{
				path: 'annual-succeeded',
				loadChildren: () =>
					import(
						'./pages/client-annual-succeeded/client-annual-succeeded.module'
					).then((m) => m.ClientAnnualSucceededModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Annual Succeeded',
					},
				},
			},
			{
				path: 'annual-failed',
				loadChildren: () =>
					import(
						'./pages/client-annual-failed/client-annual-failed.module'
					).then((m) => m.ClientAnnualFailedModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Payment Failed',
					},
				},
			},
			{
				path: 'sourcing-request',
				loadChildren: () =>
					import(
						'./pages/client-sourcing-request/client-sourcing-request.module'
					).then((m) => m.ClientSourcingRequestModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Sourcing Request',
					},
				},
			},
			{
				path: 'b2bmarket',
				loadChildren: () =>
					import('./pages/client-marketplace/client-marketplace.module').then(
						(m) => m.ClientMarketplaceModule
					),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Marketplace',
					},
					breadcrumbs: [{ label: 'Home', url: '/' }],
				},
			},
			{
				path: 'quick-logistics',
				loadChildren: () =>
					import('./pages/client-logistic/client-logistic.module').then(
						(m) => m.ClientLogisticModule
					),
			},
			{
				path: 'about-us',
				loadChildren: () =>
					import('./pages/client-about-us/client-about-us.module').then(
						(m) => m.ClientAboutUsModule
					),
			},
			{
				path: 'not-found',
				loadChildren: () =>
					import(
						'../client/pages/client-not-found/client-not-found.module'
					).then((m) => m.ClientNotFoundModule),
				data: {
					meta: {
						title: 'Globy - Buy and Sell B2B Cargo with Discount!',
						description: 'Globy - Not Found',
					},
				},
			},
			{
				path: '**',
				pathMatch: 'full',
				redirectTo: 'not-found',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ClientRoutingModule {}
