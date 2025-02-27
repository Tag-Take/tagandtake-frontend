export const API_ROUTES = {
  AUTH: {
    LOGIN: `login/`,
    LOGOUT: `logout/`,
    REFRESH: `login/refresh/`,
    STATUS: `auth-status/`,
  },
  ACTIVATION: {
    ACTIVATE: (uidb64: string, token: string) =>
      `activate/${uidb64}/${token}/`,
    RESEND: `activate/resend/`,
  },
  PASSWORD: {
    RESET: `password-reset/`,
    RESET_CONFIRM: `password-reset/confirm/`,
  },
  SIGNUP: {
    MEMBER: `signup/member/`,
    STORE: `signup/store/`,
  },
  MEMBERS: {
    DELETE_ACCOUNT: `member/account/delete/`,
    PROFILE: `members/me/profile/`,
    NOTIFICATION_SETTINGS: `members/me/notification-settings/`,
    PROFILE_PHOTO: `members/me/profile-photo/`,
    ITEMS: {
      LIST: `members/me/items/`,
      CREATE: `members/me/items/`,
      DETAILS: (id: number) =>
        `members/me/items/${id}/`,
      UPDATE: (id: number) =>
        `members/me/items/${id}/`,
      DELETE: (id: number) =>
        `members/me/items/${id}/`,
    },
    LISTINGS: {
      CREATE: `members/me/listings/`,
      DETAILS: (id: number) => `listings/${id}/`,
      CHECK_ROLE: (id: number) =>
        `listings/${id}/check-role/`,
    },
    ITEM_LISTINGS: `members/me/items-listings/`,
    RECALLED_LISTINGS: {
      GENERATE_COLLECTION_PIN: (id: number) =>
        `members/me/recalled-listings/${id}/generate-collection-pin/`,
    },
  },
  STORES: {
    DELETE_ACCOUNT: `store/account/delete/`,
    PROFILE: `stores/me/profile/`,
    NOTIFICATION_SETTINGS: `stores/me/notification-settings/`,
    PROFILE_PHOTO: `stores/me/profile-photo/`,
    PIN: `stores/me/pin/`,
    CATEGORIES: `stores/me/categories/`,
    CONDITIONS: `stores/me/conditions/`,
    LISTINGS: {
      LIST: `stores/me/listings/`,
      DELIST: (id: number) =>
        `stores/me/listings/${id}/delist/`,
      RECALL: (id: number) =>
        `stores/me/listings/${id}/recall/`,
      REPLACE_TAG: (id: number) =>
        `stores/me/listings/${id}/replace-tag/`,
    },
    RECALLED_LISTINGS: {
      LIST: `stores/me/recalled-listings/`,
      COLLECT: (id: number) =>
        `stores/me/recalled-listings/${id}/collect/`,
    },
  },
  CHECKOUT: {
    ITEM: `checkout/item/`,
    SESSION_STATUS: `checkout/session-status/`,
    SUPPLIES: `checkout/supplies/`,
  },
  ITEMS: {
    CATEGORIES: `items/categories/`,
    CONDITIONS: `items/conditions/`,
  },
  PAYMENT: {
    ACCOUNTS: {
      MANAGEMENT: `payment-accounts/management/`,
      NOTIFICATIONS: `payment-accounts/notifications/`,
      ONBOARDING: `payment-accounts/onboarding/`,
      PAYMENTS: `payment-accounts/payments/`,
      PAYOUTS: `payment-accounts/payouts/`,
      STATUS: `payment-accounts/status/`,
    },
  },
  STRIPE: {
    CONNECT_WEBHOOK: `stripe/connect-webhook/`,
    PLATFORM_WEBHOOK: `stripe/platform-webhook/`,
  },
};
