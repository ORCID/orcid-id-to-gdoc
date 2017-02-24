module.exports = config = {
  //ORCID API config
  CLIENT_ID: 'APP-B9T4095P7U7W76X5',
  CLIENT_SECRET: 'f6677b74-8f3f-4204-ad7d-55e449eac609',
  REDIRECT_URI: 'https://localhost:8443/redirect-uri',
  ORCID_URL: 'https://sandbox.orcid.org',
  GOOGLE_DOC_KEY: '1Xm-mmMthNuE0H2hjc2x5tbfAJSDBgp7Gv0ErOeBZiYc',//Key from Google spreadsheet URL https://docs.google.com/a/orcid.org/spreadsheets/d/1Xm-mmMthNuE0H2hjc2x5tbfAJSDBgp7Gv0ErOeBZiYc/edit?usp=sharing
  //Server SSL config
  FORCE_SSL: 'true', // must be 'true' or 'false'
  LETSENCRYPT_ISSUES_EMAIL: 'orcid-id-to-gdoc@mailinator.com', // Where to email when certificates expire.
  AUTO_SNI_DEBUG: 'true', // Add console messages and uses staging LetsEncrypt server. (Disable in production)
  DOMAINS: 'localhost,www.localhost', // List of accepted domain names. (You can use nested arrays to register bundles with LE).
  PORT_HTTP: '8080', // Optionally override the default http port.
  PORT_HTTPS: '8443' // Optionally override the default https port.
}

// Environment variables overrides
for (key in config)
	if (process.env[key] != undefined)
		config[key] = process.env[key];
