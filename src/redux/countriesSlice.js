import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchCountries=createAsyncThunk('fetchCountries', async ()=>{
    const res= await fetch('https://restcountries.com/v3.1/all')
    const data=await res.json()
    return data
})

const initialState={
    data:[],
    liveSearch:'',
    filterRagion:'All'
}

const countriesSlice=createSlice({
    name:'countries',
    initialState,
    reducers:{
        addSearch:(state, action)=>{
            state.liveSearch=action.payload
        },
        addRegion:(state, action)=>{
            state.filterRagion=action.payload
        }
        
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCountries.fulfilled, (state, action)=>{
            state.data=action.payload
        })
    }
})


export const {addData, addSearch, addRegion }=countriesSlice.actions
export default countriesSlice.reducer