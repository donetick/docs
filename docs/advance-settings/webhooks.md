---
id: webhooks
title: Webhooks
sidebar_label: Webhook
---

# Webhooks

Webhooks provide a way to receive real-time notifications about events occurring within Donetick.  This allows you to integrate Donetick with other systems and automate actions based on these events.  For example, you could use webhooks to send notifications, update databases, trigger workflows, or perform other custom logic.

## Event Types

Donetick supports the following event types:

*   **`task.completed`**:  Triggered when a task is completed.
*   **`task.skipped`**: Triggered when a task is skipped.
*   **`task.reminder`**: Triggered when a task reminder is due.
*   **`thing.changed`**: Triggered when a "thing" is updated.

## Setting up a Webhook

To receive webhook events, you need to provide Donetick with a URL (your webhook endpoint) that will receive POST requests containing the event data.  This URL is typically configured within the Donetick application settings (the specific location may vary depending on the Donetick version).  Donetick will then send HTTP POST requests to this URL whenever a relevant event occurs.

## Event Payload

Webhook events are sent as JSON payloads in the body of the POST request.  The payload structure depends on the event type.  All events share a common structure:

```json
{
  "type": "event_type",  // The type of the event (e.g., "task.completed").
  "timestamp": "timestamp", // The time the event occurred (ISO 8601 format).
  "data": {                // Event-specific data.
    // ... event data ...
  }
}

```

