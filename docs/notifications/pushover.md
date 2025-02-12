---
id: pushover
title: Pushover
sidebar_label: Pushover
---

# Pushover

Pushover is a service that provides real-time notifications to your devices. You can use Pushover to receive notifications from Donetick when certain events occur, such as task reminders or completions.


## Prerequisites

To set up Pushover notifications in Donetick, you will need:
- A Pushover account
- A Pushover application key
- A Pushover user key


## Create a Pushover Application

To send notifications to Pushover, you need to create a Pushover application. Here's how you can create an application and get the application key:
- Go to the [Pushover website](https://pushover.net/) and log in to your account.
- Click on the "Create an Application/API Token" link.
- Fill in the required details for your application, such as the name, description, and icon.
- Once your application is created, Pushover will provide you with an application key. Copy this key as you will need it to configure Donetick.


## Get Your User Key:

To receive notifications on your devices, you need to get your Pushover user key. Here's how you can find your user key:
- Click on your user name in the top right corner and select "Your User Key."
- Copy the user key as you will need it to configure Donetick.

## Configure Donetick

To configure Donetick to send notifications to Pushover, you need to update your `config.yaml` file with the Pushover configuration. Please check the [Configuration](../getting-started/configration#pushover) documentation for more information on the configuration file.


Once you have added the configuration, restart Donetick for the changes to take effect.

After that, you can go to your user settings in Donetick and enable Pushover notifications by providing your Pushover user key after you select Pushover as the notification service.


