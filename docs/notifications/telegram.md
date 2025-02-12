---
id: telegram
title: Telegram
sidebar_label: Telegram

---

# Telegram

Donetick supports sending notifications to Telegram chat and groups. This guide will walk you through the steps to set up Telegram notifications in Donetick.

## Prerequisites

- Create a Telegram bot
- Descover the chat ID
- Configure Donetick

## Create a Telegram Bot

To send notifications to Telegram, you need to create a Telegram bot. Here's how you can create a bot and get the bot token:

1. Open the Telegram app and search for the **BotFather**.
2. Start a chat with the BotFather by clicking on the **Start** button.
3. Type `/newbot` to create a new bot.
4. Follow the instructions to set up your bot, including providing a name and username.
5. Once your bot is created, the BotFather will provide you with a bot token. Copy this token as you will need it to configure Donetick.
6. You can also set up additional configurations for your bot, such as a description, profile picture.


## Discover the Chat ID

To send notifications to a specific chat or group, you need to know the chat ID. to get chat ID for your user you can use ` userinfobot` in Telegram:
you can search for `userinfobot` in Telegram and start a chat with it. The bot will provide you with your chat ID.


## Configure Donetick

To configure Donetick to send notifications to Telegram, you need to update you `config.yaml` file with the Telegram configuration. Please check the [Configuration](../getting-started/configration#telegram) documentation for more information on the configuration file.

Once you have added the configuration, restart Donetick for the changes to take effect.

after that you can go to your user settings in Donetick and enable Telegram notifications and provide the chat ID you want to receive notifications (you can use the chat ID you got from `userinfobot`)

