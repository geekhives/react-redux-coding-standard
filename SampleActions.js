export const onGetUsers = (data) => ({
    type: c.CONSTANT,
    data
})

export const deleteItem = (refno) => ({
    type: c.DELETE_ITEM,
    refno
})
 
export const getUsers = () => {
    return (dispatch, getState, { api, _ }) => {
        api.getUsers('/users')
            .then(response => {
                if(!response) return false;
                const { data } = response;
                dispatch(onGetUsers(data));
            })
    }
}