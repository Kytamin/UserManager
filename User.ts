enum Role{
    admin=1,
    user
}
class User{
    protected name:string
    protected email:string
    role:Role
    constructor(name: string, email: string, role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo(){
        console.log(`-tên:${this.name} ,email:${this.email},role:${this.isAdmin()}`)
    }
    isAdmin(){
        if (this.role===1){
            return Role[1]
        }else {
            return Role[2]
        }
    }
}
let user1= new User("K","nhk@gmail.com",1)
let user2 = new User("Áda","ádasdsa",2)
user1.getInfo()
user2.getInfo()


