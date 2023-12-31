export default function furnitureReducer(state, action) {
    switch (action.type) {
        case ('FURNITURE_FETCH'):
            return { ...action.payload }
        case ('COMMENT_ADD'):
            return {
                ...state,
                commentsData: [...state.commentsData,
                {
                    ...action.payload,
                    author: {
                        email: action.email
                    }
                }
                ]
            }
        case ('COMMENT_DELETE'):
            return {
                ...state,
                commentsData: state.commentsData.filter(comment => comment._id !== action.payload)
            }
        case ('LIKE_ADD'):
            return {
                ...state,
                likesData: [...state.likesData, action.payload]
            }
        case ('LIKE_DELETE'):
            return {
                ...state,
                likesData: state.likesData.filter(like=> like._id !== action.payload)
            }
        default:
            return state;
    }
}
