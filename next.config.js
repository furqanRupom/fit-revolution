/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com','img.freepik.com','marketplace.canva.com','images.pexels.com',"i5.walmartimages.ca","i5.walmartimages.com"],
      },
    env:{
      PUBLIC_APPWRITE_URL : "https://cloud.appwrite.io/v1",
      PUBLIC_APPWRITE_PROJECT_ID:"64ce65e5f11560014776",

    }
}

module.exports = nextConfig
