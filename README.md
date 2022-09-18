## Authentication

For authentication, a SSO server managing users, clients (front-end and back-end) and resources is used to connect the app to others. 
The SSO server is based on Keycloak and the development base url is currently [available here](https://auth.disdicilo.it/auth/)

The public client specifications have been set and are available in this repo in the main branch at [keycloak.json](https://github.com/wankenooobi/hostinza-next/blob/main/keycloak.json)

for next.js integration with keycloak.json the following example might prove useful

[react-next Keycloak](https://www.npmjs.com/package/@react-keycloak/ssr#nextjs)

[git example](https://github.com/khanisak/nextjs-keycloak-authentication-example)

the application should redirect to [keycloak base url](https://auth.disdicilo.it/auth) and on user authentication, keycloak will redirect back to this client.

In order to allow you to work with ease, an automatic deployment with Vercel.com has been configured, and the redirect uri has been configured in Keycloak. 

Keycloak auth endpoints are also listed [here](https://github.com/marcospereirampj/python-keycloak/blob/master/src/keycloak/urls_patterns.py)

Additional endpoints are available [here](https://api-host.disdicilo.it/api/swagger/) and will be explained depending your task.

using next-auth.js 
[keycloak can be used with next-auth.js](https://next-auth.js.org/providers/keycloak)
[next-auth.js](https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/providers/keycloak.ts)

## Interesting fact.
if you are logged in this project with a particular user, you can see the user's account info at [this link](https://auth.disdicilo.it/auth/realms/deploy/account)

## Analytics

https://developer.matomo.org/guides/spa-tracking
[Analytics next.js url](https://www.npmjs.com/package/@socialgouv/matomo-next)
Analytics script for head tag
```
<script>
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//analytica.disdicilo.it/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
```

![image](https://user-images.githubusercontent.com/94698774/185112896-c77d8a4e-ba72-4658-8c6c-79af92890eda.png)
![image](https://user-images.githubusercontent.com/94698774/185113073-89250116-dd2a-4cfa-9504-ebf372ccdd09.png)



## warning
Warning: For production Image Optimization with Next.js, the optional 'sharp' package is strongly recommended Run 'yarn add sharp', and Next.js will use it automatically for Image Optimization.
nextjs_1  | Read more: https://nextjs.org/docs/messages/sharp-missing-in-production

## Content
follow this awesome [project](https://github.com/styxlab/next-cms-ghost)
Deploy 
```
CMS_GHOST_API_URL=http://localhost:2368
CMS_GHOST_API_KEY=9fccdb0e4ea5b572e2e5b92942
```

## Locales

When creating new pages/components, text should be wrapped by {t("example test")} for locales translation. 
```
const { t } = useTranslation("common");
```
will import the translation from common.json (similarly one can define a page translation rule like home.json, about.json..).
The words “example test” should be placed then in locales/en.json to allow translation to other languages at compilation time.
[Here an example](https://github.com/wankenooobi/hostinza-next/blob/main/locales/en/common.json)

##  SMTP

SMTP emulation can be done through docker with the mailhog container. 
Below the docker-compose
```
version: "3.3"

services:
  nextjs:
    ports:
      - 3000:3000
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - .:/usr/src/app
      #- /usr/src/app/node_modules
      #- /usr/src/app/.next
    env_file:
      - .env
  mailhog:
      image: mailhog/mailhog
      container_name: 'mailhog'
      ports:
        - "1025:1025"
        - "8025:8025"
```
The application is already configured to use as SMTP host Mailhog with port 1025. 
Notice Docker has its own internal DNS so if you are running the application on your host, you will not be able to
resolve to the mailhog container. You have 2 options

### 1. Docker
at any change you rerun the build with no-cache
```
docker-compose build --no-cache
```
then run the image
```
docker-compose up -d 
```
### 2. locally on your host
I think the easiest way for you is to install mailhog for your OS. 
The easiest solution is to directly install this
https://github.com/mailhog/MailHog/releases
and make sure you disable ssl and tls in nodemailer parameters.




## Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

