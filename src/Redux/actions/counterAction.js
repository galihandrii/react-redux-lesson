export const handleDecrease = (counterReducer)=> (dispatch) => {
    let newTotal = counterReducer.total-1;
 
    dispatch({
     type:'KURANG',
     payload: newTotal,
    })
    }
    export  const handleIncrease = (counterReducer)=> (dispatch) => {
     let newTotal =counterReducer.total+1;
 
     dispatch({
       type:'TAMBAH',
       payload: newTotal,
     })
    }