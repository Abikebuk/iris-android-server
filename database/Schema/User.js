export default class User{
    static dbName = "users";

    constructor(firstname,
                lastname,
                mail,
                phone,
                age,
                gender,
                password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.mail = mail;
        this.phone = phone;
        this.age = age;
        this.gender = gender;
        this.password = password;
    }

    toString(){
        return `User : ${this.firstname} ${this.lastname}, ${this.gender}, ${this.age} years old | ${this.mail} | ${this.phone}.`;
    }

    static converter = {
        toFirestore: (user) => {
            return {
                firstname: user.firstname,
                lastname: user.lastname,
                mail: user.mail,
                phone: user.phone,
                age: user.age,
                gender: user.gender,
                password: user.password
            }
        },
        fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new User(data.firstname, data.lastname, data.mail, data.phone, data.gender);
        }
    }
}