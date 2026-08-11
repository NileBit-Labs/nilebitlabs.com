# Production configuration

## Contact form

Configure the six `CONTACT_*` variables documented in `.env.example`. The sending address must be accepted by the configured SMTP provider. Test delivery, reply-to behavior, and failure responses in the production environment.

The application applies a small in-memory request limit and a honeypot. In-memory limits are per running instance and are not sufficient for sustained or distributed abuse. Enable rate limiting, bot management, or a managed challenge at the hosting/CDN layer before directing significant traffic to the form.

## NileBot

NileBot works in deterministic fallback mode without any AI configuration. Fallback mode answers from the typed NileBit Labs knowledge layer and supports the guided project-discovery handoff.

To enable production AI mode, configure:

- `NILEBOT_API_URL`: an HTTPS chat-completions-compatible provider endpoint.
- `NILEBOT_API_KEY`: the server-only provider credential.
- `NILEBOT_MODEL`: the provider model identifier.

The API route uses a server-owned prompt and does not expose tools, shell access, database writes, or client-supplied system instructions. It validates roles, message sizes, conversation length, internal links, and provider output. Its in-memory rate limit is only a first layer; add distributed provider/CDN protection for production traffic.

Conversation history is stored in browser `sessionStorage` and is not persisted by the NileBit Labs server. In AI mode, submitted messages are sent to the configured external provider. Confirm the provider's data-retention terms and the published Privacy Policy before enabling a key.

## Release checks

- Confirm `https://nilebitlabs.com` is attached to the production deployment.
- Verify `/robots.txt` and `/sitemap.xml` after deployment.
- Confirm the organization address, email, phone number, business hours, and legal effective dates.
- Review dependency alerts in the GitHub security dashboard against the deployed lockfile.
