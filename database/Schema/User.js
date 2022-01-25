export default class User{
    static dbName = "users";

    constructor(firstname,
                lastname,
                mail,
                phone,
                age,
                gender) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.mail = mail;
        this.phone = phone;
        this.age = age;
        this.gender = gender;
    }

    toString(){
        return `User : ${this.firstname} ${this.lastname}, ${this.gender}, ${this.age} years old | ${this.mail} | ${this.phone}.`;
    }

    static converter = {
        toFirestore: (user) => {
            return {
                firstname: user.firstname,
                lastname: user.lastname,
                mail: user.lastname,
                phone: user.phone,
                age: user.age,
                gender: user.age
            }
        },
        fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new User(data.firstname, data.lastname, data.mail, data.phone, data.gender);
        }
    }
}