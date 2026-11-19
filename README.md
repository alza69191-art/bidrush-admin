# BidRush Admin

Standalone Arabic RTL administration dashboard for BidRush.

## Required Railway variables (admin service only)
- ADMIN_USERNAME: administrator login name
- ADMIN_PASSWORD: strong password (minimum 16 characters)
- ADMIN_SESSION_SECRET: random secret, at least 32 characters
- BIDRUSH_API_URL: https://bidrush-web-production.up.railway.app
- BIDRUSH_API_KEY: must match ADMIN_API_KEY on the BidRush web service

Never put these values in GitHub or client-side code. The browser receives only an HttpOnly, Secure, SameSite=Strict session cookie. The server proxies administrative requests to BidRush and attaches the API key privately.

## Main app database
Run database/migrations/20261119_support_center.sql from the bidrush-platform repository in the TiDB SQL editor before using support tickets.
