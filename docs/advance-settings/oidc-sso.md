---
id: openid-connect-setup
title: Single Sign-On(SSO)
sidebar_label: Single Sign-On(SSO)

---

# Setting Up OpenID Connect (OIDC) Authentication in Donetick

Donetick supports OpenID Connect (OIDC) authentication using the OAuth2 protocol. This allows users to log in with identity providers. such as Authentik. 

## Prerequisites

Before setting up OIDC authentication, ensure you have:

1. An OIDC-compliant identity provider (Google, Azure AD, GitHub, Keycloak, etc.).
2. OAuth2 credentials (Client ID and Client Secret).
3. The necessary redirect URI configured in your identity provider.

---

## OAuth2 Configuration

You can configure OIDC authentication via the `config.yaml` file or environment variables.

### YAML Configuration (`config.yaml`)

```yaml
oauth2:
  client_id: "your-client-id"
  client_secret: "your-client-secret"
  redirect_url: "https://your-donetick-instance.com/auth/oauth2"
  scopes:
    - "openid"
    - "profile"
    - "email"
  auth_url: "https://your-oidc-provider.com/auth"
  token_url: "https://your-oidc-provider.com/token"
  user_info_url: "https://your-oidc-provider.com/userinfo"
  name: "Your Provider Name"
