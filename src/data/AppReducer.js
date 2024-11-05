export default function AppReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const newItem = {
        id: state.length ? Math.max(...state.map(item => item.id)) + 1 : 1,
        ...action.payload
      };
      return [...state, newItem];
    }

    case 'edit': {
      return state.map(item =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    }

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