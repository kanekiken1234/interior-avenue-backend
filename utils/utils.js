
const getFurniture = async (Model) => {
    return new Promise(async (resolve, reject) => {
        let data = {}
        const details = await Model.find({});
        details.forEach(item => {
            data[item.product_id] = {
                "product_name": item.product_name,
                "product_price": item.product_price,
                "product_3D_model_image": item.product_3D_model_images[0]
            }
        })
        if (data) {
            resolve(data)
        }
        else {
            reject("Working on it wait...")
        }
    })
}

const getItemById = async (id, Model) => {
    return new Promise(async (resolve, reject) => {
        try {
            let status = 200;
            let msg = "Success";
            const item = await Model.findOne({ product_id: id });
            if (!item) {
                status = 401;
                msg = "Invalid Product ID";
                reject({ msg, status })
            }
            msg = item
            resolve({ msg, status })
        }
        catch (e) {
            reject(e.message)
        }
    })
}

module.exports = { getFurniture, getItemById };