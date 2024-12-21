/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => Object.assign({}, config, {
        module: Object.assign({}, config.module, {
            rules: config.module.rules.concat([
                {
                    test: /\.md$/,
                    loader: 'emit-file-loader',
                    options: {
                        name: 'dist/[path][name].[ext]',
                    },
                },
                {
                    test: /\.md$/,
                    loader: 'raw-loader',
                }
            ]),
        }),
    }),
};

export default nextConfig;
