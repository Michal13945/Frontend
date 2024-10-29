export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit":
            return state;

        case "rate": {
            const updatedState = state.map(car => {
                if (car.id === action.payload.id) {
                  return {
                    ...car,
                    rating: action.payload.newRating
                  };
                }
                return car;
              });
              return updatedState;
        }

        case "delete": {
            const { id } = action.payload;
            return state.filter(item => item.id !== id);
        }

        default:
            return state;
    }
}