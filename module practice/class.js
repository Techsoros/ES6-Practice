class Student {
    id;
    name;
    university = 'HSTU';
    contact;
    constructor(id = 'Not Published', name = 'unknown', contact = 'Not Porvided') {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.display();
    }
    display() {
        console.log(`id = ${this.id}`);
        console.log(`Name = ${this.name}`);
        console.log(`Contact = ${this.contact}`);
        console.log(`University = ${this.university}\n\n`);

    }
    address = {
        city,
        division,
        country: 'Bangladesh'


    }

}

const student1 = new Student();

const student2 = new Student(1702009, 'Zihad');