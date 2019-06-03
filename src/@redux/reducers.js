import { ADD } from "./types";

export const todoReducer = (state = { elements: [] }, { type, data: { text } = {} }) => {
    switch(type) {
        case ADD:
            state.elements = [...state.elements, text];
            break;
    }

    return state;
} 