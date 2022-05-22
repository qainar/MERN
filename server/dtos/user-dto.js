module.exports = class UserDto{
    email;
    id;
    number;
    name;
    isActivated;

    constructor(model) {
        this.email = model.email
        this.name = model.name
        this.number = model.number
        this.id = model._id
        this.isActivated = model.isActivated
    }
}