#!/usr/bin/env zx

import { existsSync, writeFileSync } from "fs";
import path from "path";

if (typeof process.env.SKIP_DOCKER === "undefined") {
  const DATABASE_URL = process.env.DATABASE_URL ?? "postgresql://root:root@localhost:5432/mydatabase?schema=public";
  const NEXTAUTH_SECRET = (process.env.NEXTAUTH_SECRET ?? (await quiet($`openssl  rand -base64 32`)))
    .toString()
    .replace("\n", "");
  const NEXTAUTH_URL = process.env.NEXTAUTH_URL ?? "http://localhost:3000/";

  const checkEnvFiles = {
    ".env": `DATABASE_URL="${DATABASE_URL}"\nNEXTAUTH_SECRET="${NEXTAUTH_SECRET}"\nNEXTAUTH_URL="${NEXTAUTH_URL}"`,
    ".env.local": `POSTGRES_USER="root"\nPOSTGRES_PASSWORD="root"\nPOSTGRES_DB="mydatabase"`,
  };

  Object.entries(checkEnvFiles).forEach(([f, value]) => {
    if (!existsSync(path.join(process.cwd(), f))) {
      writeFileSync(path.join(process.cwd(), f), value);
    }
  });
  $`docker compose up -d`;
}
