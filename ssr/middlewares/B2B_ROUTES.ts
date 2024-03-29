import { isValidPromoLang } from "./idValidators/promoLang.validator";
import { isValidMarketProductName } from "./idValidators/productName.validator";
import { isValidCompanyName } from "./idValidators/companyName.validator";
import { isValidBlogArticle } from "./idValidators/blogArticle.validator";
import { isValidRootCategory } from "./idValidators/rootCategory.validator";
import { isValidChildCategory } from "./idValidators/childCategory.validator";
import { isValidBlogAuthor } from "./idValidators/blogAuthor.validator";

type ValidatorFunction = (value: string) => Promise<boolean>;

interface BasePath {
	nestedPaths?: PathObject;
}

interface PathWithValidator extends BasePath {
	hasValidator: true;
	validator: ValidatorFunction;
}

interface PathWithoutValidator extends BasePath {
	hasValidator?: false;
}

export type PathObject = { [key: string]: PathWithValidator | PathWithoutValidator };


export const B2B_ROUTES: PathObject = {
	'': {},
	'auth': {
		nestedPaths: {
			'confirm-email': {},
			'log-in': {},
			'register': {},
			'register-credentials': {},
			'register-individual-account': {},
			'register-google-account': {},
			'register-linkedin-account': {},
			'google-sign-in-success': {},
			'google': {
				nestedPaths: {
					':id': {}
				}
			}
		}
	},
	'market-promotion': {
		nestedPaths: {
			':lang': {
				hasValidator: true,
				validator: isValidPromoLang,
			}
		}
	},
	'market-promo': {
		nestedPaths: {
			':lang': {
				hasValidator: true,
				validator: isValidPromoLang
			},
		}
	},
	'email-confirmation': {
		nestedPaths: {
			':id': {}
		}
	},
	'how-it-works': {},
	'promo_rus': {},
	'promo_ukr': {},
	'promo_eng': {},
	'promo_tr': {},
	'promo_esp': {},
	'promo_fr': {},
	'promo_vt': {},
	'promo_pt': {},
	'promo_in': {},
	'promo_ar': {},
	'privacy-policy': {},
	'terms-and-conditions': {},
	'contact-us': {},
	'cookie-policy': {},
	'legal-help': {},
	'chats': {
		nestedPaths: {
			':id': {}
		}
	},
	'unclaimed-cargo': {},
	'offers': {
		nestedPaths: {
			':id': {}
		}
	},
	'annual-payment': {},
	'tradebid-billing': {
		nestedPaths: {
			':quotes': {}
		}
	},
	'blog': {
		nestedPaths: {
			':id': {
				hasValidator: true,
				validator: isValidBlogArticle,
				nestedPaths: {
					':id': {
						hasValidator: true,
						validator: isValidBlogAuthor,
					}
				}
			}
		}
	},
	'profile': {
		nestedPaths: {
			'your-account': {
				nestedPaths: {
					'settings': {
						nestedPaths: {
							'following-products': {}
						}
					},
					'company-information': {},
					'billing': {}
				}
			},
			'your-workspace': {
				nestedPaths: {
					'sourcing-request': {
						nestedPaths: {
							'my-rfq': {
								nestedPaths: {
									chat: {
										nestedPaths: {
											':id': {}
										}
									},
									'change-rfq': {
										nestedPaths: {
											':id': {}
										}
									}
								}
							},
							'my-quotation': {
								nestedPaths: {
									chat: {
										nestedPaths: {
											':id': {}
										}
									},
								}
							}
						}
					},
					'b2bmarket': {
						nestedPaths: {
							'edit': {
								nestedPaths: {
									':id': {}
								}
							},
							'chat': {
								nestedPaths: {
									':id': {}
								}
							},
						}
					},
					'unclaimed-cargo': {}
				}
			},
			'my-offers': {
				nestedPaths: {
					':id': {}
				}
			}
		}
	},
	'offer': {},
	'reset-password': {
		nestedPaths: {
			':id': {}
		}
	},
	'google-registration-complete': {},
	'linkedin-registration-complete': {},
	'registration-complete': {},
	'account-not-registered': {},
	'email-verify': {},
	'annual-succeeded': {},
	'annual-failed': {},
	'sourcing-request': {
		nestedPaths: {
			'add-rfq': {},
			listing: {
				nestedPaths: {
					':id': {}
				}
			},
			quotation: {
				nestedPaths: {
					':id': {}
				}
			},
			'company-information': {}
		}
	},
	'b2bmarket': {
		nestedPaths: {
			':id': {
				hasValidator: true,
				validator: isValidRootCategory,
			},
			listing: {
				nestedPaths: {
					':id': {
						hasValidator: true,
						validator: isValidRootCategory,
						nestedPaths: {
							':id': {
								hasValidator: true,
								validator: isValidChildCategory,
							}
						}
					},
					products: {
						nestedPaths: {
							':id': {
								hasValidator: true,
								validator: isValidMarketProductName
							}
						}
					},
				}
			},
			'supplier-listing': {
				nestedPaths: {
					':id': {}
				}
			},
			product: {
				nestedPaths: {
					':id': {}
				}
			},
			supplier: {
				nestedPaths: {
					':id': {}
				}
			},
			'category-listing': {},
			'company': {
				nestedPaths: {
					':id': {
						hasValidator: true,
						validator: isValidCompanyName
					}
				}
			},
			'product-posting-complete': {},
		}
	},
	'quick-logistics': {},
	'about-us': {},
	'not-found': {},
	'admin': {}
};
