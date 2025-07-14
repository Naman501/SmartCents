import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from './schema'

const sql = neon(
    "postgresql://neondb_owner:npg_hMusPq3cR4ZU@ep-blue-dust-aembgewd.c-2.us-east-2.aws.neon.tech/test?sslmode=require&channel_binding=require"

    // process.env.DATABASE_URL,
)

export const db = drizzle(sql , {schema})