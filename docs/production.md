# Production configuration

## Contact form

Configure the six `CONTACT_*` variables documented in `.env.example`. The sending address must be accepted by the configured SMTP provider. Test delivery, reply-to behavior, and failure responses in the production environment.

The application applies a small in-memory request limit and a honeypot. In-memory limits are per running instance and are not sufficient for sustained or distributed abuse. Enable rate limiting, bot management, or a managed challenge at the hosting/CDN layer before directing significant traffic to the form.

## Release checks

- Confirm `https://nilebitlabs.com` is attached to the production deployment.
- Verify `/robots.txt` and `/sitemap.xml` after deployment.
- Confirm the organization address, email, phone number, business hours, and legal effective dates.
- Review dependency alerts in the GitHub security dashboard against the deployed lockfile.
