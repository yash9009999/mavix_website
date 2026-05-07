# AWS Amplify Deployment Guide

This guide will help you deploy the MavixHub website to AWS Amplify.

## 🚀 Prerequisites

- AWS Account with Amplify access
- GitHub/GitLab/Bitbucket repository
- Node.js 18+ installed locally

## 📋 Deployment Steps

### 1. Push Code to Repository

```bash
# Initialize Git repository
git init
git add .
git commit -m "Initial commit: MavixHub website ready for deployment"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/mavixhub.git
git push -u origin main
```

### 2. Set up AWS Amplify

1. **Navigate to AWS Amplify Console**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "Get Started" under "Deploy"

2. **Connect Repository**
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize AWS to access your repository
   - Select the `mavixhub` repository
   - Choose the `main` branch

3. **Configure Build Settings**
   - **Build type**: `Continuous deployment (Git-based)`
   - **Framework**: `Next.js`
   - **Build configuration**: Use the provided `amplify.yml` file

4. **Environment Variables** (Optional)
   Add these in the Amplify console under "Environment variables":
   ```
   SITE_URL=https://your-app-url.amplifyapp.com
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   CONTACT_EMAIL=hello@mavixhub.com
   ```

5. **Review and Deploy**
   - Review all settings
   - Click "Save and deploy"

### 3. Build Configuration

The `amplify.yml` file handles the build process automatically:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
    discardPaths: no
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### 4. Custom Domain (Optional)

1. **Add Custom Domain**
   - In Amplify console, go to "Domain management"
   - Click "Add domain"
   - Enter your domain name
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Amplify automatically provisions SSL certificates
   - HTTPS will be enabled automatically

### 5. Monitor Deployment

- **Build Logs**: View in Amplify console under "Build logs"
- **Deployment Status**: Real-time status updates
- **Performance**: Monitor in AWS CloudWatch

## 🔧 Configuration Files

### amplify.yml
- Handles build process
- Caches dependencies for faster builds
- Specifies build artifacts

### next.config.js
- Optimized for production
- Image optimization
- Performance optimizations

### .env.example
- Template for environment variables
- Copy to `.env.local` for local development

## 🌐 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Forms are working
- [ ] 3D elements render properly
- [ ] Mobile responsiveness works
- [ ] SEO metadata is correct
- [ ] Sitemap is generated
- [ ] Custom domain (if configured)
- [ ] SSL certificate is active

## 🔄 Continuous Deployment

Amplify automatically deploys changes when you push to your repository:

```bash
git add .
git commit -m "Update: New feature or fix"
git push origin main
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check build logs in Amplify console
   - Ensure all dependencies are in package.json
   - Verify environment variables

2. **3D Elements Not Loading**
   - Check browser console for errors
   - Verify Three.js dependencies
   - Check WebGL support

3. **Form Submission Issues**
   - Check form validation
   - Verify environment variables
   - Check network requests

### Debug Commands

```bash
# Local build test
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📊 Performance Optimization

The build includes:
- Image optimization (WebP, AVIF)
- Code splitting
- Tree shaking
- Compression
- Caching headers

## 🔒 Security Considerations

- Environment variables are encrypted
- No sensitive data in client-side code
- HTTPS enforced
- CSP headers configured

## 📞 Support

If you encounter issues:
1. Check AWS Amplify documentation
2. Review build logs
3. Test locally with `npm run build`
4. Contact AWS Support if needed

---

**Ready to deploy! 🚀**
