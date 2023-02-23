const isProd = process.env.NODE_ENV === "production";

const PRODUCTION_BASE = "/tutorify";

const ROUTES = {
  HOME: "/",
  LESSONS: "/lessons",
  FIND: "/find",
  ABOUT: "/about",
};

export default {
  HOME: isProd ? PRODUCTION_BASE : ROUTES.HOME,
  LESSONS: isProd ? PRODUCTION_BASE + ROUTES.LESSONS : ROUTES.LESSONS,
  FIND: isProd ? PRODUCTION_BASE + ROUTES.FIND : ROUTES.FIND,
  ABOUT: isProd ? PRODUCTION_BASE + ROUTES.ABOUT : ROUTES.ABOUT,
};
