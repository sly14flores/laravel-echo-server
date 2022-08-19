require('dotenv').config()

const {
	devMode,
	authHost,
	authEndpoint,
	protocol,
	port,
	database,
	redisHost,
	redisPort,
	redisPassword,
} = process.env;

require('laravel-echo-server').run({
  authHost,
  authEndpoint,
	protocol,
	host: null,
	port,
    devMode,
    database,
    databaseConfig: {
      redis: {
        host: redisHost,
        port: redisPort,
				password: redisPassword
      }
    },
	apiOriginAllow: {
		allowCors: true,
		allowOrigin: "*",
		allowMethods: "GET, POST",
		allowHeaders: "Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization, X-CSRF-TOKEN, X-Socket-Id"
	}
})