const student = {
    name: 'Kishore Morol Bhadua',
    money: -420,
    study: 'Bhaduagiri in Philoshophy',
    subjects: ['goa mara', 'hol chosha', 'hizra dance', 'herapheri'],
    takeBJ: function () {
        return 'Fahim mujhe BlowJob dede -' + this.name;
    }
}

const badam = {
    name: 'Kancha Badam',
    money: 8000
}

const result2 = student.exam.call(badam);
