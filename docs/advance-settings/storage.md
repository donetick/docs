---
id: storage-setup
title: Storage Configuration
sidebar_label: Storage
---

# Configuring Storage in Donetick

Donetick supports object storage for file uploads, profile pictures, and other assets using S3-compatible storage services. This includes Amazon S3, Cloudflare R2, MinIO, and other S3-compatible providers.

this use to store photos you attach to the tasks, profile pictures, and in the future maybe (other assets)

## Prerequisites

Before configuring storage, ensure you have:

1. An S3-compatible storage provider (Amazon S3, Cloudflare R2, MinIO, etc.).
2. Access credentials (Access Key and Secret Key or API Token).
3. A storage bucket created for Donetick assets.

---

## Storage Configuration

You can configure storage via environment variables or the `config.yaml` file.

### YAML Configuration (`config.yaml`)

```yaml
storage:
  storage_type: "remote"
  bucket_name: "your-bucket-name"
  region: "us-east-1"
  base_path: "assets"
  access_key: "your-access-key"
  secret_key: "your-secret-key"
  endpoint: "https://your-endpoint.com"
  public_host: "https://your-cdn.com"  # Optional
  max_user_storage: 104857600  # 100MB
  max_file_size: 2097152       # 2MB
```

### Environment Variables

```bash
DT_STORAGE_STORAGE_TYPE=remote
DT_STORAGE_BUCKET_NAME=your-bucket-name
DT_STORAGE_REGION=us-east-1
DT_STORAGE_BASE_PATH=assets
DT_STORAGE_ACCESS_KEY=your-access-key
DT_STORAGE_SECRET_KEY=your-secret-key
DT_STORAGE_ENDPOINT=https://your-endpoint.com
DT_STORAGE_PUBLIC_HOST=https://your-cdn.com  # Optional
DT_STORAGE_MAX_USER_STORAGE=104857600
DT_STORAGE_MAX_FILE_SIZE=2097152
```

---

## Provider-Specific Setup

### Amazon S3
- Create a bucket in your AWS account.
- Create an IAM user with S3 access permissions.
- Use the access key, secret key, and region in your configuration.

### Cloudflare R2
- Create a bucket in Cloudflare R2.
- Generate an API token with read/write permissions.
- Use the R2 endpoint and credentials in your configuration.

### MinIO
- Deploy MinIO (e.g., via Docker).
- Create a bucket and user.
- Use your MinIO endpoint and credentials in the configuration.

---

## Local Storage Fallback
this is not recommended for production use, but can be useful for testing or development environments.

> **Important:** When running Donetick in Docker with local storage, you must mount a persistent volume to avoid data loss. Without a proper volume mount, uploaded files will be lost if the container is removed or recreated.


If S3-compatible storage is not **configured**, Donetick will use local storage by default:

```yaml
storage:
  storage_type: "local"
  max_user_storage: 104857600
  max_file_size: 2097152
```

Files are stored in the `assets/` directory within your Donetick installation.


**Example Docker Compose volume mount:**

```yaml
donetick:
  image: donetick/donetick:latest
  # ...other config...
  volumes:
    - ./data/assets:/app/assets
```

This ensures that files stored in the `assets/` directory are persisted on your host machine.


---

## Security & Best Practices

- Use dedicated credentials for Donetick.
- Grant only the minimum permissions required.
- Store credentials in environment variables, not in version control.
- Enable encryption and versioning on your storage bucket if supported.
- Use a CDN for public asset delivery when possible.

---

*Last updated: June 2025*