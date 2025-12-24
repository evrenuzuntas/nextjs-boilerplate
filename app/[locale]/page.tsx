"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Home() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* Dil Değiştirme Bölümü */}
        <div className="mb-8 flex w-full items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{t("currentLanguage")}</p>
          <div className="flex gap-2">
            <Link href="/" locale="tr" className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${locale === "tr" ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : "bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"}`}>
              TR
            </Link>
            <Link href="/" locale="en" className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${locale === "en" ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : "bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"}`}>
              EN
            </Link>
            <Link href="/" locale="fr" className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${locale === "fr" ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : "bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"}`}>
              FR
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
