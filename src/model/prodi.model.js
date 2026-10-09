import mongoose, { mongo } from "mongoose";

const schema = new mongo.schema(
    {
        kode: {
            type: String,
            required : true,
            unique: true
        },
        nama_prodi: {
            type: String,
            required: true,
            unique: true
        },
        fakultas: {
            type : mongoose.Schema.ObjectId,
            ref: "fakultas",
            required : true
        }
    },
    {
        timestamps : true
    },
);
