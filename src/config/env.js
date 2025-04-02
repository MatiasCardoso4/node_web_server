import {config} from 'dotenv'
import env from 'env-var'

config()

const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  PUBLIC_PATH: env.get("PUBLIC_PATH").default("public").asString(),
};

export default envs
