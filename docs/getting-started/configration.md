---
title: Configuration
sidebar_label: Configuration
sidebar_position: 2
---

# Configuration

Donetick uses a YAML-based configuration system managed through environment variables and a `config.yaml` file. Below is a breakdown of the available configuration options.



### Configuration via Environment Variables:

- Environment variables can be used to override configuration values. 
- Environment variables should be prefixed with `DT_` followed by the configuration key in uppercase.
- For example, to override the `server.port` configuration, set the environment variable `DT_SERVER_PORT`. or oauth2.client_id to `DT_OAUTH2_CLIENT_ID`



## General Configuration

| Key                         | Type    | Description |
|-----------------------------|---------|-------------|
| `name`                      | string  | The name of the Donetick instance. |
| `is_done_tick_dot_com`       | bool    | Specifies if this is the official Donetick instance. |
| `is_user_creation_disabled`  | bool    | If `true`, disables new user registration. |

## Authentication

### JWT Configuration

| Key               | Type    | Description |
|-------------------|---------|-------------|
| `jwt.secret`      | string  | Secret key for JWT authentication. |
| `jwt.session_time`| duration | Duration of a session before expiration. |
| `jwt.max_refresh` | duration | Maximum duration a session can be refreshed. |

## Database Configuration

| Key               | Type    | Description |
|-------------------|---------|-------------|
| `database.type`   | string  | Database type (`sqlite`, `postgres`, etc.). |
| `database.host`   | string  | Database host address. |
| `database.port`   | int     | Database port. |
| `database.user`   | string  | Database username. |
| `database.password` | string | Database password. |
| `database.name`   | string  | Database name. |
| `database.migration` | bool  | If `true`, enables automatic migrations. |
| `database.logger` | int     | Log level for the database. |

## Server Configuration

| Key                     | Type      | Description |
|-------------------------|-----------|-------------|
| `server.port`           | int       | Server port. |
| `server.rate_period`    | duration  | Time window for rate limiting. |
| `server.rate_limit`     | int       | Maximum number of requests per rate period. |
| `server.read_timeout`   | duration  | Read timeout duration. |
| `server.write_timeout`  | duration  | Write timeout duration. |
| `server.cors_allow_origins` | array | List of allowed CORS origins. |
| `server.serve_frontend` | bool      | If `true`, serves frontend assets. |

## Notification Configuration

### Telegram

| Key                 | Type    | Description |
|---------------------|---------|-------------|
| `telegram.token`   | string  | Telegram bot token. |

### Pushover

| Key                 | Type    | Description |
|---------------------|---------|-------------|
| `pushover.token`   | string  | Pushover API token. |

## Scheduler Jobs

| Key                  | Type      | Description |
|----------------------|-----------|-------------|
| `scheduler_jobs.due_job`     | duration | Frequency for running due task jobs. |
| `scheduler_jobs.overdue_job` | duration | Frequency for running overdue task jobs. |
| `scheduler_jobs.pre_due_job` | duration | Frequency for running pre-due task jobs. |

## Stripe Configuration

| Key                   | Type    | Description |
|-----------------------|---------|-------------|
| `stripe.api_key`      | string  | Stripe API key. |
| `stripe.whitelisted_ips` | array | List of allowed IPs for Stripe. |
| `stripe.prices`       | array   | Stripe price configurations. |
| `stripe.success_url`  | string  | URL to redirect after a successful payment. |
| `stripe.cancel_url`   | string  | URL to redirect after a canceled payment. |

## Email Configuration

| Key          | Type    | Description |
|-------------|---------|-------------|
| `email.email`  | string  | Email sender address. |
| `email.key`    | string  | API key for email sending. |
| `email.host`   | string  | SMTP host. |
| `email.port`   | int     | SMTP port. |
| `email.appHost`| string  | Application host for email-related links. |

## OAuth2 Configuration

| Key               | Type    | Description |
|-------------------|---------|-------------|
| `oauth2.client_id` | string  | OAuth2 client ID. |
| `oauth2.client_secret` | string  | OAuth2 client secret. |
| `oauth2.redirect_url`  | string  | OAuth2 redirect URL. |
| `oauth2.scopes`        | array   | List of OAuth2 scopes. |
| `oauth2.auth_url`      | string  | Authorization URL. |
| `oauth2.token_url`     | string  | Token endpoint URL. |
| `oauth2.user_info_url` | string  | User info endpoint URL. |
| `oauth2.name`          | string  | OAuth2 provider name. |

## Webhook Configuration

| Key               | Type      | Description |
|-------------------|-----------|-------------|
| `webhook.timeout` | duration  | Timeout for webhook requests. |
| `webhook.queue_size` | int    | Size of the webhook processing queue. |

## Environment Variables

In addition to the configuration file, Donetick can be configured using environment variables:

| Environment Variable             | Description |
|-----------------------------------|-------------|
| `DONETICK_TELEGRAM_TOKEN`        | Overrides the Telegram bot token. |
| `DONETICK_PUSHOVER_TOKEN`        | Overrides the Pushover token. |
| `DONETICK_DISABLE_SIGNUP`        | If `true`, disables user signups. |
| `DT_ENV`                         | Defines the configuration environment (`local`, `prod`, `selfhosted`). |

## Loading Configuration

Donetick loads its configuration based on the `DT_ENV` environment variable:

- `local`: Uses `local.yaml` mainly for local development
- `selfhosted`: Uses `selfhosted.yaml` for self-hosted instances and homeassistant addons as well
- Default: Falls back to `local.yaml`

The configuration is then processed by `viper`, with environment variable overrides applied.

---

This document provides a high-level overview of Donetick's configuration. For specific setup instructions, refer to the [installation guide](./getting-started.md).
