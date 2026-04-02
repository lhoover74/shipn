# Ship n' a Rip Telegram Bot

Chat-only Telegram bot scaffold for Ship n' a Rip.

## Stack
- Cloudflare Worker cron polling with Telegram `getUpdates`
- Cloudflare D1 for bot sessions and offsets
- Backend API routes for quote, label creation, and tracking
- No webhooks required

## Repo layout
- `worker-bot/` Telegram polling bot
- `backend/` API handlers and shared shipping logic
- `db/` D1 schema and migrations

## Main flow
1. User sends `/start`
2. Bot collects shipment details step by step
3. Bot requests a live quote from backend
4. User confirms with `YES`
5. Backend generates label
6. Bot sends tracking number and label file

## Environment
Copy `.env.example` values into your Cloudflare secrets or local dev env.

## Notes
- Customer-facing copy stays branded as Ship n' a Rip.
- Carrier references stay backend-only.
- This scaffold is intentionally minimal and ready to extend.
