export const locales = ['en', 'zh', 'ja'] as const;
export type Locale = (typeof locales)[number];