---
title: "How to Update n8n on a VPS (e.g. Hostinger) to Get the New MCP Nodes"
date: "2025-04-12"
excerpt: "A step-by-step guide to updating your n8n instance running on Docker to access the latest MCP nodes."
coverImage: "/images/n8n-update.jpg"
status: public
---

# How to Update n8n on a VPS (e.g., Hostinger) to Get the New MCP Nodes

If you're self-hosting n8n on a VPS (like Hostinger) and want to take advantage of the new MCP nodes, you're in luck — updating your n8n instance is quick and painless if you're using Docker.

Follow the concise guide below to upgrade your deployment and unlock the latest features.

## Step 1: SSH into Your VPS

Use your preferred terminal or the browser-based terminal provided by your host. For example:

```bash
ssh root@your-server-ip
```

Or using the browser console, just click this button on Hostinger.

## Step 2: Navigate to Your n8n Directory

Go to the directory where your n8n Docker Compose configuration is located:

```bash
cd /path/to/your/n8n
```

## Step 3: Pull the Latest n8n Image

Update to the latest version by pulling the newest Docker image:

```bash
docker-compose pull
```

This will download the latest n8n image from Docker Hub while preserving your data and configuration.

## Step 4: Restart Your n8n Container

After pulling the new image, restart your container to apply the changes:

```bash
docker-compose down
docker-compose up -d
```

The `-d` flag runs the container in detached mode (in the background).

## Step 5: Verify the Update

Check that n8n is running with the new version by examining the logs:

```bash
docker-compose logs -f
```

You should see n8n starting up successfully. Press `Ctrl+C` to exit the log view.

## Step 6: Access the New MCP Nodes

Now, when you log into your n8n instance, you'll have access to all the new MCP (Multi-Cloud Platform) nodes, which enable enhanced integrations across various cloud providers.

Look for the MCP section in the nodes panel when creating a new workflow to start using these powerful new integration options.

## Troubleshooting

If you encounter any issues after updating:

1. Check the container logs for detailed error messages:
   ```bash
   docker-compose logs -f
   ```

2. Ensure your `.env` file is compatible with the new version

3. If necessary, you can roll back to your previous version by specifying the version tag:
   ```bash
   docker-compose down
   docker-compose pull n8n:your-previous-version
   docker-compose up -d
   ```

## Conclusion

Keeping your n8n instance updated ensures you have access to the latest features, security patches, and node integrations. Since n8n is actively developed, it's worth checking for updates regularly.

The new MCP nodes allow for more powerful workflow automations with enhanced cross-cloud capabilities, making this update particularly valuable for those working with multiple cloud platforms. 