const productSchema = {
    product_id: {
        type: Number,
    },
    product_name: {
        type: String
    },
    product_description: {
        type: String
    },
    product_price: {
        type: Number
    },
    product_3D_model_mtl: {
        type: String
    },
    product_3D_model_obj: {
        type: String
    },
    product_3D_model_texture: {
        type: Array
    },
    product_3D_model_images: {
        type: Array
    },
    product_type: {
        type: Array
    }
}

module.exports = productSchema;