const {createSlice} =require("@reduxjs/toolkit");

const STATUSES=Object.freeze(
  {
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
  }
)


//create slice method
const productSlice= createSlice({
    name:"product",
    initialState:{
      data:[],
      status:STATUSES.IDLE,
    },
    reducers:{
        setProducts(state,action) { 
            state.data=action.payload;
        },
        setStatus(state,action) { 
          state.status=action.payload;
      }
        
    }
});
export const {setProducts,setStatus} =productSlice.actions;
export default productSlice.reducer;

export function fetchProducts(){
    return async function fetchProductThuk(dispatch,getState){
      dispatch(setStatus(STATUSES.LOADING));
     
      try{
        const res=await fetch("https://fakestoreapi.com/products");
        const data=await res.json();
        dispatch(setProducts(data));
        dispatch(setStatus(STATUSES.IDLE));
      }catch(err){
        console.log(err);
        dispatch(setStatus(STATUSES.ERROR));

      }
    }
         
}


//Thunks:-is a programming term that means "a piece of code that does some dealed work
//inbuild configur
//rather than execute some logic now .
//we can write a function body or code that can be used to perform the work later