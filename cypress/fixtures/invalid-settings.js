export const data = [
    {
        name: "Username Taken",
        settings: {
            username:"abcd"
        },
        errorMessages:["username has already been taken"]
    },
    {
        name: "Invalid Email",
        settings: {
            email:"keshav@yahoo"
        },
        errorMessages:["email is invalid"]
    },
    {
        name: "Invalid Email and username",
        settings: {
            username:"abcd",
            email:"keshav@yahoo"
        },
        errorMessages:["username has already been taken","email is invalid"]
    }
]