export const FirstValue = (state: any = false, action: any) => {
    switch (action.type) {
        case "Result":
            return !state;
        default:
            return state
    }

}