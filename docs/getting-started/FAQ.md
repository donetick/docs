---
title: Frequently Asked Questions
sidebar_label: Frequently Asked Questions
# sidebar_position: 2
sidebar_id: faq
---

# Frequently Asked Questions

This guide provides instructions on how to quickly get started with Donetick locally

## Prerequisites

Before running Donetick, ensure you have a valid configuration file.  Donetick looks for a YAML file named `local.yaml` or `selfhosted.yaml` within the `./config` directory. The file name is chosen based on the `DT_ENV` environment variable. If `DT_ENV` is not set, `local.yaml` is used by default.

1.  **Create a Configuration File:** If you don't have one, create a YAML file (e.g., `selfhosted.yaml`) based on the example provided in the [Configuration](./configration) documentation.
2.  **Place the Configuration File:** Place the `selfhosted.yaml` (or your chosen name) file in the `/config` directory within your Donetick application's root directory.

## Running Donetick

You can run Donetick using Docker, Docker Compose, or directly from a binary.

### Using Docker

1.  **Pull the Image:** Pull the latest Donetick Docker image:

    ```bash
    docker pull donetick/donetick
    ```

2.  **Run the Container:** Run the Donetick container.  Replace `/path/to/host/data` with the desired directory on your host machine to store Donetick's data (e.g., the SQLite database).  This directory will be mounted as `/donetick-data` inside the container.

    ```bash
    docker run -v /path/to/host/data:/donetick-data -p 2021:2021 \
      -e DT_ENV=selfhosted \
      -e DT_SQLITE_PATH=/donetick-data/donetick.db \
      donetick/donetick
    ```

    *   `-v /path/to/host/data:/donetick-data`: Mounts the specified host directory to `/donetick-data` in the container.  This is crucial for persisting your data.
    *   `-p 2021:2021`: Maps port 2021 on your host to port 2021 in the container.  You can change the host port if needed.
    *   `-e DT_ENV=selfhosted`: Sets the environment to `selfhosted`, telling Donetick to use `selfhosted.yaml`.
    *   `-e DT_SQLITE_PATH=/donetick-data/donetick.db`: Sets the path to the SQLite database within the container.  It's important that this path is within the mounted volume so that the database is persisted.

### Using Docker Compose

1.  **Create `docker-compose.yml`:** Create a file named `docker-compose.yml` in your Donetick project directory with the following content:

    ```yaml
    version: "3.9"  # Or your preferred version
    services:
      donetick:
        image: donetick/donetick
        container_name: donetick
        restart: unless-stopped
        ports:
          - "2021:2021"
        volumes:
          -./data:/donetick-data  # Maps./data on your host to /donetick-data in the container
          -./config:/config       # Maps./config on your host to /config in the container
        environment:
          - DT_ENV=selfhosted
          - DT_SQLITE_PATH=/donetick-data/donetick.db
    ```

2.  **Run Docker Compose:** Navigate to the directory containing `docker-compose.yml` and run:

    ```bash
    docker-compose up -d
    ```

    The `-d` flag runs the container in detached mode (in the background).

### Using the Binary

1.  **Download the Release:** Download the latest Donetick release for your platform from the [Releases](https://github.com/donetick/donetick/releases) page.
2.  **Extract the Archive:** Extract the downloaded archive (e.g., `.tar.gz`, `.zip`).
3.  **Navigate to the Directory:** Open a terminal and navigate to the directory where you extracted the Donetick binary.
4.  **Run Donetick:** Run the Donetick binary, setting the `DT_ENV` environment variable:

    ```bash
    DT_ENV=selfhosted./donetick
    ```

    This command assumes the Donetick binary is named `donetick`.  Adjust the name if necessary.

## Accessing Donetick

Once Donetick is running, you should be able to access it at `http://localhost:2021` (or the port you configured).  If you are running Donetick in a remote environment, replace `localhost` with the appropriate hostname or IP address.

