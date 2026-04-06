function signup(username, email, password) {
    if (!username || !email || !password) {
        return "Error: All fields required";
    }

    if (!email.includes("@")) {
        return "Error: Invalid email";
    }

    if (password.length < 6) {
        return "Error: Password too short";
    }

    return "Signup successful";
}
