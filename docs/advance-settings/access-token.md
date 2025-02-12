---
id: access-token
title: Access Token
sidebar_label: Access Token
---

# Access Token

Access token are long-term tokens that can be used to authenticate API requests to Donetick.  They are typically used by applications or scripts that need to interact with Donetick programmatically.

## Generating an Access Token

- Navigate to the Settings.
- Access Token
- Generate new token
- Give you token a name

## Using the Access Token

Once you have generated an access token, you can use it to authenticate eAPI (donetick external API) requests to Donetick.  To authenticate a request, include the access token in the `secret` header of the HTTP request

