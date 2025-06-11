// src/i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";

import enHome from "./locales/en/homepage.json";
import enNavbar from "./locales/en/navbar.json";
import enLogin from "./locales/en/login.json";
import enProfile from "./locales/en/profile.json";
import enErrors from "./locales/en/errors.json";
import enMembership from "./locales/en/membership.json";

import esHome from "./locales/es/homepage.json";
import esNavbar from "./locales/es/navbar.json";
import esLogin from "./locales/es/login.json";
import esProfile from "./locales/es/profile.json";
import esErrors from "./locales/es/errors.json"
import esMembership from "./locales/es/membership.json"

import frHome from "./locales/fr/homepage.json";
import frNavbar from "./locales/fr/navbar.json";
import frLogin from "./locales/fr/login.json";
import frProfile from "./locales/fr/profile.json";
import frMembership from "./locales/fr/membership.json"
import frErrors from "./locales/fr/errors.json"

import jaHome from "./locales/ja/homepage.json";
import jaNavbar from "./locales/ja/navbar.json";
import jaLogin from "./locales/ja/login.json";
import jaProfile from "./locales/ja/profile.json";
import jaErrors from "./locales/ja/errors.json"
import jaMembership from "./locales/ja/membership.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(I18NextHttpBackend)
  .init({
    resources: {
      en: {
        home: enHome,
        navbar: enNavbar,
        login: enLogin,
        profile: enProfile,
        errors: enErrors,
        membership: enMembership
      },
      es: {
        home: esHome,
        navbar: esNavbar,
        login: esLogin,
        profile: esProfile,
        errors: esErrors,
        membership: esMembership
      },
      fr: {
        home: frHome,
        navbar: frNavbar,
        login: frLogin,
        profile: frProfile,
        errors: frErrors,
        membership: frMembership
      },
      ja: {
        home: jaHome,
        navbar: jaNavbar,
        login: jaLogin,
        profile: jaProfile,
        errors: jaErrors,
        membership: jaMembership
      }
    },
    fallbackLng: "en",
    supportedLngs: ["es","en","fr","ja" ],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
