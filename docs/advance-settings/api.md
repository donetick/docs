import PostmanAuthTab from '/static/img/postman-collection-auth.png';



---
id: api
title: Using the API
sidebar_label: Using the API
---




# Using the API

This documentation is incomplete. For a more complete listing, see https://github.com/donetick/donetick/blob/main/internal/chore/api.go.

## In Each Request

Get an Access Token as described in [Access Token](access-token.md). In each request, send it in a header called `secretkey`. 

## Setting Up Postman
1. Go to the Auth tab in the description of the collection. This can also be done in the auth tab of a given request, but this will save you a little trouble.
2. In the Auth Type dropdown, select API Key. 
3. In the field Key, enter `secretkey`.
4. In the field Value, paste the Access Token generated above.
5. Confirm that the Add To dropdown has Header selected.

<img src={PostmanAuthTab} width="500" height="459"/>



## Getting a List of Chores

First, determine if you're using HTTPS or HTTP. You're probably using HTTPS on your production server and HTTP on localhost. For the sake of discussion, we'll assume you're using HTTPS.

To retrieve all chores, create a GET request to `https://[your instance]/eapi/v1/chore`. No body is needed.

This will return a json-encoded array of tasks. Each task will have a representation in roughly the following format:

```jsx title="Sample result"
    {
        "id": 1,
        "name": "Put laundry in the washing machine",
        "frequencyType": "once",
        "frequency": 1,
        "frequencyMetadata": {},
        "nextDueDate": null,
        "isRolling": false,
        "assignedTo": 1,
        "assignees": [
            {
                "userId": 1
            }
        ],
        "assignStrategy": "least_completed",
        "isActive": true,
        "notification": false,
        "notificationMetadata": {},
        "labels": null,
        "labelsV2": [
            {
                "id": 1,
                "name": "Fun",
                "color": "#8d6e63",
                "created_by": 1
            },
            {
                "id": 2,
                "name": "Happy",
                "color": "#0288d1",
                "created_by": 1
            }
        ],
        "circleId": 1,
        "createdAt": "2025-08-01T02:02:18.384083907Z",
        "updatedAt": "2025-08-01T02:02:18.384137074Z",
        "createdBy": 1,
        "updatedBy": 1,
        "thingChore": null,
        "status": 0,
        "priority": 0,
        "description": "<p>This description includes <strong>formatted</strong> <s>text</s></p>"
    }

```

Note that if one of your tasks has an image in the description, it's encoded in the results, which can make for larger results than you might expect.

## Creating a chore

Send a POST request to https://[your instance]/eapi/v1/chore. There must be a json-encoded body describing the chore you're creating. Here's a minimal example:
```jsx title="Sample body"
{
    "Name": "Record TV on a VHS tape like it's 1990",
    "DueDate": "2025-08-30T19:51:50.000Z",
}
```

If you pass it a property it doesn't recognize, it will ignore it and continue on its merry way. 

It will return something like the following:
```jsx title="Sample result"
{
    "id": 16,
    "name": "Record TV on a VHS tape like it's 1990",
    "frequencyType": "once",
    "frequency": 0,
    "frequencyMetadata": null,
    "nextDueDate": "2025-08-30T19:51:50Z",
    "isRolling": false,
    "assignedTo": 1,
    "assignees": [
        {
            "userId": 1
        }
    ],
    "assignStrategy": "random",
    "isActive": true,
    "notification": false,
    "notificationMetadata": null,
    "labels": null,
    "labelsV2": [],
    "circleId": 1,
    "createdAt": "2025-08-05T05:58:48.581383404Z",
    "updatedAt": "2025-08-05T05:58:48.581496335Z",
    "createdBy": 1,
    "updatedBy": 0,
    "thingChore": null,
    "status": 0,
    "priority": 0,
    "subTasks": []
}
```


