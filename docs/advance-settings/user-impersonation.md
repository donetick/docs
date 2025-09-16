# User Impersonation

User impersonation allows administrators and managers to perform actions on behalf of other users in their circle.

## Overview

When impersonating a user, you can:
- View tasks from their perspective
- Complete, skip, start, and pause chores on their behalf
- See their assigned tasks and due dates
- Perform some chore operations as if you were that user


## Prerequisites

To use impersonation, you must:
- Have **Admin** or **Manager** role in your circle
- Be in the same circle as the user you want to impersonate
- Have the user impersonation feature enabled (available in recent versions)

## How to Use Impersonation

### Starting Impersonation

1. **Locate the User Switcher**: Look for the "View tasks as" panel on your dashboard (only visible to admins/managers)

2. **Select a User**: 
   - Click "Choose User" if no one is currently selected
   - Or "Change User" if you're already impersonating someone
   - Select the user you want to impersonate from the dropdown

3. **Confirmation**: You'll see a confirmation that impersonation has started, along with an impersonation banner

### While Impersonating

When actively impersonating a user, you'll notice:

- **Impersonation Banner**: A prominent warning banner showing who you're impersonating
- **Task Filtering**: Only tasks assigned to the impersonated user are visible
- **User Context**: All actions are performed as the impersonated user
- **Visual Indicators**: Clear indication that you're in impersonation mode

### Stopping Impersonation

To stop impersonating a user:
- Click "Exit Impersonation" in the warning banner, OR
- Click "Cancel" in the User Switcher panel

## Technical Implementation

### API Headers
When impersonating, the frontend automatically includes:
```
X-Impersonate-User-ID: [impersonated_user_id]
```

## Security Considerations

### Session Management
- Impersonation state is stored locally and expires with browser sessions
- No server-side session state is maintained
- Each request is validated independently

## API Reference

### Impersonation Headers

| Header | Value | Description |
|--------|-------|-------------|
| `X-Impersonate-User-ID` | `string` | ID of the user to impersonate |

### Endpoints Supporting Impersonation

All chore-related endpoints support impersonation:

- `POST /api/v1/chores/{id}/do` - Complete chore
- `POST /api/v1/chores/{id}/skip` - Skip chore  
- `PUT /api/v1/chores/{id}/start` - Start chore timer
- `PUT /api/v1/chores/{id}/pause` - Pause chore timer
- `GET /api/v1/chores` - List chores (filtered by impersonated user)

### Response Format

API responses include both users in audit fields:
```json
{
  "updatedBy": 123,     // Actual user (admin/manager)
  "performedAs": 456,   // Impersonated user
  "updatedAt": "2023-..."
}
```
