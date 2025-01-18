import contactschema from "../models/contactModels.js"

export const contactController = async (req, res) => {
    try {
        const contactData = new contactschema(req.body);
        const data = await contactData.save();
        return res 
        .status(201)
        .json({ success: true, message: "Your response will we submitted"})
    } catch (error) {
        return res
        .status(500)
        .json({ success: false, message: "Internal server error", error})
    }
}