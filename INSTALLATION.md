# Installation & Deployment Guide

## 📦 Installation Methods

### Method 1: Local Installation (Easiest)

#### Windows
1. **Create Folder**
   - Right-click on Desktop
   - Select "New" → "Folder"
   - Name it "CNC-Website"

2. **Copy Files**
   - Extract all website files to this folder
   - Ensure all files are in the same directory

3. **Open Website**
   - Double-click `index.html`
   - Opens in your default browser
   - Ready to use!

#### Mac
1. **Create Folder**
   - Open Finder
   - Go to Desktop
   - Create new folder "CNC-Website"

2. **Copy Files**
   - Drag extracted files into folder

3. **Open Website**
   - Double-click `index.html`
   - Opens in default browser

#### Linux
1. **Create Folder**
   ```bash
   mkdir ~/CNC-Website
   cd ~/CNC-Website
   ```

2. **Copy Files**
   ```bash
   # Copy all website files here
   ```

3. **Open Website**
   ```bash
   # Option 1: Open in browser directly
   firefox index.html
   
   # Option 2: Start simple HTTP server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

---

### Method 2: Web Server Installation

#### Using Apache
1. **Locate Web Root**
   - Windows: `C:\Apache24\htdocs`
   - Linux: `/var/www/html`
   - Mac: `/Library/WebServer/Documents`

2. **Copy Files**
   ```bash
   cp -r /* /path/to/webroot/cnc-website
   ```

3. **Access Website**
   - Visit `http://localhost/cnc-website/`

#### Using Nginx
1. **Create Directory**
   ```bash
   sudo mkdir /var/www/cnc-website
   ```

2. **Copy Files**
   ```bash
   sudo cp -r /* /var/www/cnc-website/
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       root /var/www/cnc-website;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

---

### Method 3: Cloud Deployment

#### Netlify (Recommended for Static Sites)
1. **Create Account**
   - Visit netlify.com
   - Sign up (free)

2. **Deploy**
   - Drag and drop website folder
   - Automatic deployment
   - Get live URL instantly

3. **Benefits**
   - Free HTTPS
   - Auto-rebuilds
   - CDN included
   - Easy to maintain

#### GitHub Pages
1. **Create Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/cnc-website
   git push -u origin main
   ```

2. **Enable Pages**
   - Go to repository settings
   - Enable GitHub Pages
   - Select main branch
   - Get live URL

3. **Access Website**
   - Visit `https://username.github.io/cnc-website`

#### Firebase Hosting
1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Project**
   ```bash
   firebase init
   firebase deploy
   ```

3. **Get Live URL**
   - Firebase provides unique domain
   - Free SSL certificate included

#### Vercel
1. **Visit vercel.com**
   - Sign up with GitHub account
   - Import repository
   - Auto-deploys on push

2. **Get Domain**
   - Free .vercel.app domain
   - Custom domain support

---

### Method 4: Shared Hosting

#### cPanel/WHM (Most Common)
1. **Upload Files**
   - Login to cPanel
   - Use File Manager
   - Upload all files to `public_html`

2. **Access Website**
   - Visit your domain name
   - Website goes live immediately

3. **Benefits**
   - Email accounts included
   - SSL certificate available
   - Easy DNS management

#### Instructions:
1. Connect via FTP
   ```
   Server: ftp.yourdomain.com
   Username: cpanel_username
   Password: cpanel_password
   ```

2. Upload to `public_html` folder

3. Visit `yourdomain.com`

---

## 🔧 Pre-Deployment Checklist

### Before Going Live

- [ ] **Update Contact Info**
  - [ ] Phone numbers
  - [ ] Email addresses
  - [ ] Location/address
  - [ ] Social media links

- [ ] **Customize Branding**
  - [ ] Update company name
  - [ ] Change colors if needed
  - [ ] Update logo (if you have one)
  - [ ] Adjust course names/prices

- [ ] **Content Review**
  - [ ] Check all course descriptions
  - [ ] Update testimonials (replace samples)
  - [ ] Verify all links work
  - [ ] Update success stories

- [ ] **Test Functionality**
  - [ ] Registration form works
  - [ ] Demo booking works
  - [ ] Contact form functional
  - [ ] All navigation links work
  - [ ] Dark mode toggles properly
  - [ ] Mobile menu opens/closes
  - [ ] Gallery lightbox works

- [ ] **Test Responsiveness**
  - [ ] Mobile (320px)
  - [ ] Tablet (768px)
  - [ ] Laptop (1024px)
  - [ ] Desktop (1200px)

- [ ] **Browser Testing**
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
  - [ ] Mobile browsers

- [ ] **Performance Check**
  - [ ] Page loads quickly
  - [ ] No console errors
  - [ ] Images optimized (optional)
  - [ ] Smooth animations

---

## 🌐 Domain & SSL Setup

### Domain Registration
1. **Register Domain**
   - GoDaddy, Namecheap, Route53, etc.
   - Choose .com, .in, or relevant TLD

2. **Point to Server**
   - Update nameservers
   - Or create DNS records (A record)
   - Takes 24-48 hours to propagate

### SSL Certificate
1. **Let's Encrypt** (Free)
   ```bash
   # On server with certbot
   sudo certbot certonly --webroot -w /var/www/cnc-website -d yourdomain.com
   ```

2. **Paid SSL** (Optional)
   - GoDaddy, Comodo, GlobalSign
   - More support and features

3. **Setup**
   - Most hosts (cPanel, Netlify, Vercel) do this automatically

---

## 📊 Post-Deployment

### 1. Add Analytics
Add Google Analytics tracking code to `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Setup Email
- Create info@yourdomain.com email
- Configure contact form to send to your email
- Setup auto-responders

### 3. Monitor Performance
- Check page load times
- Monitor traffic
- Track form submissions
- Analyze user behavior

### 4. SEO Optimization
- Add meta descriptions
- Create sitemap.xml
- Submit to Google Search Console
- Submit to Bing Webmaster Tools

---

## 🔐 Security

### Before Deployment

1. **Remove Debug Info**
   - No sensitive data in code
   - No API keys exposed
   - No admin passwords visible

2. **Enable HTTPS**
   - Required for security
   - Free with Let's Encrypt
   - Redirect HTTP to HTTPS

3. **Set Security Headers**
   ```
   X-Content-Type-Options: nosniff
   X-Frame-Options: SAMEORIGIN
   X-XSS-Protection: 1; mode=block
   Content-Security-Policy: default-src 'self'
   ```

4. **Regular Backups**
   - Daily backups recommended
   - Multiple backup locations
   - Test restore process

---

## 🚀 Deployment Platforms Comparison

| Platform | Cost | Ease | Performance | Maintenance |
|----------|------|------|-------------|-------------|
| Netlify | Free | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Vercel | Free | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| GitHub Pages | Free | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Firebase | Free | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Shared Hosting | $5-10 | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| VPS | $5-20 | ⭐⭐ | ⭐⭐⭐⭐ | ⭐ |
| Dedicated | $50+ | ⭐ | ⭐⭐⭐⭐⭐ | ⭐ |

---

## 📋 Quick Deployment Steps

### Fastest Option: Netlify
1. Go to netlify.com
2. Drag & drop entire website folder
3. Done! Your site is live

### Most Affordable: Shared Hosting
1. Get hosting plan
2. Upload via FTP/cPanel
3. Done! Your site is live

### Most Control: Self-Hosted VPS
1. Get VPS hosting
2. Install server software
3. Upload files
4. Configure server
5. Done! Full control

---

## ✅ After Deployment Checklist

- [ ] Website loads on live domain
- [ ] All pages accessible
- [ ] Forms submit successfully
- [ ] Email notifications working
- [ ] Dark mode functional
- [ ] Mobile menu working
- [ ] Social media links updated
- [ ] Contact information current
- [ ] No console errors
- [ ] HTTPS enabled
- [ ] Analytics installed
- [ ] Sitemap submitted
- [ ] Backed up all files
- [ ] Monitored for 24 hours

---

## 🆘 Troubleshooting

### Website Shows 404 Error
- Ensure index.html is in root folder
- Check server configuration
- Verify file permissions

### Forms Not Working
- Check server supports POST requests
- Verify backend (if using)
- Test locally first

### Styling Looks Wrong
- Check styles.css is uploaded
- Clear browser cache
- Check file permissions

### JavaScript Errors
- Check script.js is uploaded
- Verify syntax in console
- Test on different browser

---

## 📞 Support

For deployment help:
1. Check platform documentation
2. Search Stack Overflow
3. Ask in community forums
4. Hire freelancer if needed

---

**Version**: 1.0.0
**Last Updated**: June 2024
