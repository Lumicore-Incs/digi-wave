# 🚀 Hostinger VPS Deployment Guide

## Digi-Wave Website (Next.js 14)

This guide walks you through deploying the Digi-Wave website (Next.js 14) on a Hostinger VPS. Port: **3008**. Domain: **digiwave.lk**.

---

## 📋 Prerequisites

- Hostinger VPS with Ubuntu 22.04
- SSH access to your VPS
- Your VPS IP address
- Domain `digiwave.lk` pointed to your VPS IP (A record)
- GitHub repository access

---

## 🎯 Architecture Overview

```
┌─────────────────────────────────────────┐
│         Hostinger VPS Server            │
│                                         │
│  ┌────────────────────────────────┐    │
│  │  Nginx (Reverse Proxy)         │    │
│  │  Port 80 / 443                 │    │
│  └──────────┬─────────────────────┘    │
│             │                           │
│  ┌──────────▼──────────────────────┐   │
│  │  Next.js App (PM2)              │   │
│  │  Port 3008                      │   │
│  │  /var/www/digi-wave             │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## 📦 Step 1: Connect to Your VPS

```bash
ssh root@your_vps_ip
# or
ssh username@your_vps_ip
```

---

## 🔧 Step 2: Initial Server Setup

### 2.1 Update System Packages

```bash
sudo apt update && sudo apt upgrade -y
```

### 2.2 Install Node.js (v20 LTS)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y

# Verify
node -v
npm -v
```

### 2.3 Install Required Tools

```bash
# Install Git
sudo apt install git -y

# Install PM2 (Process Manager)
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y
```

### 2.4 Configure Firewall

```bash
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 3008
sudo ufw enable
```

---

## 📥 Step 3: Deploy the Application

### 3.1 Create Application Directory

```bash
sudo mkdir -p /var/www/digi-wave
cd /var/www/digi-wave
```

### 3.2 Clone the Repository

```bash
sudo git clone https://github.com/Lumicore-Incs/digi-wave.git .

# Or upload via SCP from your local machine:
# scp -r /path/to/digi-wave root@your_vps_ip:/var/www/digi-wave
```

### 3.3 Set Correct Permissions

```bash
sudo chown -R $USER:$USER /var/www/digi-wave
sudo chmod -R 755 /var/www/digi-wave
```

---

## 🔨 Step 4: Configure Environment Variables

```bash
cd /var/www/digi-wave
nano .env.production
```

Add the following:

```env
# App
NODE_ENV=production
PORT=3008

# Email (Nodemailer - Gmail)
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
```

> **Note:** For `EMAIL_PASSWORD`, use a Gmail **App Password**, not your account password.
> Generate one at: Google Account → Security → 2-Step Verification → App Passwords.

---

## 🏗️ Step 5: Install Dependencies and Build

```bash
cd /var/www/digi-wave

# Install all dependencies
npm install

# Build the Next.js app
npm run build
```

---

## ⚙️ Step 6: Set Up PM2

### 6.1 Create PM2 Ecosystem File

```bash
nano /var/www/digi-wave/ecosystem.config.js
```

```javascript
module.exports = {
  apps: [
    {
      name: 'digi-wave',
      script: 'node_modules/.bin/next',
      args: 'start -p 3008',
      cwd: '/var/www/digi-wave',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3008,
      },
    },
  ],
};
```

### 6.2 Start the App with PM2

```bash
cd /var/www/digi-wave

# Start using ecosystem file
pm2 start ecosystem.config.js --env production

# Save PM2 process list
pm2 save

# Enable PM2 to start on system boot
pm2 startup
# Run the command printed by the above (e.g.: sudo env PATH=... pm2 startup ...)

# Check status
pm2 status
```

**Useful PM2 Commands:**

```bash
# View logs
pm2 logs digi-wave

# Restart app
pm2 restart digi-wave

# Stop app
pm2 stop digi-wave

# Monitor CPU/RAM
pm2 monit
```

---

## 🌐 Step 7: Configure Nginx

### 7.1 Create Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/digi-wave
```

Add this configuration:

```nginx
# Upstream Next.js app
upstream digi_wave_app {
    server localhost:3008;
    keepalive 64;
}

server {
    listen 80;
    server_name digiwave.lk www.digiwave.lk;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Proxy all traffic to Next.js
    location / {
        proxy_pass http://digi_wave_app;
        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;

        proxy_cache_bypass $http_upgrade;
    }

    # Cache Next.js static assets
    location /_next/static/ {
        proxy_pass http://digi_wave_app/_next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Logs
    access_log /var/log/nginx/digi-wave-access.log;
    error_log /var/log/nginx/digi-wave-error.log;
}
```

### 7.2 Enable the Site

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/digi-wave /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Enable Nginx on boot
sudo systemctl enable nginx
```

---

## 🔒 Step 8: Set Up SSL with Let's Encrypt

### 8.1 Install Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 8.2 Obtain SSL Certificate

> Make sure `digiwave.lk` DNS A record is pointing to your VPS IP before running this.

```bash
sudo certbot --nginx -d digiwave.lk -d www.digiwave.lk
```

Certbot will automatically configure Nginx for HTTPS and set up auto-renewal.

### 8.3 Test Auto-Renewal

```bash
sudo certbot renew --dry-run
```

---

## ✅ Step 9: Verify Deployment

```bash
# Check PM2 status
pm2 status

# Check app logs
pm2 logs digi-wave

# Check Nginx status
sudo systemctl status nginx

# Test app directly (bypasses Nginx)
curl http://localhost:3008

# Check Nginx error logs
sudo tail -f /var/log/nginx/digi-wave-error.log
```

Open `https://digiwave.lk` in your browser — you should see the Digi-Wave homepage.

---

## 🔄 Step 10: Update Deployment Script

Create a script for deploying future updates:

```bash
nano /var/www/digi-wave/deploy.sh
```

```bash
#!/bin/bash

echo "🚀 Deploying Digi-Wave..."

cd /var/www/digi-wave

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install dependencies (in case of new packages)
echo "📦 Installing dependencies..."
npm install

# Build Next.js app
echo "🏗️ Building app..."
npm run build

# Restart PM2
echo "♻️ Restarting app..."
pm2 restart digi-wave

echo "✅ Deployment complete! Visit https://digiwave.lk"
```

Make it executable:

```bash
chmod +x /var/www/digi-wave/deploy.sh
```

Run it for future updates:

```bash
./deploy.sh
```

---

## 🛠️ Maintenance Commands

### Check Application Status

```bash
# All services
pm2 status
sudo systemctl status nginx

# Disk space
df -h

# Memory usage
free -m
```

### View Logs

```bash
# App logs
pm2 logs digi-wave

# Nginx access logs
sudo tail -f /var/log/nginx/digi-wave-access.log

# Nginx error logs
sudo tail -f /var/log/nginx/digi-wave-error.log
```

---

## 🐛 Troubleshooting

### App Not Starting

```bash
# Check PM2 logs
pm2 logs digi-wave

# 1. Port 3008 already in use
sudo lsof -i :3008
sudo kill -9 <PID>

# 2. Missing .env.production
cat /var/www/digi-wave/.env.production

# 3. Build not done — rebuild
cd /var/www/digi-wave && npm run build
```

### 502 Bad Gateway

```bash
# App is not running
pm2 status
pm2 restart digi-wave

# Check app is listening on port 3008
sudo netstat -tlnp | grep 3008
```

### Nginx Configuration Errors

```bash
sudo nginx -t
sudo systemctl restart nginx
```

### Emails Not Sending (Contact / Quote Forms)

```bash
# Check .env.production has correct values
cat /var/www/digi-wave/.env.production

# Gmail App Password must be set (not your account password)
# Check app logs for nodemailer errors
pm2 logs digi-wave
```

### SSL Certificate Issues

```bash
# Renew manually
sudo certbot renew

# Check certificate expiry
sudo certbot certificates
```

---

## 📋 Quick Reference

| Item             | Value                                  |
| ---------------- | -------------------------------------- |
| App Directory    | `/var/www/digi-wave`                   |
| App Port         | `3008`                                 |
| Domain           | `digiwave.lk`                          |
| PM2 Process Name | `digi-wave`                            |
| Nginx Config     | `/etc/nginx/sites-available/digi-wave` |
| Nginx Access Log | `/var/log/nginx/digi-wave-access.log`  |
| Nginx Error Log  | `/var/log/nginx/digi-wave-error.log`   |
| Deploy Script    | `/var/www/digi-wave/deploy.sh`         |
