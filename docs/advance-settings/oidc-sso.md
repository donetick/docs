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

If you use the Donetick mobile app with OIDC, add the mobile redirect URI in addition to the web redirect URI:

- Web: `https://your-donetick-instance.com/auth/oauth2`
- Mobile: `donetick://auth/oauth2`

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

  ---

  ## Example: Configure OIDC in Authentik

  Below is a quick reference for setting up an OIDC provider in Authentik to work with Donetick.

  ### 1) Create the OAuth2/OIDC Provider

  In Authentik:

  1. Go to **Applications → Providers** and create a new **OAuth2/OpenID Provider**.
  2. Set the **Client ID** and **Client Secret** (you will copy these into Donetick).
  3. Set **Redirect URIs** to include:
    - `https://your-donetick-instance.com/auth/oauth2`
    - `donetick://auth/oauth2` (required for mobile sign-in)
  4. Set **Scopes** to include at least: `openid`, `profile`, `email`.

  ### 2) Create an Application and Bind the Provider

  1. Go to **Applications → Applications** and create a new application.
  2. Select the provider you created above.
  3. Save the application and assign it to the users/groups that should be allowed to log in.

  ### 3) Map Authentik URLs to Donetick

  In your Donetick `config.yaml`, set the following values using the Authentik provider endpoints:

  - `auth_url`: Authentik **Authorization URL**
  - `token_url`: Authentik **Token URL**
  - `user_info_url`: Authentik **Userinfo URL**

  Copy the **Client ID** and **Client Secret** from Authentik into the Donetick `config.yaml`.


