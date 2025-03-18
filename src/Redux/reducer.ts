export const FirstValue = (state: any = true, action: any) => {
    switch (action.type) {
        case "Result":
            return !state;
        default:
            return state
    }

}