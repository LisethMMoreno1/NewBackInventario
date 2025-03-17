/* istanbul ignore file */
import 'dotenv/config';
import * as joi from 'joi';

/**
 * The environment variables type.
 */
type EnvType = {
  PORT: number;
  DATABASE_URL: string;
  // EMAIL_USER: string;
  // EMAIL_PASSWORD: string;
  // EMAIL_HOST: string;
  // ENVIRONMENT: string;
  // AWS_ACCESS_KEY_ID: string;
  // AWS_SECRET_ACCESS_KEY: string;
  // AWS_BUCKET_ACCESS_KEY: string;
  // REGION_BUCKET: string;
};

/**
 * The environment variables schema.
 */
const envSchema = joi
  .object({
    PORT: joi.number().required(),
    // EMAIL_USER: joi.string().email().required(),
    // EMAIL_PASSWORD: joi.string().required(),
    // EMAIL_HOST: joi.string().required(),
    // ENVIRONMENT: joi.string().required(),
    // AWS_ACCESS_KEY_ID: joi.string().required(),
    // AWS_SECRET_ACCESS_KEY: joi.string().required(),
    // AWS_BUCKET_ACCESS_KEY: joi.string().required(),
    // REGION_BUCKET: joi.string().required(),
  })
  .unknown(true);

/**
 * The environment variables validation result.
 */
const { error, value } = envSchema.validate(process.env);

/**
 * Throws an error if the environment variables are invalid.
 */
if (error) {
  console.log(error, '😶‍🌫️😶‍🌫️😶‍🌫️');
  throw new Error(`Config validation error: ${error.message}`);
}

/**
 * The environment variables.
 */
const envsVars: EnvType = value;

/**
 * The environment variables exports.
 */
export const envs = {
  PORT: envsVars.PORT,
  DATABASE_URL: envsVars.DATABASE_URL,
  JWT_SECRET:
    process.env.JWT_SECRET ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  // EMAIL_USER: envsVars.EMAIL_USER,
  // EMAIL_PASSWORD: envsVars.EMAIL_PASSWORD,
  // EMAIL_HOST: envsVars.EMAIL_HOST,
  // ENVIRONMENT: envsVars.ENVIRONMENT,
  // AWS_ACCESS_KEY_ID: envsVars.AWS_ACCESS_KEY_ID,
  // AWS_SECRET_ACCESS_KEY: envsVars.AWS_SECRET_ACCESS_KEY,
  // AWS_BUCKET_ACCESS_KEY: envsVars.AWS_BUCKET_ACCESS_KEY,
  // REGION_BUCKET: envsVars.REGION_BUCKET,
};
