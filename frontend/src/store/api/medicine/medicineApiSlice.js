import { apiSlice } from "../apiSlice";

export const medicineApi = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        getMedicine:builder.query({
            query:()=>({
                url:"/medicines",
                method:'GET'
            })
        })
    })
})

export const {useGetMedicineQuery} = medicineApi