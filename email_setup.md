# Email Setup Guide for hello@elferahealth.com

This guide will help you set up email hosting for your domain.

---

## Option 1: Namecheap Private Email (Easiest)

### Setup Steps:

1. **Log in to Namecheap**
   - Go to https://www.namecheap.com
   - Sign in to your account

2. **Navigate to Domain Management**
   - Click on **Domain List** from the left sidebar
   - Find `elferahealth.com` and click **Manage**

3. **Set Up Email**
   - Click on the **Email** tab
   - Click **Create Email Account** button

4. **Create Email Account**
   - **Email Address**: `hello` (this will create hello@elferahealth.com)
   - **Password**: Create a strong password (save it securely!)
   - **Mailbox Size**: Choose your preferred size (e.g., 5GB)
   - Click **Create**

5. **Access Your Email**
   - **Webmail**: Go to https://privateemail.com
   - Log in with: `hello@elferahealth.com` and your password
   - **Email Client Setup** (for Outlook, Apple Mail, etc.):
     - **IMAP Server**: `mail.privateemail.com`
     - **IMAP Port**: 993 (SSL)
     - **SMTP Server**: `mail.privateemail.com`
     - **SMTP Port**: 465 (SSL)
     - **Username**: `hello@elferahealth.com`
     - **Password**: Your email password

### Pricing:
- **Free**: First 2 months free
- **After**: ~$1.88/month per mailbox (very affordable!)

---

## Option 2: Google Workspace (Professional)

### Setup Steps:

1. **Sign Up**
   - Go to https://workspace.google.com
   - Click **Get Started**
   - Choose a plan (Business Starter recommended: $6/user/month)

2. **Verify Domain**
   - Enter your domain: `elferahealth.com`
   - Google will provide DNS records to add in Namecheap
   - Add these records in Namecheap's Advanced DNS section

3. **Create Email**
   - After verification, create `hello@elferahealth.com`
   - Set up password and security

4. **Access**
   - Use Gmail interface at https://mail.google.com
   - Or use any email client with Gmail settings

### Pricing:
- **Business Starter**: $6/user/month
- **Business Standard**: $12/user/month
- 14-day free trial available

---

## Option 3: Microsoft 365

### Setup Steps:

1. **Sign Up**
   - Go to https://www.microsoft.com/microsoft-365
   - Choose a plan (Microsoft 365 Business Basic: $6/user/month)

2. **Add Domain**
   - Add `elferahealth.com` to your account
   - Verify domain by adding DNS records in Namecheap

3. **Create Email**
   - Create `hello@elferahealth.com`
   - Set up password

4. **Access**
   - Use Outlook web at https://outlook.office.com
   - Or use Outlook desktop/mobile app

### Pricing:
- **Business Basic**: $6/user/month
- **Business Standard**: $12.50/user/month

---

## Option 4: Zoho Mail (Free Option)

### Setup Steps:

1. **Sign Up**
   - Go to https://www.zoho.com/mail/
   - Click **Sign Up Now**
   - Choose **Free Plan** (up to 5 users)

2. **Add Domain**
   - Enter `elferahealth.com`
   - Verify domain by adding DNS records in Namecheap

3. **Create Email**
   - Create `hello@elferahealth.com`
   - Set up password

4. **Access**
   - Use Zoho Mail web interface
   - Or configure email client

### Pricing:
- **Free**: Up to 5 users, 5GB per user
- **Paid Plans**: Start at $1/user/month

---

## Recommended: Namecheap Private Email

**Why?**
- ✅ Easiest setup (all in one place)
- ✅ Very affordable ($1.88/month)
- ✅ No need to manage DNS records separately
- ✅ Professional email address
- ✅ 2 months free trial

**Steps Summary:**
1. Namecheap → Domain List → elferahealth.com → Manage
2. Email tab → Create Email Account
3. Email: `hello`, set password
4. Done! Access at https://privateemail.com

---

## DNS Records (If Using External Email Provider)

If you choose Google Workspace, Microsoft 365, or Zoho, you'll need to add MX records in Namecheap:

### For Google Workspace:
- **Type**: MX
- **Host**: `@`
- **Value**: `1 aspmx.l.google.com.` (Priority: 1)
- **Value**: `5 alt1.aspmx.l.google.com.` (Priority: 5)
- **Value**: `5 alt2.aspmx.l.google.com.` (Priority: 5)
- **Value**: `10 alt3.aspmx.l.google.com.` (Priority: 10)
- **Value**: `10 alt4.aspmx.l.google.com.` (Priority: 10)

### For Microsoft 365:
- **Type**: MX
- **Host**: `@`
- **Value**: `elferahealth-com.mail.protection.outlook.com` (Priority: 0)

### For Zoho Mail:
- **Type**: MX
- **Host**: `@`
- **Value**: `mx.zoho.com` (Priority: 10)
- **Value**: `mx2.zoho.com` (Priority: 20)

**Note**: These will be provided by your email provider during setup.

---

## Quick Start (Namecheap Private Email)

1. Log in to Namecheap
2. Domain List → elferahealth.com → Manage
3. Email tab
4. Create Email Account
5. Email: `hello`, Password: (your choice)
6. Done!

Access your email at: https://privateemail.com

---

## Need Help?

- **Namecheap Support**: https://www.namecheap.com/support/
- **Email Setup Guides**: Check your email provider's documentation
- **DNS Issues**: Make sure DNS records are saved and propagated (can take 24-48 hours)

---

**Last Updated**: November 2025

