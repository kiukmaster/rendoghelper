/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/rpghelper",
                destination: "https://naver.com",
                permanent: false,
            },
            {
                source: "/randomhelper",
                destination: "https://naver.com",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig
