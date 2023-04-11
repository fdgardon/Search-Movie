class Profile {
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
    }
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getPassword(){
        return this.password
    }
};

module.exports = Profile