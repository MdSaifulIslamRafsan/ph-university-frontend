import { baseApi } from "../../api/baseApi";

 const academicSemester =  baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAcademicSemester : builder.query({
            query: () => `/academic-semesters`,
        })
    })
})

export const {useGetAcademicSemesterQuery} = academicSemester;