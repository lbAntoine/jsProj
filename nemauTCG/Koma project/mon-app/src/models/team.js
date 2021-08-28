import {v4 as uid} from 'uuid';

class Team {

    constructor(name, img_url) {
        this.id = uid()
        this.name = name
        this.img_url = img_url
    }

}

export default Team;
