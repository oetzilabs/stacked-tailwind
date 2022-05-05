This is a starterpack which includes [ReactJs](https://reactjs.org/), [tRPC](https://trpc.io/), [Prisma](https://www.prisma.io/), [NextJs](https://nextjs.org/), [Next-Auth](https://next-auth.js.org/), [Next-SEO](https://github.com/garmeeh/next-seo) & [Chakra-UI](https://chakra-ui.com/).

![Stacked Image](https://i.imgur.com/AWaUxYi.png)



## Requirements

- Please install [Yarn](https://yarnpkg.com/getting-started/install) as the package manager.
- Make sure you have these following Environtment variables set: *(in local development they will be preset during installation)*
  - `NEXTAUTH_URL`
  - `NEXTAUTH_SECRET` Can be made via the command `openssl  rand -base64 32` (generates a random base64 string with the length of 32 characters)
  - `DATABASE_URL`

### Local development

- Make sure [Docker](https://www.docker.com/get-started/) and [Docker-Compose](https://docs.docker.com/compose/install/) is installed.
- Make sure you have these following Environtment variables set: *(in local development they will be preset during installation)*
  - `POSTGRES_USER`
  - `POSTGRES_PASSWORD`
  - `POSTGRES_DB`

## How to use the template?
- Locally
  1. Click the `Use this template` button, create a repository with it.
  2. Clone the repository, and run the command `yarn`.
  3. Setup [tRPC](https://trpc.io/) routes on the [src/server/routers/merge.ts](./src/server/routers/merge.ts) file.
- Via Vercel (creates repository as well) [![Deploy with Vercel](https://i.imgur.com/ASDa2I6.png)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fitsstacked%2Fstacked&env=NEXTAUTH_URL,SKIP_DOCKER,NEXTAUTH_SECRET,DATABASE_URL&demo-title=Web-FullStack-Starter&demo-description=This%20is%20a%20starterpack%20with%20ReactJs%2C%20tRPC%2C%20Prisma%2C%20NextJs%2C%20Next-Auth%2C%20Next-SEO%20%26%20Chakra-UI)
  While setting up the Environment Variables, please set the `SKIP_DOCKER` environment variable to `SKIP_DOCKER=1`. *(This ensures that the setup on Vercel is working via external `DATABASE_URL`)*

Disclaimer: The Mouse Icon belongs to [Phosphor Icon](https://phosphoricons.com/) (MIT).
The Vercel Icon is from their Brand Icon Set.