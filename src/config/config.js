const config = {
    bucket: {
        slug: process.env.COSMIC_BUCKET || 'recipe-app',
        read_key: process.env.COSMIC_READ_KEY,
        write_key: process.env.COSMIC_WRITE_KEY
    },
    object_type: 'recipes',
    image_folder: 'recipe-feature-images'
};

export default config;