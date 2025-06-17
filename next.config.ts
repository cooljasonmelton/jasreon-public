import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// TODO: update this once getting ready for production
// import type { NextConfig } from 'next'

// const nextConfig: NextConfig = {
//   // Essential for production
//   reactStrictMode: true,
//   poweredByHeader: false, // Remove X-Powered-By header for security

//   // Image optimization for creator content, avatars, banners
//   images: {
//     formats: ['image/webp', 'image/avif'],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     domains: [
//       // Supabase Storage - dynamically from env
//       ...(process.env.NEXT_PUBLIC_SUPABASE_URL
//         ? [process.env.NEXT_PUBLIC_SUPABASE_URL.replace('https://', '').replace('http://', '')]
//         : ['your-project.supabase.co']), // fallback
//       // Social login providers (for Supabase Auth)
//       'graph.facebook.com',
//       'pbs.twimg.com',
//       'lh3.googleusercontent.com',
//       'avatars.githubusercontent.com',
//       // CDN from env if available
//       ...(process.env.NEXT_PUBLIC_CDN_DOMAIN ? [process.env.NEXT_PUBLIC_CDN_DOMAIN] : []),
//     ],
//     dangerouslyAllowSVG: false, // Security: prevent SVG XSS
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },

//   // Security headers
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'X-Frame-Options',
//             value: 'DENY', // Prevent clickjacking
//           },
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff',
//           },
//           {
//             key: 'Referrer-Policy',
//             value: 'strict-origin-when-cross-origin',
//           },
//           {
//             key: 'Content-Security-Policy',
//             value: [
//               "default-src 'self'",
//               "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://checkout.stripe.com",
//               "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
//               "font-src 'self' https://fonts.gstatic.com",
//               "img-src 'self' data: https: blob:",
//               "connect-src 'self' https://api.stripe.com https://checkout.stripe.com https://*.supabase.co wss://*.supabase.co",
//               "frame-src https://js.stripe.com https://checkout.stripe.com",
//               "object-src 'none'",
//               "base-uri 'self'",
//               "form-action 'self'",
//             ].join('; '),
//           },
//         ],
//       },
//       // Cache static assets aggressively
//       {
//         source: '/_next/static/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//     ]
//   },

//   // Redirects for SEO and user experience
//   async redirects() {
//     return [
//       // Redirect old creator URLs to new format
//       {
//         source: '/user/:username',
//         destination: '/creators/:username',
//         permanent: true,
//       },
//       // Force HTTPS in production
//       {
//         source: '/(.*)',
//         has: [
//           {
//             type: 'header',
//             key: 'x-forwarded-proto',
//             value: 'http',
//           },
//         ],
//         destination: `https://${process.env.NEXT_PUBLIC_APP_URL || 'yourdomain.com'}/:path*`,
//         permanent: true,
//       },
//     ]
//   },

//   // URL rewrites for clean URLs
//   async rewrites() {
//     return [
//       // Creator profile pages
//       {
//         source: '/:username',
//         destination: '/creators/:username',
//         has: [
//           {
//             type: 'query',
//             key: 'username',
//             value: '(?!api|_next|auth|admin).*', // Exclude system routes
//           },
//         ],
//       },
//     ]
//   },

//   // Webpack optimizations
//   webpack: (config, { dev, isServer }) => {
//     // Bundle analyzer in development
//     if (dev && !isServer) {
//       config.plugins.push(
//         new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({
//           analyzerMode: 'server',
//           openAnalyzer: false,
//         })
//       )
//     }

//     // Optimize for production
//     if (!dev) {
//       config.optimization.splitChunks = {
//         chunks: 'all',
//         cacheGroups: {
//           vendor: {
//             test: /[\\/]node_modules[\\/]/,
//             name: 'vendors',
//             chunks: 'all',
//           },
//         },
//       }
//     }

//     return config
//   },

//   // Compression
//   compress: true,

//   // Experimental features that might be useful
//   experimental: {
//     // Not needed with Supabase since you're not using Prisma
//     // serverComponentsExternalPackages: ['prisma', '@prisma/client'],

//     // For better performance with large apps
//     optimizeCss: true,

//     // Enable if you need middleware performance
//     middlewareSourceMaps: !process.env.NODE_ENV === 'production',
//   },

//   // Output configuration for deployment
//   output: process.env.NODE_ENV === 'production' ? 'standalone' : undefined,

//   // Environment variables (don't put secrets here)
//   env: {
//     NEXT_PUBLIC_APP_NAME: 'YourPatreonLikeApp',
//     NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com',
//   },

//   // Transpile packages if needed
//   transpilePackages: [
//     // Supabase packages
//     '@supabase/supabase-js',
//     '@supabase/auth-ui-react',
//     '@supabase/auth-ui-shared',
//     // Stripe for payments
//     '@stripe/stripe-js',
//   ],

//   // Logging
//   logging: {
//     fetches: {
//       fullUrl: process.env.NODE_ENV === 'development',
//     },
//   },
// }

// export default nextConfig
