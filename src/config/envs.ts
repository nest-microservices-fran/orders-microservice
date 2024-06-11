import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    PORT: number;
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
})
.unknown(true);
//Se aplica el .unknown(true) porque muchas más variables de etorno en la app

const { error, value } = envsSchema.validate(process.env);

if (error) throw new Error(`Config validation error: ${error.message}`);

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
}