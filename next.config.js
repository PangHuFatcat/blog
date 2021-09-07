const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
module.exports = {
    experimental: { esmExternals: true },
    reactStrictMode: true,
    assetPrefix: isProd ? 'https://panghu.dev' : '',
}
