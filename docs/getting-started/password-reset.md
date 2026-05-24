---
title: Password Reset
sidebar_label: Password Reset
sidebar_position: 4
---

# Password Reset (Self-Hosted)

:::note
This feature is available in Donetick **v0.1.76** and later.
:::

When self-hosting Donetick without email configured, users cannot receive password reset emails. The `log_raw_url` option solves this by printing the password reset link directly to the server console instead.

## How It Works

When a user requests a password reset and email delivery fails, Donetick will log the reset URL to the server logs if `log_raw_url` is enabled. You can then retrieve the link from the logs and share it with the user manually.

The log output looks like this:

```
=== PASSWORD RESET LINK ===
User: user@example.com
URL:  https://your-instance.com/password/update?c=...
==================================================
```

## Configuration

Add `log_raw_url: true` under the `email` section in your config file:

```yaml
email:
  host:
  port:
  key:
  email:
  user:
  appHost: https://your-instance.com
  log_raw_url: true # log password reset URL to console (useful when email is not configured)
```

Or via environment variable:

```
DT_EMAIL_LOG_RAW_URL=true
```

:::warning Security Note
`log_raw_url` is intended for self-hosted instances without email configured. The reset link grants direct access to change a user's password — treat it as sensitive. Avoid enabling this in production environments where email is working.
:::

## Steps to Reset a User's Password

1. Ensure `log_raw_url: true` is set in your config and `email.appHost` points to your instance URL.
2. Have the user go to the login page and click **Forgot Password**, then enter their email.
3. Open your server logs and look for the `=== PASSWORD RESET LINK ===` block.
4. Copy the URL and send it to the user via a secure channel.
5. The user opens the link and sets a new password.

## appHost

The `appHost` value is used to construct the reset link. Make sure it matches your publicly accessible instance URL:

```yaml
email:
  appHost: https://your-instance.com
```

If `appHost` is not set, the generated URL will be incomplete and unusable.
