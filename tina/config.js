import { defineConfig } from "tinacms";
import advisoryTeam from "./collections/advisory-team";
import faq from "./collections/faq";
import config from "./collections/global/config";
import menu from "./collections/global/menu";
import goSupernova from "./collections/go-supernova";
import howItWorks from "./collections/how-it-works";
import index from "./collections/index";
import joinCommunity from "./collections/join-community";
import pages from "./collections/pages";
import superstars from "./collections/superstars";
import testimonials from "./collections/testimonials";
import topFounders from "./collections/top-founders";

export default defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD || // Netlify branch env
    "main", // default branch
  token: process.env.TINA_TOKEN,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images",
    },
  },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  schema: {
    collections: [
      index,
      pages,
      advisoryTeam,
      faq,
      goSupernova,
      howItWorks,
      joinCommunity,
      superstars,
      testimonials,
      topFounders,
      config,
      menu,
    ],
  },
});
