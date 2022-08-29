var c = 0;
class Student {
    name;
    id;
    university = 'HSTU';
    constructor(name = 'Not Inserted', id = 'Not Provided') {
        c++;
        this.name = name;
        this.id = id;

    }
    display() {
        console.log(c);
        console.log(`Name = ${this.name}`);
        console.log(`id = ${this.id}`);
        console.log(`University Name = ${this.university}
        
        `);
    }
}
class Resident extends Student {
    hall;
    room;

    constructor(name, id, hall = 'Not provided', room = 'None') {
        super(name, id);
        this.hall = hall;
        this.room = room;
        this.display();

    }
    display() {
        super.display();
        console.log(`${this.name} Lives in ${this.hall}
        Room No = ${this.room};
        `);
    }

}

const student = new Student('Zihad', 1702009);
const student2 = new Student('Anas', 1702059);
const student3 = new Resident('Bishal', 1702050, 'Zia hall', 334);