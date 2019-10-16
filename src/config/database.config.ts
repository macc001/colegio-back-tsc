import { Pool } from "pg";

export async function connect(): Promise<Pool> {
  const connection = await new Pool({
    host: "tuffi.db.elephantsql.com",
    user: "ppntmdwi",
    password: "mQqihcmrX5MfAG6vsKwIxBUvbCn1IpAM",
    database: "ppntmdwi",
    port: 5432
  });
  return connection;
}
