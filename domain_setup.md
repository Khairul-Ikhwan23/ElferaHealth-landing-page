# Domain Setup Guide for ElferaHealth

This guide will walk you through buying a domain and setting it up with GitHub Pages.

---

## Step 1: Buy a Domain

### Popular Domain Registrars:
- **Namecheap** (recommended - good prices, easy to use)
- **GoDaddy** (popular, but can be expensive)
- **Google Domains** (now Squarespace Domains)
- **Cloudflare** (good prices, free privacy)
- **Name.com**

### Process:
1. Go to your chosen registrar's website
2. Search for `elferahealth.com`
3. Add to cart and complete the purchase
4. You'll receive access to manage your domain's DNS settings

---

## Step 2: Configure DNS for GitHub Pages

After purchasing your domain, you need to configure DNS records to point to GitHub Pages.

### Option A: CNAME Record (Recommended for GitHub Pages)

If your registrar supports CNAME for root domain (apex domain):

1. Go to your domain registrar's DNS management page
2. Add a new DNS record:
   - **Type**: `CNAME`
   - **Name**: `@` (or leave blank for root domain)
   - **Value**: `khairul-ikhwan23.github.io`
   - **TTL**: `3600` (or default)

### Option B: A Records (If CNAME Not Supported for Root)

Some registrars don't support CNAME for the root domain (`@`). Use A records instead:

Add **4 A records** with these GitHub Pages IP addresses:

1. **Type**: `A`  
   **Name**: `@`  
   **Value**: `185.199.108.153`

2. **Type**: `A`  
   **Name**: `@`  
   **Value**: `185.199.109.153`

3. **Type**: `A`  
   **Name**: `@`  
   **Value**: `185.199.110.153`

4. **Type**: `A`  
   **Name**: `@`  
   **Value**: `185.199.111.153`

**Note**: GitHub Pages IP addresses can change. If Option A is available, use it instead.

### For www Subdomain (Optional but Recommended):

Add a CNAME for `www`:
- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `khairul-ikhwan23.github.io`
- **TTL**: `3600`

---

## Step 3: Configure GitHub Pages

1. Go to your repository: https://github.com/Khairul-Ikhwan23/ElferaHealth-landing-page
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Custom domain**, enter: `elferahealth.com`
5. Check **"Enforce HTTPS"** (GitHub will automatically set up SSL certificate)
6. Click **Save**

GitHub will automatically create a `CNAME` file in your `gh-pages` branch.

---

## Step 4: Update Website Configuration

After DNS has propagated (usually 24-48 hours), you need to update the code to remove the basePath and update URLs.

### 1. Update `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '', // Remove the basePath for custom domain
  images: {
    unoptimized: true
  }
};

export default nextConfig;
```

### 2. Update `src/lib/constants.ts`:

```typescript
// Base path for GitHub Pages (empty for custom domain)
export const BASE_PATH = '' // Change from '/ElferaHealth-landing-page' to ''
```

### 3. Update `.github/workflows/deploy.yml`:

Add back the CNAME line:

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./out
    force_orphan: true
    cname: elferahealth.com  # Add this line back
```

### 4. Update URLs in `src/app/layout.tsx`:

Change:
```typescript
metadataBase: new URL('https://khairul-ikhwan23.github.io/ElferaHealth-landing-page'),
```

To:
```typescript
metadataBase: new URL('https://www.elferahealth.com'),
```

Also update:
- `openGraph.url`: `'https://www.elferahealth.com/'`
- `alternates.canonical`: `'https://www.elferahealth.com/'`

### 5. Update `src/app/robots.ts`:

Change:
```typescript
sitemap: 'https://khairul-ikhwan23.github.io/ElferaHealth-landing-page/sitemap.xml',
```

To:
```typescript
sitemap: 'https://www.elferahealth.com/sitemap.xml',
```

### 6. Update `src/app/sitemap.ts`:

Change:
```typescript
url: 'https://khairul-ikhwan23.github.io/ElferaHealth-landing-page',
```

To:
```typescript
url: 'https://www.elferahealth.com',
```

---

## Step 5: Wait for DNS Propagation

- DNS changes can take **24-48 hours** to fully propagate worldwide
- You can check propagation status: https://www.whatsmydns.net
- Enter your domain and check if it points to GitHub Pages IPs
- Wait until you see green checkmarks across all locations

---

## Step 6: Verify Setup

1. Visit `https://elferahealth.com` (should work!)
2. Check that HTTPS is working (lock icon in browser)
3. Verify all images load correctly
4. Test all links and navigation
5. Check that SSL certificate is valid

---

## Timeline Summary

- **Day 1**: Buy domain → Configure DNS → Update GitHub Pages settings
- **Day 1-2**: Wait for DNS propagation
- **Day 2**: Update code → Push changes → Site works with custom domain!

---

## Troubleshooting

### Domain Not Working After 48 Hours?

1. **Check DNS propagation**: Use https://www.whatsmydns.net
2. **Verify DNS records**: Make sure A records or CNAME is correct
3. **Check GitHub Pages settings**: Ensure custom domain is saved
4. **Clear browser cache**: Try incognito/private mode
5. **Check SSL certificate**: GitHub should auto-provision it (can take a few minutes after DNS propagates)

### Images Not Loading?

- Make sure `BASE_PATH` is set to `''` (empty string) in `src/lib/constants.ts`
- Verify images are in `/public/assets/` folder
- Check browser console for 404 errors

### HTTPS Not Working?

- GitHub automatically provisions SSL certificates
- Can take up to 24 hours after DNS propagation
- Make sure "Enforce HTTPS" is checked in GitHub Pages settings

---

## Tips

1. **Use www vs non-www**: Choose one primary domain (recommend `www.elferahealth.com`) and redirect the other
2. **Enable HTTPS**: GitHub Pages does this automatically
3. **Keep DNS records**: Don't delete them after setup
4. **Domain renewal**: Set up auto-renewal to avoid losing your domain
5. **Privacy protection**: Most registrars offer WHOIS privacy (usually free or cheap)

---

## Quick Checklist

- [ ] Buy domain from registrar
- [ ] Configure DNS (CNAME or A records pointing to GitHub Pages)
- [ ] Add custom domain in GitHub Pages settings
- [ ] Wait for DNS propagation (check with whatsmyDNS)
- [ ] Update code (basePath, URLs, CNAME in workflow)
- [ ] Push changes and verify site works
- [ ] Test HTTPS certificate
- [ ] Verify all images and links work correctly

---

## After Setup is Complete

Once your domain is working:

1. **Update all references** from GitHub Pages URL to your custom domain
2. **Test everything** thoroughly
3. **Monitor** for any issues in the first few days
4. **Set up monitoring** (optional) to get alerts if site goes down

---

## Need Help?

If you encounter issues:
1. Check GitHub Pages documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
2. Verify DNS settings are correct
3. Check GitHub Pages status: https://www.githubstatus.com
4. Review browser console for errors

---

**Last Updated**: November 2025

