/** @type {import('next').NextConfig} */

const nextConfig = {
        reactStrictMode: false,
        env: {
                NEXT_PUBLIC_GRAPH_API_FB_URL: 'https://graph.facebook.com/v20.0',
                NEXT_PUBLIC_BASE_URL: "http:localhost:3001",
                NEXT_PUBLIC_API_URL: "http://localhost:8080",
                NEXT_PUBLIC_CLIENT_URL: "http://localhost:3002",
                NEXT_PUBLIC_HUBSPOT_API_URL: "https://api.hubapi.com",
                NEXT_PUBLIC_ELASTIC: "http://localhost:9201",
                // Gemini API
                NEXT_PUBLIC_GEMINI_API_KEY: "AIzaSyChBVi68KPbC64ZFmPfA7t1WIkXk6IkE_o",
                NEXT_PUBLIC_GEMINI_MODEL_NAME: "gemini-1.5-flash",
                // Facebook WebHook
                PAGE_ACCESS_TOKEN_FB: "EAAbki2MDhJwBO5ZBE2xAKEGtws0hyJsCVrcbr4b7u5nJxXSswhbZCZBSfGO6WOIsEvTdeUjTuX4HntRhmN9u5GgrYIyrIJVP7LZA5nNciVCh2Y9rikCsHC2trMZA9tzDJvwPtDZCUFMWTMGiXIxh2QhvCt6dMllCyW1EGBtH8BEhWZCtir0yjMaBwqSW4UCHzDMwNMoc5C7EheYkzwZD",
                VERIFY_TOKEN_FB: "jobnet",
                // Hubspot Webhook
                HUSPOT_TOKEN: "pat-na1-6c5be889-36df-4067-96db-15fc10dd2ed8",
                HUSPOT_CLIENT_SECRET_ID: "a2d43f99-c475-4e87-84bc-4bcf1043fb96",
                HUBSPOT_AI_ACTOR_ID: "A-68727367",
                HUBSPOT_ASSISTANT_ACTOR_ID: "A-68645562",
        }
};

export default nextConfig;
